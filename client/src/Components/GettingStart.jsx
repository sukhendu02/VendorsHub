import React from "react";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { useState } from "react";

export default function GettingStart() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="section-1 grid bg-white p-3 rounded shadow-sm">
        Register - Sell - Earn
      </div>
      {/* <div className='grid grid-cols-2 gap-4 mt-2'>
        <div className='bg-white p-3 rounded'>1</div>
        <div className='bg-white p-5 rounded text-center'>
            <p className='text-slate-500 my-3 font-semibold'>

            Connet Your Store!
            </p>
            <div>

            <button className='bg-primary text-slate-600 py-3 px-4 m-2 rounded-lg'>Connect</button>
            </div>
        </div>
    </div> */}

      <div className="bg-white rounded mt-2 p-3 text-sm shadow-sm">
        <h4 className="text-center font-medium text-lg text-secondary my-2">
          Register your business and Start Earing{" "}
        </h4>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veniam, neque explicabo ratione repudiandae vel dignissimos rem alias sed eum eaque aperiam? Unde asperiores quae consequuntur delectus animi tempore libero?</p> */}

        <div className="text-center ">
          <div>
            <TabGroup>
              <TabList className="flex justify-center m-auto my-4 w-fit bg-slate-100 rounded-2xl text-slate-800 ">
                <Tab className=" p-1 px-4  rounded-2xl cursor-pointer data-[selected]:bg-secondary  focus:outline-none transition ease-in-out duration-300 text-secondary data-[selected]:text-white">
                  Registerd
                </Tab>
                <Tab className="p-1 px-4 rounded-2xl cursor-pointer data-[selected]:bg-secondary focus:outline-none transition ease-in-out duration-300 text-secondary data-[selected]:text-white ">
                  Non Registerd
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/* Onboarding form for Registerd */}

                  <form
                    action=""
                    className="p-3 m-2 sm:p-5 w-5/6 m-auto text-left"
                  >
                    <div className="mb-8">
                      <div className="flex justify-between items-center">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className={`flex items-center ${
                              item !== 3 ? "flex-1" : ""
                            }`}
                          >
                            {/* Step Circle */}
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                step >= item
                                  ? "bg-primary text-white"
                                  : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              {item}
                            </div>

                            {/* Connector Line */}
                            {item !== 3 && (
                              <div
                                className={`flex-1 h-1 mx-4 ${
                                  step >= item + 1
                                    ? "bg-primary"
                                    : "bg-gray-200"
                                }`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {step === 1 && (
                      <>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <input
                              type="text"
                              required
                              autoComplete="off"
                              className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer"
                            />
                            <label className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white  text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white">
                              First Name
                            </label>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <input
                              type="text"
                              required
                              autoComplete="off"
                              className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer text-slate-500"
                            />
                            <label className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white">
                              Last Name
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <input
                              type="text"
                              required
                              autoComplete="off"
                              className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer"
                            />
                            <label className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white">
                              Business Name
                            </label>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <input
                              type="text"
                              required
                              autoComplete="off"
                              className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer text-slate-500"
                            />
                            <label className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white">
                              Store Name
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <input
                              type="text"
                              required
                              autoComplete="off"
                              className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer"
                            />
                            <label className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white">
                              Business Email
                            </label>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <input
                              type="text"
                              required
                              autoComplete="off"
                              className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer text-slate-500"
                            />
                            <label className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white">
                              Phone
                            </label>
                          </div>
                        </div>

                        <div className="flex justify-end m-3">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Business Name*
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="noname"
                                id="noname"
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Business Name 2
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="Ex. /my-shop"
                                type="text"
                                name="noname"
                                id="noname"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">Address*</label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="noname"
                                id="noname"
                                placeholder="Address Line 1"
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="Address Line 2"
                                type="text"
                                name="noname"
                                id="noname"
                                
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/3 m-3">
                            <div>
                             
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="noname"
                                id="noname"
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/3 m-3">
                            <div>
                           <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="Pincode"
                                type="number"
                                name="noname"
                                id="noname"
                                
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/3 m-3">
                            <div>
                            <select className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500">
        <option value="" disabled selected>
          Select a state
        </option>
        <option value="AP">Andhra Pradesh</option>
        <option value="AR">Arunachal Pradesh</option>
        <option value="AS">Assam</option>
        <option value="BR">Bihar</option>
        <option value="CG">Chhattisgarh</option>
        <option value="GA">Goa</option>
        <option value="GJ">Gujarat</option>
        <option value="HR">Haryana</option>
        <option value="HP">Himachal Pradesh</option>
        <option value="JH">Jharkhand</option>
        <option value="KA">Karnataka</option>
        <option value="KL">Kerala</option>
        <option value="MP">Madhya Pradesh</option>
        <option value="MH">Maharashtra</option>
        <option value="MN">Manipur</option>
        <option value="ML">Meghalaya</option>
        <option value="MZ">Mizoram</option>
        <option value="NL">Nagaland</option>
        <option value="OR">Odisha</option>
        <option value="PB">Punjab</option>
        <option value="RJ">Rajasthan</option>
        <option value="SK">Sikkim</option>
        <option value="TN">Tamil Nadu</option>
        <option value="TG">Telangana</option>
        <option value="TR">Tripura</option>
        <option value="UP">Uttar Pradesh</option>
        <option value="UK">Uttarakhand</option>
        <option value="WB">West Bengal</option>
        <optgroup label="Union Territories">
          <option value="AN">Andaman and Nicobar Islands</option>
          <option value="CH">Chandigarh</option>
          <option value="DN">Dadra and Nagar Haveli & Daman and Diu</option>
          <option value="DL">Delhi</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="LA">Ladakh</option>
          <option value="LD">Lakshadweep</option>
          <option value="PY">Puducherry</option>
        </optgroup>
      </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between my-5">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Prev
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {step === 3 && (
                      <>

<div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                GSTN Number
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="noname"
                                id="noname"
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                PAN Number
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                               
                                type="text"
                                name="noname"
                                id="noname"
                              />
                            </div>
                          </div>
                        </div>

<div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Bank Account Number
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="noname"
                                id="noname"
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                IFSC Code
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                               
                                type="text"
                                name="noname"
                                id="noname"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="flex justify-between m-3">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Prev
                          </button>
                          <button
                            type="submit"
                            // onClick={() => setStep(2)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Submit
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                </TabPanel>
                <TabPanel>
                  {/* Onboarding form for Registerd
                   */}
                  Panel 2
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </>
  );
}

// // Street *
// Street 2
// City *
// Post/Zip Code *
// Country *
// - Select a location -
// - Select a location -
// State *
// State Name
// Email

// ank Transfer
// Account Holder
// Your bank account name
// Account Type

// Please Select...
// Account Number
// Account Number
// Routing Number
// Routing Number
// Bank Name
// Name of bank
// Bank Address
// Address of your bank
// Bank IBAN
// IBAN
// Bank Swift Code
// Swift Code
// bank check
//  I attest that I am the owner and have full authorization to this bank account
// Please double-check your account information!
// Incorrect or mismatched account name and number can result in withdrawal delays and fee
