import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Book, Code, Lightbulb, Settings, ShoppingBag, Truck, FileCheck, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ReactMarkdown from "react-markdown";

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const sections = [
    {
      title: 'Getting Started',
      icon: Book,
      items: [
        {
          id: 'introduction',
          title: 'Introduction',
          content: `
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
          `
        }
      ]
    },
    {
      title: 'Getting Started',
      icon: Book,
      items: [
        {
          id: 'introduction',
          title: 'Introduction',
          content: `
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
          `
        }
      ]
    },
    {
      title: 'Getting Started',
      icon: Book,
      items: [
        {
          id: 'introduction',
          title: 'Introduction',
          content: `
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
            # Introduction to Vendor Platform

            Welcome to our comprehensive vendor platform documentation. This guide will help you understand how to effectively use our platform to grow your business.

            ## What you'll learn

            - Platform overview and key features
            - Setting up your vendor account
            - Best practices for success
            - Technical requirements and specifications

            ## Prerequisites

            Before you begin, make sure you have:
            - A valid business registration
            - Product inventory ready for listing
            - High-quality product images
            - Accurate product descriptions
          `
        }
      ]
    },

{
  title: 'Product Management',
  icon: ShoppingBag,
  items: [
    {
      id: 'adding-products',
      title: 'Adding Products',
      content: `
        # Adding Products

        Learn how to add and manage your product catalog effectively.

        ## Product Requirements

        - Minimum image resolution: 1000x1000px
        - Maximum of 8 images per product
        - Complete product specifications
        - Accurate inventory count

        ## Step-by-Step Guide

        1. Navigate to Products section
        2. Click "Add New Product"
        3. Fill in product details
        4. Upload product images
        5. Set pricing and inventory
        6. Publish your product
      `
    }
  ]
},
{
  title: 'Order Processing',
  icon: Truck,
  items: [
    {
      id: 'order-workflow',
      title: 'Order Workflow',
      content: `
        # Order Processing Workflow

        Understanding the complete order fulfillment process.

        ## Order States

        1. Pending
        2. Confirmed
        3. Processing
        4. Shipped
        5. Delivered

        ## Processing Timeline

        - Order confirmation: Within 12 hours
        - Processing start: Within 24 hours
        - Shipping: Within 48 hours
        - Delivery tracking: Real-time updates
      `
    }
  ]
},

{
  title: 'Order Processing',
  icon: Truck,
  items: [
    {
      id: 'order-workflow',
      title: 'Order Workflow',
      content: `
        # Order Processing Workflow

        Understanding the complete order fulfillment process.

        ## Order States

        1. Pending
        2. Confirmed
        3. Processing
        4. Shipped
        5. Delivered

        ## Processing Timeline

        - Order confirmation: Within 12 hours
        - Processing start: Within 24 hours
        - Shipping: Within 48 hours
        - Delivery tracking: Real-time updates
      `
    }
  ]
},

{
  title: 'Order Processing',
  icon: Truck,
  items: [
    {
      id: 'order-workflow',
      title: 'Order Workflow',
      content: `
        # Order Processing Workflow

        Understanding the complete order fulfillment process.

        ## Order States

        1. Pending
        2. Confirmed
        3. Processing
        4. Shipped
        5. Delivered

        ## Processing Timeline

        - Order confirmation: Within 12 hours
        - Processing start: Within 24 hours
        - Shipping: Within 48 hours
        - Delivery tracking: Real-time updates
      `
    }
  ]
},
  ];

  const getContent = () => {
    for (const section of sections) {
      const item = section.items.find(item => item.id === activeSection);
      if (item) {
        return item;
      }
    }
    return sections[0].items[0];
  };

  const currentContent = getContent();

  return (
    <div className="min-h-screen flex">
 


{/*   <div className="w-64 fixed  border-gray-700 p-3">
        <div className="">
          <div className="sticky top-0 z-10 backdrop-blur-lg  dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-8xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
          <nav>
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="mb-6">
                  <div className="flex items-center mb-3">
                    <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <h2 className="text-sm font-semibold ml-2 text-gray-900 dark:text-gray-100">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`#${item.id}`}
                          onClick={() => setActiveSection(item.id)}
                          className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                            activeSection === item.id
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>
      </div> */}

      {/* Main Content */}
{/*       <div className="flex-1 px-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-8">{currentContent.title}</h1>
          <div className="space-y-4">
            {currentContent.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.replace('- ', '')}</li>;
              }
              if (line.match(/^\d+\./)) {
                return <li key={index} className="ml-4">{line.replace(/^\d+\./, '')}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="text-gray-600 dark:text-gray-400">{line}</p>;
            })}
          </div>
        </article>
      </div> */}


<div className="min-h-screen w-full flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-72 h-screen sticky  backdrop-blur-lg top-0 border-r bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 p-4 overflow-y-auto hidden lg:block">
        {/* Search */}
        <div className="mb-6 sticky top-0 backdrop-sepia-100 ">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav>
          {sections.map((section, index) => {
            const Icon = section.icon || Book;
            return (
              <div key={index} className="mb-6">
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <h2 className="text-sm font-semibold ml-2">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={`#${item.id}`}
                        onClick={() => {
                          setActiveSection(item.id);
                          window.history.pushState(null, "", `#${item.id}`);
                        }}
                        className={`block py-2 px-3 text-sm rounded-md ${
                          activeSection === item.id
                            ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>

            {/* Main Content */}
      <div className="flex-1 px-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-8">{currentContent.title}</h1>
          <div className="space-y-4">
            {currentContent.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.replace('- ', '')}</li>;
              }
              if (line.match(/^\d+\./)) {
                return <li key={index} className="ml-4">{line.replace(/^\d+\./, '')}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="text-gray-600 dark:text-gray-400">{line}</p>;
            })}
          </div>
        </article>
      </div>
    </div>



    </div>






  );
}
