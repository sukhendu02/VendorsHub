import React from 'react'
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Calendar,
  Send,
  Paperclip,
  X,
  ChevronDown,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
// import { useToast } from '../contexts/ToastContext';

import { useAuth } from "../Context/AuthContext"; 

export default function TicketsPage() {

const { user } = useAuth();

// const [user, setUser] = useState(null);
  // const { showToast } = useToast();
  // const { user } = useAuth();
  const [activeView, setActiveView] = useState('all'); // all, open, closed, pending
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Mock tickets data
  const [tickets, setTickets] = useState([
    {
      id: 'TKT-001',
      title: user.email,
      description: 'Getting error when trying to upload PDF resume file. The upload button is not responding.',
      status: 'Open',
      priority: 'High',
      category: 'Technical',
      createdBy: 'John Doe',
      assignedTo: 'Support Team',
      createdAt: '2025-01-15T10:30:00Z',
      updatedAt: '2025-01-15T14:20:00Z',
      replies: [
        {
          id: 1,
          author: 'Support Agent',
          message: 'Hi John, thank you for reporting this issue. Can you please try clearing your browser cache and try again?',
          timestamp: '2025-01-15T11:00:00Z',
          isStaff: true
        },
        {
          id: 2,
          author: 'John Doe',
          message: 'I tried clearing the cache but the issue persists. The file size is 2MB which should be within limits.',
          timestamp: '2025-01-15T14:20:00Z',
          isStaff: false
        }
      ]
    },  {
      id: 'TKT-002',
      title: 'Job matching algorithm not working correctly',
      description: 'The job matching scores seem inaccurate. I have React and TypeScript skills but getting low match scores for React jobs.',
      status: 'In Progress',
      priority: 'Medium',
      category: 'Feature Request',
      createdBy: 'Sarah Smith',
      assignedTo: 'Tech Team',
      createdAt: '2025-01-14T09:15:00Z',
      updatedAt: '2025-01-15T16:45:00Z',
      replies: [
        {
          id: 1,
          author: 'Tech Support',
          message: 'We are investigating the matching algorithm. Can you share your profile details so we can check the scoring?',
          timestamp: '2025-01-14T15:30:00Z',
          isStaff: true
        }
      ]
    },
     {
      id: 'TKT-003',
      title: 'Account access issue',
      description: 'Cannot login to my company account. Password reset is not working.',
      status: 'Closed',
      priority: 'High',
      category: 'Account',
      createdBy: 'Mike Johnson',
      assignedTo: 'Support Team',
      createdAt: '2025-01-13T14:20:00Z',
      updatedAt: '2025-01-14T10:30:00Z',
      replies: [
        {
          id: 1,
          author: 'Support Agent',
          message: 'Your account has been reset. Please check your email for new login credentials.',
          timestamp: '2025-01-14T10:30:00Z',
          isStaff: true
        }
      ]
    },
     {
      id: 'TKT-004',
      title: 'Feature request: Bulk candidate export',
      description: 'Would like to export candidate data in bulk for reporting purposes.',
      status: 'Pending',
      priority: 'Low',
      category: 'Feature Request',
      createdBy: 'Emily Davis',
      assignedTo: 'Product Team',
      createdAt: '2025-01-12T11:45:00Z',
      updatedAt: '2025-01-12T11:45:00Z',
      replies: []
    }
  ]);
    const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    category: 'Technical',
    priority: 'Medium'
  });

  const [replyText, setReplyText] = useState('');

  const statusOptions = ['Open', 'In Progress', 'Pending', 'Closed'];
  const priorityOptions = ['Low', 'Medium', 'High', 'Critical'];
  const categoryOptions = ['Technical', 'Account', 'Feature Request', 'Bug Report', 'General'];
