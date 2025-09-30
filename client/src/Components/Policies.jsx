import react from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
   
import { Info,ListRestart } from 'lucide-react'
export default function Policies(){

     
    
        
    return(
        <>
        <main className='bg-white rounded p-3'>

        
        <div className='bg-sky-100 text-complimentory border-l-6 text-xs p-2 w-fit m-4'>
        <Info className='inline' size={12} /> By completing the vendor onboarding process, the vendor automatically agrees to all marketplace terms and policies and be bound by any future updates. 
       <br />
       <p className='mt-3 font-bold'><ListRestart className='inline' size={15} /> Last Updated: 10 Sep 2025</p>
        </div>
       
       <TabGroup>
       
      <TabList className="text-center  rounded-full w-fit m-auto">
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Registration, Account, and Conduct Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Product Listing, Content & Pricing Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Order Fulfillment, Shipping & Delivery Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Return, Refund, Cancellation & Dispute Resolution Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Payment, Commission & Financial Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Data Privacy, Promotions & General Terms Policy</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
            <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Registration, Account, and Conduct Policy</h2>
            </div>

            <div className='p-6 text-xs  text-slate-600'>

  
  <div className="max-w-3xl space-y-8 text-gray-800 ">

  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Registration, Account & Conduct Policy</h1>

  {/* <!-- Section 1 --> */}
  <section>
    <h2 className="text-lg font-semibold">1. Eligibility & Registration</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>Vendors must be 18 years or older and legally capable of entering into binding agreements.</li>
      <li>By registering, the vendor affirms that the information provided is accurate, up-to-date, and belongs to the registrant or their legal business entity.</li>
      <li>Submission of identity, business, tax (GST, PAN), bank details, and relevant licenses is mandatory for account verification.</li>
      <li>The platform reserves the right to reject any registration without stating a reason.</li>
    </ul>
  </section>

  {/* <!-- Section 2 --> */}
  <section>
    <h2 className="text-lg font-semibold">2. Vendor Account Responsibility</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>Each vendor is solely responsible for all activity conducted through their account.</li>
      <li>Credentials such as email, password, OTPs, or API keys must be protected and not shared with unauthorized users.</li>
      <li>If unauthorized access or misuse is suspected, the vendor must notify the platform immediately in writing.</li>
      <li>All actions taken from the account—listings, communication, order fulfillment, messages—will be considered legally binding by the vendor.</li>
    </ul>
  </section>

  {/* <!-- Section 3 --> */}
  <section>
    <h2 className="text-lg font-semibold">3. Acceptable Use & Conduct</h2>
    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Vendors are expected to uphold ethical, legal, and professional behavior. The following are strictly prohibited:</p>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>Listing counterfeit, stolen, prohibited, or misrepresented products.</li>
      <li>Uploading false or manipulated information, documents, or bank details.</li>
      <li>Spamming, harassment, abusive messages, or coercion of any buyer or platform member.</li>
      <li>Sharing customer data externally or using it for personal gain beyond order fulfillment.</li>
      <li>Attempting to divert buyers off-platform (including via links, QR codes, or contact numbers).</li>
    </ul>
  </section>

  {/* <!-- Section 4 --> */}
  <section>
    <h2 className="text-lg font-semibold">4. Platform Rights & Enforcement</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>The platform reserves the right to:
        <ul className="list-disc ml-6 mt-1 space-y-1">
          <li>Request additional verification or documentation at any time.</li>
          <li>Audit vendor activity for suspicious behavior or rule violations.</li>
          <li>Temporarily suspend, permanently ban, or delete any account in breach of this policy, with or without prior notice.</li>
        </ul>
      </li>
      <li>In case of legal disputes, fraud, or customer complaints, full responsibility lies with the vendor, not the platform.</li>
      <li>Platform’s role is strictly limited to technology facilitation and discovery; it does not act as guarantor, mediator, or co-seller.</li>
    </ul>
  </section>

  {/* <!-- Section 5 --> */}
  <section>
    <h2 className="text-lg font-semibold">5. Indemnification & Liability</h2>
    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
      The vendor agrees to indemnify, defend, and hold harmless the platform, its team, and partners against any loss, claim, damage, liability, or legal expense arising due to the vendor’s actions or inactions.
    </p>
    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
      This includes, but is not limited to: customer claims, product-related disputes, data breaches, regulatory violations, or any third-party legal notices.
    </p>
  </section>

  {/* <!-- Final Note --> */}
  <div className="text-sm text-gray-500 mt-6 border-t pt-4 dark:border-gray-600">
    <strong className="text-orange-600 dark:text-orange-400">Disclaimer:</strong> By continuing to use the platform, the vendor confirms understanding and agreement to this policy and accepts full responsibility for their actions, listings, and interactions. The platform holds no legal or financial liability for any vendor behavior.
  </div>
</div>

            </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Product Listing, Content & Pricing Policy </h2>

            </div>
             
              <div className='p-6 text-xs  text-slate-600'>
  
<div className="max-w-3xl space-y-8 text-gray-800 ">

  {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Product Listing, Content & Pricing Policy</h1> */}

  {/* <!-- Section 1 --> */}
  <section>
    <h2 className="text-lg font-semibold">1. Vendor Responsibility for Listings</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>All product listings, descriptions, specifications, and attributes are created and published solely by the vendor.</li>
      <li>The vendor guarantees that products are genuine, legal, and safe for sale and use within the jurisdiction they operate.</li>
      <li>Vendors must ensure accurate details (title, description, dimensions, materials, warranty, expiry dates, etc.) at all times.</li>
      <li>Vendors accept that any claims, disputes, injuries, or damages arising from product quality, safety, or authenticity are their full responsibility.</li>
    </ul>
  </section>

  {/* <!-- Section 2 --> */}
  <section>
    <h2 className="text-lg font-semibold">2. Prohibited & Restricted Products</h2>
    <p className="text-sm mt-2">Vendors are strictly prohibited from listing the following items:</p>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Counterfeit, fake, or replica goods.</li>
      <li>Illegal, stolen, or smuggled products.</li>
      <li>Products that infringe on trademarks, copyrights, or intellectual property rights.</li>
      <li>Weapons, explosives, drugs, alcohol, tobacco, or controlled substances.</li>
      <li>Perishable goods without proper storage/expiry details.</li>
      <li>Any item restricted under local or international law.</li>
    </ul>
    <p className="text-sm text-gray-500 mt-2">Violation of this clause results in immediate account termination and legal liability borne solely by the vendor.</p>
  </section>

  {/* <!-- Section 3 --> */}
  <section>
    <h2 className="text-lg font-semibold">3. Content Accuracy & Compliance</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Images must be clear, original, and representative of the product. Misleading or stolen images are prohibited.</li>
      <li>Descriptions must be factually correct, not exaggerated, and free from deceptive claims.</li>
      <li>All product claims (safety, durability, medical, organic, handmade, etc.) must be backed by valid certifications where applicable.</li>
      <li>Any third-party IP (brand names, logos, images) may only be used with written authorization.</li>
      <li>Product listings must comply with consumer protection and advertising laws.</li>
    </ul>
  </section>

  {/* <!-- Section 4 --> */}
  <section>
    <h2 className="text-lg font-semibold">4. Pricing, Discounts & Taxes</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors have full control over product pricing but must ensure accuracy and fairness.</li>
      <li>Prices must include all applicable taxes, duties, or charges where legally required.</li>
      <li>Artificial inflation of prices followed by fake discounts is strictly prohibited.</li>
      <li>All promotional pricing (sales, bundles, coupon discounts) is the vendor’s decision and liability.</li>
      <li>Vendors are solely responsible for updating price changes in real time.</li>
    </ul>
  </section>

  {/* <!-- Section 5 --> */}
  <section>
    <h2 className="text-lg font-semibold">5. Inventory Management</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must maintain accurate stock levels and avoid overselling.</li>
      <li>Out-of-stock products must be updated or paused immediately.</li>
      <li>Failure to deliver due to incorrect inventory is solely the vendor’s liability, including refunds or compensation.</li>
    </ul>
  </section>

  {/* <!-- Section 6 --> */}
  <section>
    <h2 className="text-lg font-semibold">6. Content Moderation & Takedown</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The platform reserves the right to review, reject, or remove any listing that violates policies or laws, without prior notice.</li>
      <li>The platform is not obligated to pre-screen content but may do so for compliance and customer trust.</li>
      <li>Vendors shall not hold the platform liable for suspension or removal of any product listing.</li>
    </ul>
  </section>

  {/* <!-- Section 7 --> */}
  <section>
    <h2 className="text-lg font-semibold">7. Liability & Indemnification</h2>
    <p className="text-sm mt-2">By listing products, the vendor agrees to:</p>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Indemnify the platform from all legal, financial, or reputational claims arising out of product listings.</li>
      <li>Bear sole responsibility for consumer complaints, regulatory action, warranty obligations, or injury caused by products.</li>
      <li>Reimburse the platform for any losses, penalties, or costs incurred due to vendor product violations.</li>
    </ul>
  </section>

  {/* <!-- Final Note --> */}
  <div className="text-sm text-gray-500 mt-6 border-t pt-4 dark:border-gray-600">
    <strong className="text-orange-600 dark:text-orange-400">Disclaimer:</strong> The platform only provides a technological space for vendors to showcase products. All responsibility for listing accuracy, legality, pricing, and consumer claims rests entirely with the vendor.
  </div>

</div>
                </div>
        </TabPanel>
        <TabPanel>
       
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Order Fulfillment, Shipping & Delivery Policy</h2>
            </div>

          <div className='p-6 text-xs  text-slate-600'> 
 <div className="max-w-3xl space-y-8 text-gray-800 ">

  {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order Fulfillment, Shipping & Delivery Policy</h1> */}

  {/* <!-- Section 1 --> */}
  <section>
    <h2 className="text-lg font-semibold">1. Vendor Responsibility in Fulfillment</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors are solely responsible for preparing, packing, and dispatching all customer orders within the promised time frame.</li>
      <li>All order details (items, quantities, customer addresses) must be carefully verified before dispatch.</li>
      <li>Any delays, cancellations, or errors in fulfillment will be the vendor’s responsibility, including financial or reputational consequences.</li>
      <li>The platform’s role is limited to forwarding order information; it does not participate in fulfillment.</li>
    </ul>
  </section>

  {/* <!-- Section 2 --> */}
  <section>
    <h2 className="text-lg font-semibold">2. Processing Timelines</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must process and confirm orders within the standard processing window (e.g., 24–48 hours).</li>
      <li>Any changes in stock or product availability must be updated immediately to avoid failed orders.</li>
      <li>Failure to confirm orders in time may result in automatic cancellation, with the vendor bearing any resulting penalties or losses.</li>
    </ul>
  </section>

  {/* <!-- Section 3 --> */}
  <section>
    <h2 className="text-lg font-semibold">3. Packaging Standards</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must ensure products are securely packed to prevent damage, leakage, or tampering.</li>
      <li>Fragile items must include protective packaging and “Fragile” labeling.</li>
      <li>Perishable products must follow industry-standard temperature control and shelf-life packaging practices.</li>
      <li>Incorrect or negligent packaging leading to damage or injury is the vendor’s full liability.</li>
    </ul>
  </section>

  {/* <!-- Section 4 --> */}
  <section>
    <h2 className="text-lg font-semibold">4. Shipping & Courier Responsibility</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors are responsible for selecting reliable courier/shipping partners and negotiating service terms.</li>
      <li>All shipping fees, logistics coordination, and documentation (invoices, tax slips, etc.) are managed by the vendor.</li>
      <li>Vendors must ensure compliance with courier regulations (weight, restricted items, labeling).</li>
      <li>The platform is not liable for lost, delayed, or mishandled shipments.</li>
    </ul>
  </section>

  {/* <!-- Section 5 --> */}
  <section>
    <h2 className="text-lg font-semibold">5. Delivery Timelines & Communication</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must ensure delivery within the promised timeframe mentioned in the product listing or checkout.</li>
      <li>Tracking details must be shared promptly with the customer.</li>
      <li>Vendors are solely responsible for communicating delays, reschedules, or exceptions to customers in a professional manner.</li>
      <li>Repeated delays may result in penalties, order cancellation, or account suspension.</li>
    </ul>
  </section>

  {/* <!-- Section 6 --> */}
  <section>
    <h2 className="text-lg font-semibold">6. Failed Deliveries & Returns to Origin (RTO)</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>If delivery fails due to incorrect addresses, non-availability of the customer, or courier refusal, the vendor is responsible for handling RTO.</li>
      <li>All costs of RTO, re-shipping, or customer compensation are borne by the vendor.</li>
      <li>The platform holds no liability for unsuccessful delivery attempts.</li>
    </ul>
  </section>

  {/* <!-- Section 7 --> */}
  <section>
    <h2 className="text-lg font-semibold">7. Customer Service Obligations</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must respond to customer queries related to shipping, order status, and delivery within 24 hours.</li>
      <li>Unresolved issues will remain the vendor’s responsibility; the platform will not mediate disputes.</li>
      <li>Any compensation, replacements, or refunds due to delivery mishaps are the vendor’s liability.</li>
    </ul>
  </section>

  {/* <!-- Section 8 --> */}
  <section>
    <h2 className="text-lg font-semibold">8. Risk & Liability</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Ownership, risk, and liability of goods remain with the vendor until the order is successfully delivered to the customer.</li>
      <li>The platform is not responsible for damage, theft, or legal issues arising during transit.</li>
      <li>Vendors agree to indemnify and hold harmless the platform against claims, losses, or damages linked to order fulfillment and delivery.</li>
    </ul>
  </section>

  {/* <!-- Final Note --> */}
  <div className="text-sm text-gray-500 mt-6 border-t pt-4 dark:border-gray-600">
    <strong className="text-orange-600 dark:text-orange-400">Disclaimer:</strong> The platform serves only as a facilitator for order placement. All responsibility for order confirmation, packaging, courier management, and delivery rests exclusively with the vendor. The platform shall not be held accountable for any operational, financial, or legal disputes related to order fulfillment or shipping.
  </div>

</div>

  </div>  
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Return, Refund, Cancellation & Dispute Resolution Policy</h2>
            </div>


  <div className='p-6 text-xs  text-slate-600'> 
   <div className="max-w-3xl space-y-8 text-gray-800 ">

  {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Return, Refund, Cancellation & Dispute Resolution Policy</h1> */}

  {/* <!-- Section 1 --> */}
  <section>
    <h2 className="text-lg font-semibold">1. General Principles</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The vendor is solely responsible for defining, publishing, and honoring return, refund, and cancellation policies for their products.</li>
      <li>The platform does not provide guarantees, warranties, or commitments on behalf of vendors.</li>
      <li>Customers shall directly engage with the vendor for all issues relating to returns, refunds, cancellations, or disputes.</li>
    </ul>
  </section>

  {/* <!-- Section 2 --> */}
  <section>
    <h2 className="text-lg font-semibold">2. Return Policy</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must clearly state their return eligibility (window, conditions, exclusions) on each product listing.</li>
      <li>Returns must be accepted if the product is defective, damaged, misrepresented, counterfeit, expired, or missing items.</li>
      <li>Vendors must handle logistics, costs, and communication related to product returns.</li>
      <li>Return pickup, packaging, and coordination with courier partners are the vendor’s responsibility.</li>
      <li>The platform is not liable for return logistics failures, delays, or customer dissatisfaction.</li>
    </ul>
  </section>

  {/* <!-- Section 3 --> */}
  <section>
    <h2 className="text-lg font-semibold">3. Refund Policy</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Refunds must be processed by the vendor within the legally mandated timeline (e.g., 7–10 working days, as applicable).</li>
      <li>Refunds must cover the full product price and any taxes charged, unless otherwise agreed with the customer.</li>
      <li>Refunds for shipping costs are at the vendor’s discretion but must be clearly communicated upfront.</li>
      <li>The platform will only transfer funds back to the customer once released by the vendor; delays in vendor processing will not be the platform’s liability.</li>
    </ul>
  </section>

  {/* <!-- Section 4 --> */}
  <section>
    <h2 className="text-lg font-semibold">4. Cancellation Policy</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Customers may request order cancellation before dispatch. Vendors must honor such requests promptly.</li>
      <li>If cancellation is requested after dispatch, vendors may define terms (restocking fee, partial refund, etc.).</li>
      <li>Vendors must immediately update order status in the system upon cancellation to avoid confusion.</li>
      <li>Any financial loss, customer dissatisfaction, or legal claims arising from cancellation mishandling are solely the vendor’s responsibility.</li>
    </ul>
  </section>

  {/* <!-- Section 5 --> */}
  <section>
    <h2 className="text-lg font-semibold">5. Dispute Resolution</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Any dispute between vendor and customer (e.g., defective goods, delays, misrepresentation) must be resolved directly by the vendor.</li>
      <li>The platform is not obligated to mediate but may facilitate communication at its discretion.</li>
      <li>All legal or regulatory disputes, penalties, or claims arising from product sales are the vendor’s full liability.</li>
      <li>Vendors agree to indemnify the platform against any claim, chargeback, or legal proceeding initiated by customers or authorities.</li>
    </ul>
  </section>

  {/* <!-- Section 6 --> */}
  <section>
    <h2 className="text-lg font-semibold">6. Fraudulent Claims & Abuse</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must have clear evidence (photos, videos, delivery confirmation) to defend against fraudulent return/refund claims.</li>
      <li>The platform will not bear losses due to fraudulent or false claims made by customers.</li>
      <li>It is the vendor’s responsibility to pursue remedies, insurance, or legal recourse for such claims.</li>
    </ul>
  </section>

  {/* <!-- Section 7 --> */}
  <section>
    <h2 className="text-lg font-semibold">7. Liability & Indemnification</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors are solely liable for financial settlements, losses, or damages linked to returns, refunds, or cancellations.</li>
      <li>The platform is not responsible for delays, failures, or disputes arising from the vendor’s refund or return processes.</li>
      <li>Vendors shall indemnify the platform against all claims, penalties, or reputational harm caused by mishandling of returns, refunds, or cancellations.</li>
    </ul>
  </section>

  {/* <!-- Final Note --> */}
  <div className="text-sm text-gray-500 mt-6 border-t pt-4 dark:border-gray-600">
    <strong className="text-orange-600 dark:text-orange-400">Disclaimer:</strong> The platform only provides an interface for transactions. All obligations regarding returns, refunds, cancellations, and dispute resolution rest entirely with the vendor. Customers must hold the vendor accountable for issues; the platform assumes no liability whatsoever.
  </div>

</div>
   </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Payment, Commission & Financial Policy</h2>
            </div>
              <div className='p-6 text-xs  text-slate-600'> 
<div className="max-w-3xl space-y-8 text-gray-800 ">

  {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payment, Commission & Financial Policy</h1> */}

  {/* <!-- Section 1 --> */}
  <section>
    <h2 className="text-lg font-semibold">1. Payment Collection</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The platform acts only as a technology facilitator for payment collection from customers and transfer to vendors.</li>
      <li>All sales proceeds collected by the platform are held on behalf of the vendor, subject to commission and applicable charges.</li>
      <li>The platform is not a financial institution, escrow service, or guarantor of payments.</li>
      <li>Customers’ obligations are considered discharged once payment is successfully made to the platform’s designated gateway.</li>
    </ul>
  </section>

  {/* <!-- Section 2 --> */}
  <section>
    <h2 className="text-lg font-semibold">2. Commission & Fees</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The platform charges a commission on each successful order as per the vendor’s subscription plan.</li>
      <li>Additional fees may include payment gateway charges, bank transaction charges, taxes, and any government levies.</li>
      <li>All fees and commissions are non-refundable, even if an order is canceled, returned, or disputed.</li>
      <li>The platform reserves the right to revise commission rates and fee structures with prior notice.</li>
    </ul>
  </section>

  {/* <!-- Section 3 --> */}
  <section>
    <h2 className="text-lg font-semibold">3. Payouts to Vendors</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Payouts are processed after deducting commission, fees, taxes, penalties (if any), and adjustments.</li>
      <li>Standard payout cycles (e.g., weekly/bi-weekly/monthly) will be communicated to vendors at registration.</li>
      <li>Delays due to banking networks, holidays, regulatory checks, or vendor verification are outside the platform’s liability.</li>
      <li>Vendors must maintain accurate and active bank account details; the platform will not be responsible for failed or delayed transfers due to vendor errors.</li>
    </ul>
  </section>

  {/* <!-- Section 4 --> */}
  <section>
    <h2 className="text-lg font-semibold">4. Taxes & Compliance</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors are solely responsible for charging, collecting, reporting, and remitting all applicable taxes (GST, VAT, TDS, customs, etc.).</li>
      <li>The platform may deduct tax at source where required by law but will not be responsible for vendor’s tax compliance obligations.</li>
      <li>Invoices and tax documentation must be issued by the vendor directly to customers.</li>
      <li>The vendor indemnifies the platform from any liability arising from tax non-compliance, misreporting, or disputes with tax authorities.</li>
    </ul>
  </section>

  {/* <!-- Section 5 --> */}
  <section>
    <h2 className="text-lg font-semibold">5. Refunds, Chargebacks & Deductions</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Any refund, return, or cancellation cost is borne entirely by the vendor.</li>
      <li>If a customer initiates a chargeback or payment dispute, the amount will be deducted from the vendor’s future payouts until resolved.</li>
      <li>Platform may withhold or claw back amounts already paid to the vendor in case of customer refunds, fraud, or misrepresentation.</li>
      <li>Vendors are responsible for maintaining evidence (invoices, proof of delivery, communication logs) to defend chargeback claims.</li>
    </ul>
  </section>

  {/* <!-- Section 6 --> */}
  <section>
    <h2 className="text-lg font-semibold">6. Penalties & Adjustments</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The platform reserves the right to impose financial penalties for violations such as late dispatch, poor service, fake listings, or fraudulent behavior.</li>
      <li>Such penalties will be directly deducted from the vendor’s payable balance or withheld payouts.</li>
      <li>In case of legal orders, government notices, or compliance breaches, the platform may freeze vendor payouts until resolution.</li>
    </ul>
  </section>

  {/* <!-- Section 7 --> */}
  <section>
    <h2 className="text-lg font-semibold">7. Vendor Liabilities & Indemnification</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors are liable for all financial obligations linked to their sales, including refunds, taxes, penalties, and regulatory costs.</li>
      <li>The platform will not bear any responsibility for vendor debts, financial losses, or disputes with customers, banks, or regulators.</li>
      <li>Vendors agree to indemnify and hold harmless the platform against all monetary claims, losses, or damages arising from their business activities.</li>
    </ul>
  </section>

  {/* <!-- Final Note --> */}
  <div className="text-sm text-gray-500 mt-6 border-t pt-4 dark:border-gray-600">
    <strong className="text-orange-600 dark:text-orange-400">Disclaimer:</strong> The platform only facilitates payments through integrated gateways. Vendors retain complete financial responsibility for commissions, refunds, taxes, and customer disputes. Under no circumstances will the platform act as guarantor, insurer, or co-seller for vendor transactions.
  </div>

</div>
              </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Data Privacy, Promotions & General Terms Policy</h2>
            </div>

              <div className='p-6  text-sm text-slate-600'> 
<div className="max-w-3xl space-y-8 text-gray-800 ">

  {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Data Privacy, Promotions & General Terms Policy</h1> */}

  {/* <!-- Section 1 --> */}
  <section>
    <h2 className="text-lg font-semibold">1. Data Privacy & Customer Information</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>All customer data (including names, addresses, phone numbers, and payment information) shared with vendors is strictly for order fulfillment purposes only.</li>
      <li>Vendors are prohibited from storing, selling, renting, or misusing customer data for personal gain, marketing outside the platform, or unauthorized purposes.</li>
      <li>Any data breach, leak, or misuse by the vendor is the sole responsibility of the vendor. The platform bears no liability for damages caused by vendor negligence.</li>
      <li>Vendors must comply with applicable data protection laws (e.g., GDPR, IT Act, Indian DPDP Act, or any local equivalent).</li>
      <li>Upon request, vendors must immediately delete or anonymize customer data once an order is completed and there is no legal retention requirement.</li>
    </ul>
  </section>

  {/* <!-- Section 2 --> */}
  <section>
    <h2 className="text-lg font-semibold">2. Promotions, Marketing & Advertising</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The platform may, at its discretion, feature vendor products in marketing campaigns, advertisements, newsletters, or promotions.</li>
      <li>Such promotion does not imply endorsement, guarantee, or liability by the platform.</li>
      <li>Vendors are solely responsible for the accuracy of promotional content, product claims, discounts, or offers they provide.</li>
      <li>All promotional costs (discounts, coupons, sponsored placements, campaigns) are the vendor’s responsibility unless explicitly agreed in writing with the platform.</li>
      <li>False claims, misleading advertising, or unapproved promotions are strictly prohibited and may result in penalties or suspension.</li>
    </ul>
  </section>

  {/* <!-- Section 3 --> */}
  <section>
    <h2 className="text-lg font-semibold">3. Intellectual Property & Content Rights</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>Vendors must ensure that all product images, descriptions, logos, trademarks, and branding used in listings or promotions are legally owned or licensed to them.</li>
      <li>The platform shall not be held liable for copyright/trademark infringement claims arising from vendor-submitted content.</li>
      <li>Vendors grant the platform a royalty-free, worldwide license to use their content for marketing, display, and promotional purposes strictly within the platform ecosystem.</li>
      <li>Any third-party IP disputes must be resolved solely by the vendor, including legal costs, penalties, and settlements.</li>
    </ul>
  </section>

  {/* <!-- Section 4 --> */}
  <section>
    <h2 className="text-lg font-semibold">4. General Terms of Use</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The platform operates strictly as a technology service provider, connecting vendors and customers. It is neither a buyer, seller, guarantor, nor insurer of products.</li>
      <li>Vendors are solely responsible for compliance with all applicable laws, licenses, product standards, and consumer rights regulations in their region.</li>
      <li>Any fines, penalties, or claims arising from vendor misconduct, product quality, or misrepresentation shall be borne exclusively by the vendor.</li>
      <li>The platform reserves the right to suspend or terminate accounts violating these policies, with or without notice.</li>
      <li>Force majeure events (natural disasters, pandemics, strikes, system outages) release the platform from obligations; vendors remain responsible for their own commitments.</li>
    </ul>
  </section>

  {/* <!-- Section 5 --> */}
  <section>
    <h2 className="text-lg font-semibold">5. Liability & Indemnification</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
      <li>The vendor agrees to indemnify, defend, and hold harmless the platform from any claims, losses, legal proceedings, or reputational damages caused by vendor actions or inactions.</li>
      <li>This includes, but is not limited to: product disputes, regulatory violations, tax misreporting, intellectual property claims, data privacy breaches, or fraudulent activities.</li>
      <li>Under no circumstance shall the platform be held financially or legally responsible for vendor obligations, damages, or liabilities.</li>
    </ul>
  </section>

  {/* <!-- Final Note --> */}
  <div className="text-sm text-gray-500 mt-6 border-t pt-4 dark:border-gray-600">
    <strong className="text-orange-600 dark:text-orange-400">Disclaimer:</strong> Vendors assume full ownership of data handling, promotions, product claims, and legal compliance. The platform functions solely as a digital marketplace provider and bears no liability for any disputes, breaches, or losses arising from vendor operations.
  </div>

</div>
              </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    </main>

        </>
    )
}