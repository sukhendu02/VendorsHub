import React from 'react'

import { CheckCircle, AlertCircle, Clock, Package, Truck, FileCheck } from 'lucide-react';

export default function SOP() {

    const procedures = [
        {
            icon: Package,
            title: 'Product Listing Guidelines',
        steps: [
          'Process orders within 24 hours of receipt',
          'Use appropriate packaging materials',
          'Include packing slip with order details',
          'Update tracking information promptly',
          'Handle returns according to marketplace policy'
        ]
      },
      {
        icon: Clock,
        title: 'Response Time Standards',
        steps: [
          'Respond to customer inquiries within 4 hours',
          'Process refund requests within 48 hours',
          'Update order status within 12 hours',
          'Address customer complaints within 24 hours',
          'Review and respond to product reviews weekly'
        ]
      },
      {
        icon: FileCheck,
        title: 'Quality Control',
        steps: [
          'Inspect products before shipping',
          'Verify product authenticity and condition',
          'Document quality control process',
          'Maintain cleanliness standards',
          'Regular staff training on quality standards'
        ]
      }
    ];
  
    const compliance = [
      {
        icon: CheckCircle,
        type: 'Required',
        items: [
          'Valid business registration',
          'Product safety certifications',
          'Accurate product information',
          'Timely order processing',
          'Professional customer service'
        ]
      },
      {
        icon: AlertCircle,
        type: 'Prohibited',
        items: [
          'Counterfeit products',
          'Misleading product information',
          'Unauthorized use of trademarks',
          'Manipulated reviews or ratings',
          'Delayed shipping without notification'
        ]
      }
    ];
  
  return (
    <>
    <main className='bg-white rounded p-3'>

    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Standard Operating Procedures</h1>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
        <h2 className="text-lg font-semibold text-complimentory dark:text-complimentory mb-3">
          Important Notice
        </h2>
        <p className="text-complimentory dark:text-complimentory">
          Following these procedures is essential for maintaining your vendor status and providing
          excellent customer service. Regular compliance reviews will be conducted.
        </p>
      </div>

      <div className="space-y-8">
        {procedures.map((procedure, index) => {
          const Icon = procedure.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-complimentory dark:text-complimentory" />
                </div>
                <h2 className="text-xl font-semibold ml-4">{procedure.title}</h2>
              </div>
              <ul className="space-y-3">
                {procedure.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-complimentory dark:text-complimentory text-sm mr-3 mt-0.5">
                      {stepIndex + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {compliance.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 ${
                section.type === 'Prohibited'
                  ? 'border-l-4 border-red-500'
                  : 'border-l-4 border-green-500'
              }`}
            >
              <div className="flex items-center mb-4">
                <Icon
                  className={`w-6 h-6 ${
                    section.type === 'Prohibited'
                      ? 'text-red-500'
                      : 'text-green-500'
                  }`}
                />
                <h3 className="text-lg font-semibold ml-3">{section.type}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>



    </main>
    </>
  )
}
