import react from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChevronDown, Mail, Phone, BookOpenText,CircleHelp  } from "lucide-react";

export default function Support() {
  return (
    <>
      <main className="bg-white p-3 rounded">
        <section className="grid grid-cols-2 gap-2 text-center">
          <div className="m-2 p-5 bg-slate-100  rounded ">
            <div className="flex  items-center">
              <Mail className=" bg-blue-100 p-3 m-3 rounded-xl" size="50" />
              <span className="m-1 font-medium">
                Email Support
                <br />
                <small>Get help via email</small>
              </span>
            </div>
            <div>
              <button className="bg-blue-300 px-4 p-2 text-sm rounded-lg m-3 w-full cursor-pointer">
                CTA
              </button>
            </div>
          </div>
          <div className="m-2 p-5 bg-slate-100  rounded ">
            <div className="flex  items-center">
              <Phone className="bg-blue-100 p-3 m-3 rounded-xl" size="50" />
              <span className="m-1 font-medium text-left">
                Phone
                <br />
                <small>Call us at +1 234 567 8900</small>
              </span>
            </div>
            <div>
              <button className="bg-blue-300 px-4 p-2 text-sm rounded-lg m-3 w-2/3 cursor-pointer">
                CTA
              </button>
            </div>
          </div>
          <div className="m-2 p-5 bg-slate-100  rounded ">
            <div className="flex  items-center">
            <CircleHelp  className="bg-blue-100 p-3 m-3 rounded-xl" size="50" />
              <span className="m-1 font-medium text-left">
                Frequently Asked Questions
                <br />
                <small>Brouse FAQ section </small>
              </span>
            </div>
            <div>
              <button className="bg-blue-300 px-4 p-2 text-sm rounded-lg m-3 w-2/3 cursor-pointer">
                CTA
              </button>
            </div>
          </div>
          <div className="m-2 p-5 bg-slate-100  rounded ">
            <div className="flex  items-center">
              <BookOpenText
                className="m-2 bg-blue-100 p-3 m-3 rounded-xl"
                size="50"
              />
              <span className="m-1 font-medium text-left">
                Documentation
                <br />
                <small>Browse our help articles</small>
              </span>
            </div>
            <div>
              <button className="bg-blue-300 px-4 p-2 text-sm rounded-lg m-3 w-2/3 cursor-pointer">
                CTA
              </button>
            </div>
          </div>
        </section>
        <section>
          <h5 className="text-slate-600 text-lg   m-2 py-3">
            Frequrently Asked Questions (FAQs)
          </h5>

          <div className="w-full m-1">
            <div className="mx-auto w-full  divide-y divide-slate-50/5 rounded-xl bg-white/5 tex-slate-700">
              <Disclosure as="div" className="bg-slate-100 rounded m-1 my-2">
                <DisclosureButton className="p-5 cursor-pointer group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-slate-700 group-data-[hover]:text-slate-700/80">
                    What is your refund policy?
                  </span>
                  {/* <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
                  <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="p-5 text-sm/5 text-state-400">
                  If you're unhappy with your purchase, we'll refund you in
                  full.
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="bg-slate-100 rounded m-1 my-2">
                <DisclosureButton className="p-3 cursor-pointer group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-slate-700 group-data-[hover]:text-slate-700/80">
                    What is your refund policy?
                  </span>
                  {/* <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
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
                  {/* <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
                  <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="p-3 text-sm/5 text-state-400">
                  If you're unhappy with your purchase, we'll refund you in
                  full.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
