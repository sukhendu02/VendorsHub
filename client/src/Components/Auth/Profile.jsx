import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from './Logout';
import { CircularProgress } from "@mui/material";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [vendorApplication,setvendorApplication] = useState(null)
  const [vendorStatus,setvendorStatus] = useState(null)
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', { withCredentials: true });
        setUser(response.data);
        
        
      } catch (err) {
        // console.log(err)
        setError(err.message || "Failed to load profile");
        navigate("/signin"); // Redirect to login if unauthorized
      }
    };

    fetchProfile();
  }, [navigate]);

   useEffect(() => {
      const fetchVendorStatus = async () => {
        try {
          const vendorApp = await axios.get("http://localhost:3000/api/auth/vendor/appdata", { withCredentials: true });
          // console.log("Vendor API Response:", vendorApp.status);  // Debugging
          // console.log("Vendor API Response:", vendorApp.data);  // Debugging
          setvendorStatus(vendorApp.data.status)
          // setvendorApplication(vendorApp.data.vendor)
          // console.log(vendorApplication)

        } catch (error) {
          console.error("Error fetching vendor status:", error);
          // toast.error("Failed to fetch vendor status");
        } 
      };
  
      fetchVendorStatus();
    }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <CircularProgress className="text-center"/>;

  return (
    <main>


    


      <div className=" mx-auto  bg-white shadow-lg rounded-lg p-4">


        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-semibold mb-4 text-complimentory">Profile Information</h2>
          <div className="bg-slate-100 grid grid-cols-2 p-4 rounded-xl mb-3 gap-8">
          <div >
              <label class="block text-sm font-medium mb-2 text-slate-500">Username</label>
              <input type="email" name="email" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value={user.username} />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Email</label>
              <input type="email" name="email" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value={user.email} />
            </div>
            <div className="flex justify-between align-middle items-center w-full">
              {/* <label class="block text-sm font-medium mb-2 text-slate-500">Email</label> */}

              {/* <input type="email" name="email" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value={user.email} /> */}
              <h6 className="text-slate-600 text-sm">Forgot/Change your Password</h6>
              <a href="" type="button" className="bg-complimentory rounded p-2 px-4 text-white text-sm" target="_blank" rel="noopener noreferrer">Change Password</a>
            </div>
          </div>

          {(vendorStatus=== null || vendorStatus==="Pending")?(
            <>

          
          <div className="bg-amber-400 text-slate-600 border-l-6 border-amber-600 p-4 m-4">
            Please fill the registeration form to get the approval.
          </div>
            </>
           ):(<>

<div className="bg-sky-200 text-slate-600 p-4 m-4 border-l-6 border-blue-600">
           Application Staus :: {vendorStatus}
          </div>
           
             {/* <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
            <label class="block text-sm font-medium mb-2 text-slate-500">Store Name</label>
            <input type="text" name="storeName" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700 " value={vendorApplication.storeName} />
          </div>
          
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Phone</label>
              <input type="tel" name="phone" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value={vendorApplication.phone} />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Address</label>
              <input type="text" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value={vendorApplication.address} />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Store Url</label>
              <input type="text" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value={vendorApplication.storeUrl} />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Business Name</label>
              <input type="text" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value="123 Vendor Street" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">GSTIN</label>
              <input type="text" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value="123 Vendor Street" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">PAN</label>
              <input type="text" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value="123 Vendor Street" />
            </div>
          </div> */}
           </>)}  
          

          <div className="btn w-1/2 m-auto p-5 pt-8">
            <Logout className="w-fit "/>
          </div>
        </div>



      </div>

      {/* </div> */}

    </main>
  );
};

export default Profile;