// import { useAuth } from '../contexts/AuthContext';


 const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-purple-100 text-purple-800';
      case 'Closed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

    const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
   const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Critical':
      case 'High':
        return <AlertCircle className="w-4 h-4" />;
      case 'Medium':
        return <Clock className="w-4 h-4" />;
      case 'Low':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

    const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    
    const matchesView = activeView === 'all' || 
                       (activeView === 'open' && ticket.status === 'Open') ||
                       (activeView === 'closed' && ticket.status === 'Closed') ||
                       (activeView === 'pending' && ticket.status === 'Pending');

    return matchesSearch && matchesStatus && matchesPriority && matchesView;
  });

   const handleCreateTicket = (e) => {
    e.preventDefault();
    
    if (!newTicket.title || !newTicket.description) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const ticket = {
      id: `TKT-${String(tickets.length + 1).padStart(3, '0')}`,
      ...newTicket,
      status: 'Open',
      createdBy: user?.name || 'Anonymous',
      assignedTo: 'Support Team',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      replies: []
    };

    setTickets(prev => [ticket, ...prev]);
    setNewTicket({ title: '', description: '', category: 'Technical', priority: 'Medium' });
    setShowCreateModal(false);
    showToast('Ticket created successfully!', 'success');
  };

   const handleReply = (ticketId) => {
    if (!replyText.trim()) {
      showToast('Please enter a reply message', 'error');
      return;
    }

    const reply = {
      id: Date.now(),
      author: user?.name || 'Anonymous',
      message: replyText,
      timestamp: new Date().toISOString(),
      isStaff: user?.role === 'company' // Assuming company users are staff
    };

    setTickets(prev => prev.map(ticket => 
      ticket.id === ticketId 
        ? { 
            ...ticket, 
            replies: [...ticket.replies, reply],
            updatedAt: new Date().toISOString()
          }
        : ticket
    ));

    setReplyText('');
    showToast('Reply added successfully!', 'success');
  };

   const handleStatusChange = (ticketId, newStatus) => {
    setTickets(prev => prev.map(ticket => 
      ticket.id === ticketId 
        ? { ...ticket, status: newStatus, updatedAt: new Date().toISOString() }
        : ticket
    ));
    showToast(`Ticket status updated to ${newStatus}`, 'success');
  };
   const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
   const getTicketStats = () => {
    return {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'Open').length,
      inProgress: tickets.filter(t => t.status === 'In Progress').length,
      closed: tickets.filter(t => t.status === 'Closed').length,
      pending: tickets.filter(t => t.status === 'Pending').length
    };
  };
 const stats = getTicketStats();

  return (
    <>

      <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Support Tickets</h1>
              <p className="text-gray-600 mt-2">
                Manage and track your support requests
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create Ticket</span>
              </button>
            </div>
          </div>
        </div>
  {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                <p className="text-gray-600 text-sm">Total</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-2xl font-bold text-gray-900">{stats.open}</p>
                <p className="text-gray-600 text-sm">Open</p>
              </div>
            </div>
          </div>
               <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
                <p className="text-gray-600 text-sm">In Progress</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
                <p className="text-gray-600 text-sm">Pending</p>
              </div>
            </div>
          </div>
           <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-2xl font-bold text-gray-900">{stats.closed}</p>
                <p className="text-gray-600 text-sm">Closed</p>
              </div>
            </div>
          </div>
        </div>
            {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* View Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {[
                { key: 'all', label: 'All' },
                { key: 'open', label: 'Open' },
                { key: 'pending', label: 'Pending' },
                { key: 'closed', label: 'Closed' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveView(tab.key)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    activeView === tab.key
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
                {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search tickets..."
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex space-x-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Priority</option>
                {priorityOptions.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
    {/* Tickets List */}
        <div className="space-y-4">
          {filteredTickets.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tickets found</h3>
              <p className="text-gray-600">
                {searchTerm || statusFilter !== 'all' || priorityFilter !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Create your first support ticket to get started'
                }
              </p>
            </div>
          ) : (
            filteredTickets.map(ticket => (
              <div key={ticket.id} className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{ticket.title}</h3>
                        <span className="text-sm text-gray-500">#{ticket.id}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{ticket.description}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                         <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{ticket.createdBy}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{formatDate(ticket.createdAt)}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>{ticket.replies.length} replies</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                          {getPriorityIcon(ticket.priority)}
                          <span className="ml-1">{ticket.priority}</span>
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{ticket.category}</span>
                    </div>
                  </div>
                         {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedTicket(selectedTicket === ticket.id ? null : ticket.id)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{selectedTicket === ticket.id ? 'Hide Details' : 'View Details'}</span>
                      </button>
                      {user?.role === 'company' && (
                        <select
                          value={ticket.status}
                          onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {statusOptions.map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      Updated {formatDate(ticket.updatedAt)}
                    </div>
                  </div>
                </div>
                  {/* Ticket Details */}
                {selectedTicket === ticket.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-4">Conversation</h4>
                    
                    {/* Replies */}
                    <div className="space-y-4 mb-6">
                      {ticket.replies.map(reply => (
                        <div key={reply.id} className={`flex ${reply.isStaff ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-3xl ${reply.isStaff ? 'bg-blue-100' : 'bg-white'} rounded-lg p-4 shadow-sm`}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900">{reply.author}</span>
                              <span className="text-xs text-gray-500">{formatDate(reply.timestamp)}</span>
                            </div>
                            <p className="text-gray-700">{reply.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                      {/* Reply Form */}
                    {ticket.status !== 'Closed' && (
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <textarea
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                              rows="3"
                              placeholder="Type your reply..."
                            />
                            <div className="flex items-center justify-between mt-3">
                              <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm">
                                <Paperclip className="w-4 h-4" />
                                <span>Attach file</span>
                              </button>
                              <button
                                onClick={() => handleReply(ticket.id)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                              >
                                 <Send className="w-4 h-4" />
                                <span>Send Reply</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
  {/* Create Ticket Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Create New Ticket</h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
 <form onSubmit={handleCreateTicket} className="p-6 space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={newTicket.title}
                    onChange={(e) => setNewTicket(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      id="category"
                      value={newTicket.category}
                      onChange={(e) => setNewTicket(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {categoryOptions.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                      Priority
                    </label>
                    <select
                      id="priority"
                      value={newTicket.priority}
                      onChange={(e) => setNewTicket(prev => ({ ...prev, priority: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {priorityOptions.map(priority => (
                        <option key={priority} value={priority}>{priority}</option>
                      ))}
                    </select>
                  </div>
                </div>
                  <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    value={newTicket.description}
                    onChange={(e) => setNewTicket(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    rows="6"
                    placeholder="Please provide detailed information about your issue..."
                    required
                  />
                </div>
  <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
    
    </>
  )
}
