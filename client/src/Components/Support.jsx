import react from "react";

import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChevronDown, Mail, Phone, BookOpenText,CircleHelp,MoveRight,ArrowDown } from "lucide-react";
const faqData = [
  // 🛒 Getting Started
  {
    question: "Who can sell on Aabhaar?",
    answer: "Any individual, business, or creator offering genuine, high-quality gifting products—from handmade crafts to premium hampers.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, vendor registration is completely free. You can sign up and start listing without any upfront cost.",
  },
  {
    question: "Do I need a registered business to join?",
    answer: "No, individuals and home-based sellers are also welcome. We’ll guide you based on your business type.",
  },
  {
    question: "Can I sell if I don’t have a GST number?",
    answer: "Yes. If you are an individual, you just need Enrollment ID/UIN from the GST Portal. GST is mandatory for registered businesses.",
  },
  {
    question: "Do you accept digital products or services?",
    answer: "Currently, we only support physical, shippable gifting products.",
  },

  // 🧰 Dashboard & Listings
  {
    question: "How do I add products to my shop?",
    answer: "Use the vendor dashboard to upload product details, images, prices, and inventory in just a few clicks.",
  },
  {
    question: "Is there a limit to how many products I can list?",
    answer: "No limits. Vendors can list unlimited products on all plans.",
  },
  {
    question: "Can I edit or update my product listings?",
    answer: "Yes, you can edit any part of your listing, including pricing, stock, description, and images.",
  },
  {
    question: "Do I need to upload professional photos?",
    answer: "High-quality photos are highly recommended. Aabhaar also offers design support or templates if needed.",
  },

  // 💰 Payments & Commission
  {
    question: "Are there any hidden fees?",
    answer: "No hidden charges. All fees are transparently shared (if any).",
  },
  {
    question: "When do I receive my payouts?",
    answer: "Payouts are processed to your bank account. No minimum balance is required to withdraw.",
  },

  // 📦 Order, Delivery & Returns
  {
    question: "How are orders managed?",
    answer: "Orders are notified via email and the dashboard. You can accept, process, and mark them as shipped.",
  },
  {
    question: "Can I offer Cash on Delivery (COD)?",
    answer: "Yes, we offer Cash on Delivery option.",
  },

  // 📈 Growth & Marketing
  {
    question: "Do you help with marketing?",
    answer: "Yes. We promote vendors through organic and paid ads, Instagram features, campaigns, and newsletters.",
  },
  {
    question: "Can my shop be featured on Aabhaar?",
    answer: "Yes, featured placement is based on product quality, customer feedback, and promotional campaigns.",
  },
  {
    question: "Can I run discounts and offers?",
    answer: "Absolutely. Use your dashboard to run custom promotions and participate in platform-wide sale events.",
  },
  {
    question: "Will I get analytics or insights?",
    answer: "Yes, your dashboard includes views, orders, conversion rates, and performance trends.",
  },

  // 🤝 Support & Community
  {
    question: "What if I face a technical issue?",
    answer: "Reach out via live chat, email, or dashboard support. We respond within 24 hours.",
  },
  {
    question: "Do you provide onboarding help?",
    answer: "Yes. We guide you through product uploads, branding, and policies to get started smoothly.",
  },
  {
    question: "How do I contact support?",
    answer: "You can email us at support@aabhaarindia.com",
  },
];


