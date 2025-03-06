import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from './Logout';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', { withCredentials: true });
        // console.log(response.data)
        setUser(response.data);
      } catch (err) {
        // console.log(err)
        setError(err.message || "Failed to load profile");
        navigate("/signin"); // Redirect to login if unauthorized
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <main>


      {/* <div className="flex justify-center items-center h-screen bg-gray-100"> */}
      {/* <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">User Profile</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>
                User ID:</strong> {user._id}</p>
            </div> */}


      <div className=" mx-auto  bg-white shadow-lg rounded-lg p-4">


        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-semibold mb-4 text-complimentory">Profile Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
            <label class="block text-sm font-medium mb-2 text-slate-500">Store Name</label>
            <input type="text" name="storeName" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700 " value="My Store" />
          </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Email</label>
              <input type="email" name="email" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value="vendor@example.com" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Phone</label>
              <input type="tel" name="phone" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value="+1 234 567 8900" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Address</label>
              <input type="text" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value="123 Vendor Street" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-slate-500">Store Url</label>
              <input type="text" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-slate-700" value="123 Vendor Street" />
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
          </div>

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
