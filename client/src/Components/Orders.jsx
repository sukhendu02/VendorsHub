import React, { useState, useEffect } from 'react';
import { Filter, Search, Eye, X, Calendar, ChevronDown } from 'lucide-react';

const orders = [
    // {
    //     id: '1001',
    //     customerName: 'John Doe',
    //     total: 69.99,
    //     status: 'pending',
    //     date: '2024-03-15',
    //     items: [
    //         { name: 'Denim Jeans', quantity: 1, price: 69.99 }
    //     ],
    //     shippingAddress: '123 Main St, New York, NY 10001',
    //     paymentMethod: 'Credit Card'
    // },
    // {
    //     id: '1002',
    //     customerName: 'Jane Smith',
    //     total: 249.99,
    //     status: 'processing',
    //     date: '2024-03-14',
    //     items: [
    //         { name: 'Leather Jacket', quantity: 1, price: 249.99 }
    //     ],
    //     shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    //     paymentMethod: 'PayPal'
    // },
    // {
    //     id: '1003',
    //     customerName: 'Mike Johnson',
    //     total: 89.99,
    //     status: 'shipped',
    //     date: '2024-03-13',
    //     items: [
    //         { name: 'Running Shoes', quantity: 1, price: 89.99 }
    //     ],
    //     shippingAddress: '789 Pine Rd, Chicago, IL 60601',
    //     paymentMethod: 'Credit Card'
    // },
    // {
    //     id: '1004',
    //     customerName: 'Sarah Williams',
    //     total: 199.99,
    //     status: 'delivered',
    //     date: '2024-03-12',
    //     items: [
    //         { name: 'Smartwatch', quantity: 1, price: 199.99 }
    //     ],
    //     shippingAddress: '321 Elm St, Houston, TX 77001',
    //     paymentMethod: 'Debit Card'
    // }
];

const Orders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [dateFilter, setDateFilter] = useState('all');
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [filteredOrders, setFilteredOrders] = useState(orders);

    const statusTabs = [
        { id: 'all', label: 'All Orders' },
        { id: 'pending', label: 'Pending' },
        { id: 'processing', label: 'Processing' },
        { id: 'shipped', label: 'Shipped' },
        { id: 'delivered', label: 'Delivered' }
    ];

    const getStatusCount = (status) => {
        if (status === 'all') return orders.length;
        return orders.filter(order => order.status === status).length;
    };

    useEffect(() => {
        let filtered = [...orders];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(order =>
                order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.id.includes(searchTerm)
            );
        }

        // Status filter
        if (selectedStatus !== 'all') {
            filtered = filtered.filter(order => order.status === selectedStatus);
        }

        // Date filter
        const now = new Date();
        if (dateFilter !== 'all') {
            filtered = filtered.filter(order => {
                const orderDate = new Date(order.date);
                const diffTime = Math.abs(now.getTime() - orderDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                switch (dateFilter) {
                    case '1':
                        return diffDays <= 1;
                    case '7':
                        return diffDays <= 7;
                    case '30':
                        return diffDays <= 30;
                    default:
                        return true;
                }
            });
        }
        setFilteredOrders(filtered);
    }, [searchTerm, selectedStatus, dateFilter, orders]);

    const getStatusColor = (status) => {
        const colors = {
            pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500',
            processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500',
            shipped: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-500',
            delivered: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500'
        };
        return colors[status] || '';
    };

    return (
     <>
            <div>
                {/* Status Tabs */}
                <div className="mb-6">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8">
                            {statusTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedStatus(tab.id)}
                                    className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${selectedStatus === tab.id
                                            ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                        }
            `}
                                >
                                    {tab.label}
                                    <span className="ml-2 py-0.5 px-2 rounded-full text-xs bg-gray-100 dark:bg-gray-700">
                                        {getStatusCount(tab.id)}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-6">
                    
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                            <input
                                placeholder="Search orders by ID or customer name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                            />

                            <div className="flex space-x-4">
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                                >
                                    <option value="all">Filter by Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                </select>

                                <select
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                                >
                                    <option value="all">All Time</option>
                                    <option value="1">Last 24 Hours</option>
                                    <option value="7">Last 7 Days</option>
                                    <option value="30">Last 30 Days</option>
                                </select>

                                <select
                                    value={itemsPerPage}
                                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                                >
                                    <option value="10">10 per page</option>
                                    <option value="25">25 per page</option>
                                    <option value="50">50 per page</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Order ID
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Customer
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Total
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {filteredOrders.slice(0, itemsPerPage).map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">${order.total.toFixed(2)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {new Date(order.date).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <button
                                                        onClick={() => setSelectedOrder(order)}
                                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                                    >
                                                        <Eye className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Showing {Math.min(itemsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* Order Details Modal */}
                        {selectedOrder && (
                            <div className="fixed inset-0 bg-slate-800 bg-opacity-50 flex items-center justify-center p-4 z-50">
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-6">
                                            <h2 className="text-2xl font-bold">Order Details</h2>
                                            <button
                                                onClick={() => setSelectedOrder(null)}
                                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Order ID</h3>
                                                    <p className="mt-1">#{selectedOrder.id}</p>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</h3>
                                                    <p className="mt-1">{new Date(selectedOrder.date).toLocaleDateString()}</p>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Customer</h3>
                                                    <p className="mt-1">{selectedOrder.customerName}</p>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h3>
                                                    <p className="mt-1">
                                                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(selectedOrder.status)}`}>
                                                            {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Items</h3>
                                                <div className="border rounded-lg divide-y dark:divide-gray-700">
                                                    {selectedOrder.items.map((item, index) => (
                                                        <div key={index} className="p-4 flex justify-between items-center">
                                                            <div>
                                                                <p className="font-medium">{item.name}</p>
                                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                                    Quantity: {item.quantity}
                                                                </p>
                                                            </div>
                                                            <p className="font-medium">${item.price.toFixed(2)}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                                    Shipping Address
                                                </h3>
                                                <p className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                                    {selectedOrder.shippingAddress}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                                    Payment Method
                                                </h3>
                                                <p className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                                    {selectedOrder.paymentMethod}
                                                </p>
                                            </div>

                                            <div className="border-t pt-4 dark:border-gray-700">
                                                <div className="flex justify-between items-center text-lg font-bold">
                                                    <span>Total</span>
                                                    <span>${selectedOrder.total.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        )}
                    </div >
                    </div>


                </>
                );
};
 export default Orders;

