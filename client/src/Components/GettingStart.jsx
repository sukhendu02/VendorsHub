import React from "react";
import axios from "axios";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { useState,useEffect } from "react";
import { TrendingUp, Users, Globe,Wallet,Info } from 'lucide-react';

import CircularProgress from '@mui/material/CircularProgress';
import toast from "react-hot-toast";
// import { useLoader } from "../Context/LoaderContext";


export default function GettingStart() {

  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [vendorStatus, setVendorStatus] = useState(null);
  
   const [load, setload] = useState(false);

  useEffect(() => {
  
     const fetchProfile = async () => {
       try {
         const response = await axios.get('http://localhost:3000/api/auth/profile', { withCredentials: true });
        //  console.log(response.data)
         setUser(response.data);
  //       // console.log(user)
  // const vendorResponse = await axios.get("http://localhost:3000/api/auth/vendor/applicationstatus", { withCredentials: true });
  // // console.log(vendorResponse.data)
  //               setVendorStatus(vendorResponse.data.applicationStatus);

              } catch (err) {
        
         setError(err.message || "Failed to load profile");
       
       }
       
     };
     
     
     fetchProfile();
   }, []);
 
 useEffect(() => {
    const fetchVendorStatus = async () => {
      setload(true)
      try {
        
       
        const response = await axios.get("http://localhost:3000/api/auth/vendor/applicationstatus", { withCredentials: true });
        // console.log("Vendor API Response:", response.data.status);  // Debugging

        if (response.data && response.data.status) {
          setVendorStatus(response.data.status);
        } 
        console.log(vendorStatus)
      } catch (error) {
        console.error("Error fetching vendor status:", error);
        // toast.error("Failed to fetch vendor status");
      } finally{
        setload(false)
      }
    };

    fetchVendorStatus();
  }, []);

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
      // email: '',
      add_line1:'',
      add_line2:'',
      city:'',
      pincode:'',
      state:'',
      gstin:'',
      pan:'',
      bank_ac_number:'',
      ifsc:'',
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const validateform=()=>{
        const {firstName,lastName,B_name,storeName, storeURL,phone,extLinks,add_line1,add_line2,city,pincode,state,gstin,pan,bank_ac_number,ifsc }=formData
        // console.log(formData)

        if(!firstName||!storeName||!storeURL||!phone||!B_name|| !add_line1||!add_line2||!city||!pincode||!state||!pan){
          toast.error("Please fill all the required fields")
          return false;
        }
      
        return true
      }

      const registerdForm = async (e) => {
        
        e.preventDefault();
        setLoading(true); 
      

        if(!validateform()){
          setLoading(false)
          return;
        }
        try {
        
          const resp=await axios.post(`http://localhost:3000/api/auth/onboard/registered`,formData,{withCredentials:true});
          // console.log(resp.code)
          if (resp.status === 202) {
            toast.success(resp.data.message);
          }
          else{

            toast.success( "Wohoo! You are one step ahed!")
          }

        } catch (error) {
          console.error(error.resp?.data || error.message)
          toast.error(error.response?.data?.message || "Something went wrong!")
        }
        finally{
          
          setLoading(false)
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
        bank_name:'',
        pan:'',
        bank_ac_number:'',
        ifsc:'',
        });
        const handlenrChange = (e) => {
          setnrformData({ ...nrformData, [e.target.name]: e.target.value });
        };


        const validatenr=()=>{
          const {firstname,lastname,storeName, storeURL,phone,name_doc,add_line1,add_line2,city,pincode,state,extLinks,pan,bank_name,bank_ac_number,ifsc }=nrformData
          console.log(nrformData)
  
          if(!firstname||!storeName||!storeURL||!phone||!name_doc|| !add_line1||!add_line2||!city||!pincode||!state||!pan||!bank_name||!bank_ac_number||!ifsc){
            toast.error("Please fill all the required fields")
            
            setLoading(false)
            return false;
          }
        
          return true
        }


        const nonregForm =async(e)=>{
          e.preventDefault()
          setLoading(true)
          if(!validatenr()){
            setLoading(false)
            return 
          }
          try {
            
            console.log("I ran")
            const resp=await axios.post(`http://localhost:3000/api/auth/onboard/non-registered`,nrformData,{withCredentials:true});
            console.log(resp)
            // console.log("hey")
            // toast.success("Wohoo! You are one step ahed!")
  if (resp.status === 202) {
            toast.success(resp.data.message);
          }
          else{

            toast.success( "Wohoo! You are one step ahed!")
          }
            
          } catch (error) {
            console.error(error.resp?.data || error.message)
            toast.error(error.response?.data?.message || "Something went wrong!")
          }
          finally{
            setLoading(false)
          }

        }


  return (
    <>
    
      <div className="section-1 grid bg-white shadow-sm bg-gradient-to-r from-blue-400 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-xl p-8 text-white">
     
        <div className="max-w-6xl mx-auto p-8 text-center">
             {/* Introduction Section */}
             <h1 className="text-4xl font-bold mb-4">Start Selling on Our Marketplace</h1>
          <p className="text-xl text-blue-100">Join thousands of successful vendors and grow your business with us</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
    
              <div  className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Register </h3>
                <p className="text-blue-100 text-sm">Complete your vendor registration in minutes.</p>
              </div>
              <div  className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sell </h3>
                <p className="text-blue-100 text-sm">List your products and start selling</p>
              </div>
              <div  className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <Wallet  className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Earn </h3>
                <p className="text-blue-100 text-sm">Grow your business with our marketplace</p>
              </div>
           
        </div>
      </div>

      {/* </div> */}

      <div className='bg-sky-100 text-complimentory border-l-6 text-xs p-2 px-4 m-4'>
        <Info className='inline' size={12} /> By completing the vendor onboarding process, the vendor automatically agrees to all marketplace terms and policies and be bound by any future updates. Please read all the terms and policies in the policies tab. 
        </div>
    

{load? (<>
  <CircularProgress className="text-center p-4"></CircularProgress>
</>):(<>
      {(vendorStatus === 'Pending' || vendorStatus === null) ? (
        <>

           <div className="bg-white rounded mt-2 p-3 text-sm shadow-sm">
{vendorStatus==="Pending"?(
  <>
  <div className="text-sm bg-orange-300 p-3 my-4 text-slate-700 border-l-6 border-orange-400 rounded">Your last application was not approved. Please fill details carefully for fast approval.</div>
  </>
):(<></>)}

        <h4 className="text-center font-medium text-lg text-slate-600 my-2">
          Register your business and Start Earing{" "}
        </h4>


        



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
                              <label className="text-slate-500">
                                Email
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500 text-slate-600"
                                placeholder=""
                                type="text"
                                name="email"
                                id="email"
                                // onChange={handleChange}
                                disabled
                                value={user.email}
                                // value={user.id}
                                
                              />
                            </div>
                          </div>
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
                        {/* <div className="flex justify-between">
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
                          
                        </div> */}

                        <div className="flex justify-end">
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
                                onChange={handleChange}
                                value={formData.B_name}
                              />
                            </div>
                          </div>
                          {/* <div className="relative my-4  w-1/2 m-3">
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
                                value={formData.noname}
                                onChange={handleChange}
                              />
                            </div>
                          </div> */}
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
                                name="add_line2"
                                id="add_line2"
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
                            <select value={formData.state} onChange={handleChange} className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500" name="state">
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
                                GSTIN Number
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="gstin"
                                id="gstin"
                                value={formData.gstin}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                PAN Number*
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
                                value={formData.bank_ac_number}
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
                    onSubmit={nonregForm}
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
                              <label className="text-slate-500">
                                Email 
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500 text-slate-600"
                                placeholder=""
                                type="text"
                                name="email"
                                id="email"
                                disabled
                                // onChange={handlenrChange}
                                value={user.email}
                                
                              />
                            </div>
                          </div>
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
                                Store Url*
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
                       

                        <div className="flex justify-end ">
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
                                Name as per PAN*
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
                                PAN Number (Individaul)*
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
                            <select name="state" value={nrformData.state} onChange={handlenrChange} className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500">
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
                          {/* <div className="relative my-4  w-1/2 m-3">
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
                          </div> */}
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
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                Bank Name*
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
                                Bank Account Number*
                              </label>
                              <br />
                              <input
                                className="w-full p-3 m-1 border-b-2 rounded-lg border-slate-300 outline-none bg-slate-50 focus:border-slate-500"
                                type="text"
                                name="bank_ac_number"
                                id="bank_ac_number"
                                onChange={handlenrChange}
                                value={nrformData.bank_ac_number}
                              />
                            </div>
                          </div>
                          <div className="relative my-4  w-1/2 m-3">
                            <div>
                              <label className="text-slate-500">
                                IFSC Code*
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
              </TabPanels>
            </TabGroup>
          </div>
        </div>
        </div>
        </>
        ):(<>
        <div className="border-l-6  border-complimentory p-8 m-4 rounded bg-sky-100 font-semibold text-slate-600 ">
          <h3 className="text-lg">
          Your application is <span> {vendorStatus} </span> 

          </h3>
        
        {vendorStatus==="Rejected"?(<>
        
  <div className="text-sm bg-orange-300 p-3 mt-3 text-slate-700 border-l-6 border-orange-400 rounded">
    Your last application was Rejected. Please wait or Contact Support.</div>
  

        
        </>):(<></>)}
        </div>
        </>)}
        </>)}
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