export default function Support() {

  
  return (
    <>
      <main className="bg-white p-3 rounded">
        <section className="grid grid-col-1 sm:grid-cols-2 gap-2 text-center">
          <div className="m-2 p-5 bg-slate-100  rounded ">
            <div className="flex  items-center">
              <Mail className=" bg-sky-100 text-complimentory p-3 m-3 rounded-xl" size="50" />
              <span className="m-1 font-medium">
                Email Support
                <br />
                <small>Get help via email</small>
              </span>
            </div>
            <div>
              <button className="bg-secondary font-medium text-slate-50  px-4 p-2 text-sm rounded-lg m-3 w-full cursor-pointer">
                <Link to="mailto:support@aabhaarindia.com">
                Mail Us at support@aabhaarindia.com
                </Link>
              </button>
            </div>
          </div>
          <div className="m-2 p-5 bg-slate-100  rounded ">
            <div className="flex  items-center">
              <Phone className="bg-sky-100 text-complimentory text-complimentory p-3 m-3 rounded-xl" size="50" />
              <span className="m-1 font-medium text-left">
                Phone
                <br />
                <small>we are working on it!</small>
              </span>
            </div>
            <div>
              <button className=" bg-secondary font-medium text-slate-50 px-4 p-2 text-sm rounded-lg m-3 w-2/3 cursor-pointer">
                Comming Soon
              </button>
            </div>
          </div>
          <div className="m-2 p-5 bg-slate-100  rounded ">
            
            <div className="flex  items-center">
            <CircleHelp  className="bg-sky-100 text-complimentory text-complimentory p-3 m-3 rounded-xl" size="50" />
              <span className="m-1 font-medium text-left">
                Frequently Asked Questions
                <br />
                <small>Browse FAQ section </small>
              </span>
            </div>
            <div>
              <button className="bg-secondary font-medium text-slate-50 px-4 p-2 text-sm rounded-lg m-3 w-2/3 cursor-pointer">
                <a href="#faqs">
                Find Frequently Asked Questions <ArrowDown className="inline mx-2" />

                </a>
              </button>
            </div>
          </div>
          <div className="m-2 p-5 bg-slate-100  rounded ">
            <div className="flex  items-center">
              <BookOpenText
                className="m-2 bg-sky-100 text-complimentory text-complimentory p-3 m-3 rounded-xl"
                size="50"
              />
              <span className="m-1 font-medium text-left">
                Documentation
                <br />
                <small>Browse our help articles</small>
              </span>
            </div>
            <div>
              <button className="bg-secondary font-medium text-slate-50 px-4 p-2 text-sm rounded-lg m-3 w-2/3 cursor-pointer">
                <Link to="/documentation">
                Go to Docs
                </Link>
              </button>
            </div>
          </div>
        </section>
        <section>
          <h5 className="text-slate-600 text-lg  m-2 py-3" id="faqs">
            Frequrently Asked Questions (FAQs)
          </h5>


          <div className="w-full m-1">
            <div className="mx-auto w-full  divide-y divide-slate-50/5 rounded-xl bg-white/5 tex-slate-700">
              
       {faqData.map((item, index) => (         
              <Disclosure as="div" key={index} className="bg-slate-100 rounded m-1 my-2">
                <DisclosureButton className="p-5 cursor-pointer group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-slate-700 group-data-[hover]:text-slate-700/80">
                    
                    {item.question}
                  </span>
                  {/* <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
                  <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="p-5 text-sm/5 text-state-400">
                  
                  {item.answer}
                </DisclosurePanel>
              </Disclosure>
       ))}
              
              {/* <Disclosure as="div" className="bg-slate-100 rounded m-1 my-2">
                <DisclosureButton className="p-3 cursor-pointer group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-slate-700 group-data-[hover]:text-slate-700/80">
                    What is your refund policy?
                  </span>
              
                  <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="p-3 text-sm/5 text-state-400">
                  If you're unhappy with your purchase, we'll refund you in
                  full.
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="bg-slate-100 rounded m-1 my-2">
                <DisclosureButton className="p-3 cursor-pointer group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-slate-700 group-data-[hover]:text-slate-700/80">
                    What is your refund policy?
                  </span>
                
                  <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="p-3 text-sm/5 text-state-400">
                  If you're unhappy with your purchase, we'll refund you in
                  full.
                </DisclosurePanel>
              </Disclosure> */}
            </div>
          </div>
        </section>
<hr className="my-4 text-slate-300" />
        <section className="p-3 m-2 my-5 border-1 border-gray-200 rounded">
          <h5 className="text-2xl font-bold text-slate-700">
            Still have Conern?
          </h5>
            <Link>
          <button className="bg-primary text-white p-2 font-semibold px-5 m-4 rounded-lg">
            Create a Ticket <MoveRight className="inline mx-2" />
          </button>
            </Link>
        </section>
      </main>
    </>
  );
}
