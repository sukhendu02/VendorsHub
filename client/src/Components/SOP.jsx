import React from 'react'

import { CheckCircle, AlertCircle, Clock, Package, Truck, FileCheck } from 'lucide-react';

export default function SOP() {

    const procedures = [
        {
            icon: Package,
            title: 'Product Guidelines',
        steps: [
          'List 100% genuine and original products only. Do not sell counterfeit, duplicate, or replica items.',
          'Sell products that are legally allowed under Indian law and marketplace policy',
          'List new, unused, and undamaged products only.',
          'Ensure products match descriptions, images, and specifications.',
          'Do not list products that infringe copyrights, trademarks, patents, or designs.',
          'Include any necessary safety instructions, warnings, or disclaimers.',
          'List only those personalized products you can legally design, print, or create.',
          
        ]
      },
        {
            icon: Package,
            title: 'Product Listing & Presentation Guidelines',
        steps: [
          'Upload clear, high-resolution images (minimum 3-4 angles).',
          'Write simple, detailed, and attractive product descriptions.',
          'Select correct categories, sub-categories, tags, and attributes for better searchability.',
          'Add product dimensions, material, personalization options, and usage instructions (if any).',
          'Update or add seasonal and festive products well in advance.',
          "Do not add watermarks or external branding unless approved",

        ]
      },
      {
        icon: FileCheck,
        title: 'Order Management & Processing',
        steps: [
          'Check new orders daily from the Vendor Dashboard.',
          'Print the invoice and packing slip for every order.',
          'Update the order status as Processing, Shipped, Completed at each stage.',
          'Maintain professional and polite communication with customers at all times.',
          'Offer replacements/return/refund quickly for damaged or wrong products.,'
          // 'Inspect products before shipping',
          // 'Verify product authenticity and condition',
          // 'Document quality control process',
          // 'Maintain cleanliness standards',
          // 'Regular staff training on quality standards'
        ]
      },
      {
        icon: Clock,
        title: 'Response Time Standards',
        steps: [
          'Check new orders daily from the Vendor Dashboard.',
          'Process refund requests within 48 hours.',
          'Update order status within 12 hours at each stage.',
          'Address customer complaints within 24 hours.',
          'Review and respond to product reviews weekly',
          'Respond to customer inquiries within 4 hours.',
        ]
      },
   
      {
        icon: FileCheck,
        title: ' Packing & Shipping (Gifting Focused)',
        steps: [
          'Inspect products before shipping',
          'Use clean, sturdy, and attractive packaging suitable for gifts.',
          'Use premium-quality gift boxes, fabric bags, paper wraps, ribbons, or bows wherever possible.',
          'Always pack products in beautiful, gift-appropriate boxes or wraps.',
          // 'Verify product authenticity and condition',
          'Use the marketplace shipping partner or update shipping details and tracking ID immediately',
          'Comply with packaging and labeling requirements as per government norms.',
          
        
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
      <h1 className="text-2xl font-bold text-complimentory mb-6">Standard Operating Procedures (SOPs)</h1>

      <div className="bg-sky-100 dark:bg-blue-900/20 p-4 broder-l-6  rounded-lg mb-8">
        <h4 className="text-md font-semibold text-complimentory dark:text-complimentory mb-3">
          Important Notice
        </h4>
        <p className="text-complimentory dark:text-complimentory text-sm">
          Following these procedures is essential for maintaining your vendor status and providing
          excellent customer service. Regular compliance reviews will be conducted.
          <br />
          <span className=''>All vendors must strictly follow these product listing guidelines to ensure a trustworthy, safe, and customer-friendly marketplace. Failing to comply with the SOPs or guidelines may lead to suspension of the sellor Account.</span>
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
                <h2 className="text-lg font-semibold ml-4">{procedure.title}</h2>
              </div>
              <ul className="space-y-3 text-sm">
                {procedure.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <span className="w-5 h-5 bg-sky-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-complimentory dark:text-complimentory text-sm mr-3 mt-0.5">
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
