import react from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
   
import { Info } from 'lucide-react'
export default function Policies(){

     
    
        
    return(
        <>
        <main className='bg-white rounded p-3'>

        
        <div className='bg-sky-100 text-complimentory border-l-6 text-xs p-2 w-fit m-4'>
        <Info className='inline' size={12} /> By completing the vendor onboarding process, the vendor automatically agrees to all marketplace terms and policies and be bound by any future updates. 
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

                 <ul>
    <li><strong>Eligibility:</strong> Vendors must be at least 18 years old and legally permitted to operate a business. By registering, vendors confirm compliance with all applicable local, national, and international laws.</li>

    <li><strong>Accurate Information:</strong> Vendors must provide complete, truthful, and up-to-date information during registration. Providing false or misleading information may result in immediate rejection or suspension.</li>

    <li><strong>Application Review:</strong> Submission of a vendor application does not guarantee approval. All applications are reviewed for business legitimacy and marketplace compliance.</li>

    <li><strong>Account Security:</strong> Vendors are solely responsible for maintaining the confidentiality of their account credentials. All activity through the account is the vendor's responsibility.</li>

    <li><strong>Business Conduct:</strong> Vendors must conduct themselves professionally, ethically, and in compliance with the law during all interactions and transactions.</li>

    <li><strong>Prohibited Activities:</strong> Vendors must not:
      <ul>
        <li>List counterfeit, illegal, or restricted products</li>
        <li>Misuse customer data</li>
        <li>Manipulate reviews or ratings</li>
        <li>Create duplicate/fake accounts</li>
        <li>Use bots or malicious scripts</li>
      </ul>
    </li>

    <li><strong>Compliance Requirements:</strong> Vendors must have necessary business licenses, tax registrations, and adhere to product safety, e-commerce, and data privacy laws.</li>

    <li><strong>Audit & Inspection:</strong> The platform reserves the right to audit vendor activity and listings at any time. Full cooperation is expected.</li>

    <li><strong>Liability Disclaimer:</strong> The platform is not responsible for:
      <ul>
        <li>Disputes between vendors and customers</li>
        <li>Vendor-related damages, losses, or legal actions</li>
        <li>The authenticity, legality, or safety of products sold by vendors</li>
      </ul>
    </li>

    <li><strong>Account Suspension or Termination:</strong> We reserve the right to suspend or terminate vendor accounts found violating these policies, without prior notice.</li>

    <li><strong>Ongoing Obligations:</strong> Vendors must stay updated with policy changes, uphold ethical standards, and take full responsibility for all operations and interactions.</li>
  </ul>

            </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Product Listing, Content & Pricing Policy </h2>

            </div>
             
              <div className='p-6 text-xs  text-slate-600'>
                      <ul>
    <li><strong>Accurate Product Details:</strong> Vendors must provide clear, accurate, and complete product information, including title, description, images, specifications, and applicable disclaimers.</li>

    <li><strong>Ownership & Authenticity:</strong> Only products legally owned or authorized for sale may be listed. Counterfeit or pirated goods are strictly prohibited.</li>

    <li><strong>Prohibited Listings:</strong>
      <ul>
        <li>Illegal, stolen, or banned items</li>
        <li>Hazardous materials or weapons</li>
        <li>Adult or offensive content</li>
        <li>Items violating copyrights or trademarks</li>
      </ul>
    </li>

    <li><strong>Image and Media Usage:</strong> Vendors must use original or licensed product images. All images must accurately represent the product.</li>

    <li><strong>Content Standards:</strong>
      <ul>
        <li>No misleading titles or false claims</li>
        <li>No plagiarized or unauthorized brand use</li>
      </ul>
    </li>

    <li><strong>Pricing Responsibility:</strong> Vendors must:
      <ul>
        <li>Price fairly and competitively</li>
        <li>Include applicable taxes and charges</li>
        <li>Avoid any form of price manipulation or deception</li>
      </ul>
    </li>

    <li><strong>Inventory Accuracy:</strong> Vendors must keep stock status updated. Out-of-stock products must not be listed as available.</li>

    <li><strong>Responsibility Disclaimer:</strong> The platform is not responsible for legal or financial issues caused by vendor listings or pricing. All responsibility lies with the vendor.</li>
  </ul>
                </div>
        </TabPanel>
        <TabPanel>
       
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Order Fulfillment, Shipping & Delivery Policy</h2>
            </div>

          <div className='p-6 text-xs  text-slate-600'> 
  <ul>
    <li><strong>Order Responsibility:</strong> Vendors are fully responsible for the processing, packaging, and timely dispatch of all customer orders placed through the marketplace.</li>

    <li><strong>Timely Fulfillment:</strong> All confirmed orders must be fulfilled within the promised handling time. Any delays must be proactively communicated to customers and the platform.</li>

    <li><strong>Shipping Accuracy:</strong> Vendors must ensure correct shipping addresses and accurate product dispatch. Wrong or incomplete shipments may result in penalties or refunds.</li>

    <li><strong>Shipping Carriers & Tracking:</strong> Reliable courier services must be used with tracking details updated immediately after dispatch.</li>

    <li><strong>Delivery Responsibility:</strong> Vendors must ensure on-time delivery of undamaged products. Vendors are also responsible for handling returns related to failed or delayed deliveries.</li>

    <li><strong>Packaging Standards:</strong> Secure and appropriate packaging is required. Packaging must not include misleading branding or third-party advertisements.</li>

    <li><strong>Shipping Charges:</strong> All shipping fees must be transparent and listed at the time of product upload. No hidden or excessive charges are allowed.</li>

    <li><strong>Non-Compliance Consequences:</strong> Failing to meet fulfillment responsibilities may result in cancellations, refunds, or account suspension.</li>

    <li><strong>Platform Disclaimer:</strong> The platform is not liable for any delivery failures, delays, or damages. Vendors hold full responsibility for logistics and shipping.</li>
  </ul>

  </div>  
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Return, Refund, Cancellation & Dispute Resolution Policy</h2>
            </div>


  <div className='p-6 text-xs  text-slate-600'> 
             <ul>
    <li><strong>A. Return & Refund Eligibility:</strong>
      <ul>
        <li>Clearly mention returnable and non-returnable items in product listings.</li>
        <li>Returns must be accepted if the product is:
          <ul>
            <li>Damaged or defective</li>
            <li>Incorrect or incomplete</li>
            <li>Expired or fake</li>
            <li>Materially different from listing</li>
          </ul>
        </li>
      </ul>
    </li>

    <li><strong>B. Return Process:</strong>
      <ul>
        <li>Buyers can request returns within 7–10 days of delivery.</li>
        <li>Vendors must process pickup and inspect the return within 3 business days.</li>
      </ul>
    </li>

    <li><strong>C. Refund Processing:</strong>
      <ul>
        <li>Refunds must be issued to original payment method promptly.</li>
        <li>Include full amount and taxes where vendor is at fault.</li>
        <li>No hidden deductions unless clearly disclosed.</li>
      </ul>
    </li>

    <li><strong>D. Cancellation Policy:</strong>
      <ul>
        <li>Buyers may cancel before order is shipped.</li>
        <li>Vendors must avoid arbitrary cancellations and must notify stock issues early.</li>
      </ul>
    </li>

    <li><strong>E. Dispute Triggers and Prevention:</strong>
      <ul>
        <li>Disputes arise due to wrong items, delays, damage, poor communication, or authenticity issues.</li>
        <li>All responsibility lies with the vendor unless otherwise proven.</li>
      </ul>
    </li>

    <li><strong>F. Dispute Resolution:</strong>
      <ul>
        <li>Vendors must respond within 48 hours.</li>
        <li>The platform will mediate if needed, and its decision is final.</li>
      </ul>
    </li>

    <li><strong>G. Chargebacks & Fraud:</strong>
      <ul>
        <li>Vendors must maintain delivery proof and product authenticity records.</li>
        <li>Unjustified chargebacks may lead to account penalties.</li>
      </ul>
    </li>

    <li><strong>H. Platform Disclaimer:</strong>
      <ul>
        <li>The platform is not responsible for vendor product, refund, or customer service issues.</li>
        <li>Vendors are solely liable for all transactions, refunds, and disputes.</li>
      </ul>
    </li>
  </ul>
   </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Payment, Commission & Financial Policy</h2>
            </div>
              <div className='p-6 text-xs  text-slate-600'> 
 <ul>
    <li><strong>A. Vendor Earnings & Commission Structure:</strong>
      <ul>
        <li>Commission is deducted per sale as per plan or category.</li>
        <li>Details are transparent in the vendor dashboard.</li>
        <li>Commission updates will be shared with 15 days' notice.</li>
      </ul>
    </li>

    <li><strong>B. Payment Schedule & Processing:</strong>
      <ul>
        <li>Payouts are weekly or as per vendor plan.</li>
        <li>Hold period of 5–7 days may apply.</li>
        <li>Payments via bank, UPI, or wallet as chosen by vendor.</li>
      </ul>
    </li>

    <li><strong>C. Transaction Fees & Charges:</strong>
      <ul>
        <li>Gateway and platform fees are applicable as per usage.</li>
        <li>Charged automatically per order or per plan.</li>
      </ul>
    </li>

    <li><strong>D. Refunds & Adjustments:</strong>
      <ul>
        <li>Refunds issued to customers are deducted from vendor earnings.</li>
        <li>Chargeback amounts are final if no proof is provided.</li>
      </ul>
    </li>

    <li><strong>E. Taxes & Invoicing:</strong>
      <ul>
        <li>Vendors must comply with tax rules (e.g., GST).</li>
        <li>TDS and other statutory deductions will be made if applicable.</li>
      </ul>
    </li>

    <li><strong>F. Financial Disputes & Audits:</strong>
      <ul>
        <li>Disputes must be reported within 7 business days.</li>
        <li>The platform may audit vendor accounts for compliance.</li>
      </ul>
    </li>

    <li><strong>G. Platform Disclaimer:</strong>
      <ul>
        <li>The platform is not liable for payout failures due to vendor error or gateway issues.</li>
        <li>Vendors are responsible for accurate financial details and legal compliance.</li>
      </ul>
    </li>
  </ul>
              </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Data Privacy, Promotions & General Terms Policy</h2>
            </div>

              <div className='p-6  text-sm text-slate-600'> 
  <h3 className='font-bold mt-2'>
    A. Data Privacy &amp; Customer Information
</h3>
<ul>
    <li>
        <p>
            Confidentiality Obligation: <br/>
            Vendors must treat all customer data (name, contact, address,
            payment info) as strictly confidential and use it only for order
            fulfillment.
        </p>
    </li>
    <li>
        <p>
            No Data Misuse:
        </p>
        <ul>
            <li>
                <p>
                    Vendors must not store, share, sell, or reuse any customer
                    information for personal marketing, third-party sharing, or
                    off-platform use.
                </p>
            </li>
            <li>
                <p>
                    Sending promotional material, spam emails, or cold calls
                    without buyer consent is strictly prohibited.
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Compliance: <br/>
            Vendors must comply with applicable laws and data protection acts
            such as:
        </p>
        <ul>
            <li>
                <p>
                    India’s IT Act 2000 / Data Protection Bill
                </p>
            </li>
            <li>
                <p>
                    GDPR (if serving international buyers)
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Data Breach Liability: <br/>
            Any data breach due to vendor negligence may result in:
        </p>
        <ul>
            <li>
                <p>
                    Legal action.
                </p>
            </li>
            <li>
                <p>
                    Suspension or termination of vendor account.
                </p>
            </li>
        </ul>
    </li>
</ul>
<hr/>
<h3 className='font-bold mt-2'>
    B. Promotions, Marketing &amp; Discount Policy
</h3>
<ul>
    <li>
        <p>
            Platform-Wide Promotions: <br/>
            Vendors may participate in platform-organized events like flash
            sales, seasonal discounts, and coupon campaigns. Participation is
            optional unless otherwise agreed in a subscription or agreement.
        </p>
    </li>
    <li>
        <p>
            Independent Offers: <br/>
            Vendors may run their own discounts or offers only through the
            platform dashboard. External coupons, affiliate links, or misleading
            discounts are not allowed.
        </p>
    </li>
    <li>
        <p>
            Fair Marketing:
        </p>
        <ul>
            <li>
                <p>
                    Vendors must not use misleading price cuts, fake MRP, or
                    deceptive urgency tactics (e.g., “Only 1 left!” if untrue).
                </p>
            </li>
            <li>
                <p>
                    All offers must have clear start and end dates, eligibility
                    conditions, and be reflected in invoices properly.
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Product Ads &amp; Banners:
        </p>
        <ul>
            <li>
                <p>
                    Use of promotional banners or featured product listings must
                    comply with marketplace branding guidelines and fee
                    structure.
                </p>
            </li>
        </ul>
    </li>
</ul>
<hr/>
<h3 className='font-bold mt-2' >
    C. General Platform Usage Terms
</h3>
<ul>
    <li>
        <p>
            Account Access:
        </p>
        <ul>
            <li>
                <p>
                    Vendors are responsible for maintaining the security of
                    their login credentials.
                </p>
            </li>
            <li>
                <p>
                    Sharing of accounts or using bots/scripts to manipulate
                    listings or reviews is strictly prohibited.
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Listing Integrity:
        </p>
        <ul>
            <li>
                <p>
                    Vendors must ensure listings have original content, real
                    photos, accurate specs, and no keyword stuffing or IP
                    violations.
                </p>
            </li>
            <li>
                <p>
                    Duplicate listings, irrelevant tags, or fake reviews may
                    result in account penalties.
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Platform Integrity:
        </p>
        <ul>
            <li>
                <p>
                    Vendors must not attempt to:
                </p>
                <ul>
                    <li>
                        <p>
                            Circumvent platform commissions (e.g., asking buyers
                            to transact outside).
                        </p>
                    </li>
                    <li>
                        <p>
                            Redirect buyers to external websites or
                            WhatsApp/Telegram groups.
                        </p>
                    </li>
                    <li>
                        <p>
                            Post any content that is offensive, defamatory, or
                            violates public morality.
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Right to Moderate or Remove:
        </p>
        <ul>
            <li>
                <p>
                    The platform reserves the right to edit, delist, or suspend
                    any product, promotion, or account that violates these terms
                    without prior notice.
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Termination Clause:
        </p>
        <ul>
            <li>
                <p>
                    Vendors found in repeated breach of policies may face:
                </p>
                <ul>
                    <li>
                        <p>
                            Immediate suspension or blacklisting.
                        </p>
                    </li>
                    <li>
                        <p>
                            Legal action in case of fraud or data misuse.
                        </p>
                    </li>
                    <li>
                        <p>
                            Forfeiture of pending payouts.
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
              </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    </main>

        </>
    )
}