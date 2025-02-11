import React from "react";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { useState } from "react";

import CircularProgress from '@mui/material/CircularProgress';
import toast from "react-hot-toast";
// import config from ""

export default function GettingStart() {

  const [loading,setLoading] = useState(false)
  const [step, setStep] = useState(1);
  const [step2, setStep2] = useState(1);

// FOR REGISTERED ONES 
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      storeName: '',
      storeURL: '',
      phone: '',
      extLinks: '',
      B_name: '',
      add_line1:'',
      add_line2:'',
      city:'',
      pincode:'',
      state:'',
      gstn:'',
      pan:'',
      bank_ac_Number:'',
      ifsc:'',
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const validateform=()=>{
        const {firstName,lastName,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstn,pan,bank_ac_Number,ifsc }=formData

        if(!firstName||!storeName||!storeURL||!phone||!B_name|| !add_line1||!add_line2||!city||!pincode||!state||!gstn||!pan){
          toast.error("Please fill all the required fields")
          return false;
        }
      }
      const validatenrform=()=>{
        const {firstName,lastName,name_doc,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,pan,bank_ac_Number,ifsc }=formData

        if(!firstName||!storeName||!storeURL||!phone||!B_name|| !add_line1||!add_line2||!city||!pincode||!state||!pan){
          toast.error("Please fill all the required fields")
          return false;
        }
      }
      const registerdForm = async (e) => {
        e.preventDefault();
        setLoading(true); 
        if(!validateform()){
          setLoading(false)
          return;
        }
        try {
          const resp=await axios.post(`${process.env.MYDOMAIN}/Onboard/registerd`,formData);
          console.log(resp)
          toast.success("Wohoo! You are one step ahed!")

        } catch (error) {
          console.error(error.resp?.data || error.message)
          toast.error(error.resp?.data?.message || "Something went wrong!")
        }
      }

      // FOR NON REGISTERD ONES
      const [nrformData, setnrformData] = useState({
        firstname: '',
        lastname: '',
        storeName: '',
        storeURL: '',
        phone: '',
        extLinks: '',
        name_doc:'',
        add_line1:'',
        add_line2:'',
        city:'',
        pincode:'',
        state:'',
        revenue:'',
        bank_name:'',
        pan:'',
        bank_ac_Number:'',
        ifsc:'',
        });
        const handlenrChange = (e) => {
          setnrformData({ ...nrformData, [e.target.name]: e.target.value });
        };
        const handlenrForm =async(e)=>{
          e.preventDefault()
          setLoading(true)
          if(!validateform()){
            return 
          }
          try {
            
          } catch (error) {
            
          }

        }


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
        <h4 className="text-center font-medium text-lg text-slate-600 my-2">
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
                    // action=""
                    onSubmit={registerdForm}
                    methond="post"
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
                            <div>
                              <label className="text-slate-500">First Name*</label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="John"
                                onChange={handleChange}
                                value={formData.firstName}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Last Name
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="Doe"
                                type="text"
                                name="lastName"
                                id="lastName"
                                onChange={handleChange}
                                value={formData.lastName}
                                
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">Store Name*</label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="storeName"
                                id="storeName"
                                placeholder="The Gifiting Box"
                                onChange={handleChange}
                                value={formData.storeName}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Store Url*
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="/the-gifting-box"
                                type="text"
                                name="storeURL"
                                id="storeURL"
                                onChange={handleChange}
                                value={formData.storeURL}
                                
                                
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">Phone*</label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="9893XXXXXX"
                                onChange={handleChange}
                                value={formData.phone}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Social Media Link/ Any Product Link
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder=""
                                type="text"
                                name="extLinks"
                                id="extLinks"
                                onChange={handleChange}
                                value={formData.extLinks}
                                
                              />
                            </div>
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
                                name="B_name"
                                id="B_name"
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
                                name="add_line1"
                                id="add_line1"
                                placeholder="Address Line 1"
                                value={formData.add_line1}
                                onChange={handleChange}
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
                                name="add_line_2"
                                id="add_line_2"
                                value={formData.add_line2}
                                onChange={handleChange}
                                
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
                                name="city"
                                id="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/3 m-3">
                            <div>
                           <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="Pincode"
                                type="number"
                                name="pincode"
                                id="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/3 m-3">
                            <div>
                            <select className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500" name="state">
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
                                name="gstn"
                                id="gstn"
                                value={formData.gstn}
                                onChange={handleChange}
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
                                name="pan"
                                id="pan"
                                value={formData.pan}
                                onChange={handleChange}
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
                                name="bank_ac_number"
                                id="bank_ac_number"
                                value={formData.bank_ac_Number}
                                onChange={handleChange}
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
                                name="ifsc"
                                id="ifsc"
                                value={formData.ifsc}
                                onChange={handleChange}
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
                            disabled={loading}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                             {loading ?  (<CircularProgress className='text-white' size={16} style={{color:"white"}}/>) : "Submit"}
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                </TabPanel>
                <TabPanel>
                  {/* Onboarding form for NON Registerd
                   */}
                 
                 <form
                    action=""
                    method="post"
                    onSubmit={handlenrForm}
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
                                step2 >= item
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
                                  step2 >= item + 1
                                    ? "bg-primary"
                                    : "bg-gray-200"
                                }`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {step2 === 1 && (
                      <>
                          <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">First Name*</label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="John"
                                onChange={handlenrChange}
                                value={nrformData.firstname}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Last Name
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="Doe"
                                type="text"
                                name="lastname"
                                id="lastname"
                                onChange={handlenrChange}
                                value={nrformData.lastname}
                                
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">Store Name*</label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="storeName"
                                id="storeName"
                                placeholder="The Gifiting Box"
                                onChange={handlenrChange}
                                value={nrformData.storeName}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Store Url
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="/the-gifting-box"
                                type="text"
                                name="storeURL"
                                id="storeURL"
                                onChange={handlenrChange}
                                value={nrformData.storeURL}
                                
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">Phone*</label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="9893XXXXXX"
                                onChange={handlenrChange}
                                value={nrformData.phone}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Social Media Link/bestseller product 
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder=""
                                type="text"
                                name="extLinks"
                                id="extLinks"
                                onChange={handlenrChange}
                                value={nrformData.extLinks}
                                
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end m-3">
                          <button
                            type="button"
                            onClick={() => setStep2(2)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {step2 === 2 && (
                      <>
                       <div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Name as per PAN
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="name_doc"
                                id="name_doc"
                                onChange={handlenrChange}
                                value={nrformData.name_doc}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                PAN Number (Individaul)
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                               
                                type="text"
                                name="pan"
                                id="pan"
                                onChange={handlenrChange}
                                value={nrformData.pan}
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
                                name="add_line1"
                                id="add_line1"
                                placeholder="Address Line 1"
                                onChange={handlenrChange}
                                value={nrformData.add_line1}
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
                                name="add_line2"
                                id="add_line2"
                                onChange={handlenrChange}
                                value={nrformData.add_line2}
                                
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
                                name="city"
                                id="city"
                                placeholder="City"
                                onChange={handlenrChange}
                                value={nrformData.city}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/3 m-3">
                            <div>
                           <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                placeholder="Pincode"
                                type="number"
                                name="pincode"
                                id="pincode"
                                onChange={handlenrChange}
                                value={nrformData.pincode}
                                
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/3 m-3">
                            <div>
                            <select name="state" value={handleChange} onChange={handlenrChange} className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500">
        <option value="" disabled selected>
          Select a state
        </option>
        <option  value="AP">Andhra Pradesh</option>
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
                            onClick={() => setStep2(1)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Prev
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep2(3)}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {step2 === 3 && (
                      <>

<div className="flex justify-between">
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Monthly Revenue 
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="number"
                                name="revenue"
                                id="revenue"
                                onChange={handlenrChange}
                                value={nrformData.revenue}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Bank Name
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                               
                                type="text"
                                name="bank_name"
                                id="bank_name"
                                onChange={handlenrChange}
                                value={nrformData.bank_name}
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
                                name="bank_ac_Number"
                                id="bank_ac_Number"
                                onChange={handlenrChange}
                                value={nrformData.bank_ac_Number}
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
                                name="ifsc"
                                id="ifsc"
                                onChange={handlenrChange}
                                value={nrformData.ifsc}
                              />
                            </div>
                          </div>
                        </div>


                        <div className="flex justify-between m-3">
                          <button
                            type="button"
                            onClick={() => setStep2(2)}
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
