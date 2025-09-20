import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from './Logout';
import { CircularProgress } from "@mui/material";

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { User,
  Store,
  CheckCircle,
  AlertCircle,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  TrendingUp,
  TriangleAlert,
  Hourglass,
  Package,
  CreditCard,
  Settings,
  Edit3,
  Camera,
 
  Badge,
  Globe,
  Star,
  DollarSign,
  Users,
  ShoppingBag,
  ArrowRight} from 'lucide-react'



const Profile = () => {
  const [user, setUser] = useState(null);
  const [vendorApplication,setvendorApplication] = useState(null)
  const [vendorStatus,setvendorStatus] = useState(null)
  const [sellerData,setSellerData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`, { withCredentials: true });
        setUser(response.data);
        
        
      } catch (err) {
        // console.log(err)
        setError(err.message || "Failed to load profile");
        navigate("/signin"); // Redirect to login if unauthorized
      }
    };

    fetchProfile();
  }, [navigate]);


  //     const fetchVendorStatus = async () => {
  //       try {
  //         const vendorApp = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/vendor/appdata`, { withCredentials: true });

  //         setvendorStatus(vendorApp.data.status)
  //         setvendorApplication(vendorApp.data)
 
  // //   id: 'user_123',
  // //   name: 'Sarah Johnson',
  // //   email: 'sarah.johnson@email.com',
  // //   phone: '+1 (555) 123-4567',
  // //   // avatar: 'https://randomuser.me/api/portraits',
  // //   businessName: 'Artisan Crafts Co.',
  // //   businessType: 'Handmade & Crafts',
  // //   address: '123 Creative Street',
  // //   city: 'San Francisco',
  // //   country: 'United States',
  // //   joinDate: '2024-01-15',
  // //   verificationStatus: 'verified',
  // //   onboardingProgress: 75,
  // //   totalSales: 45280,
  // //   totalOrders: 342,
  // //   rating: 4.8,
  // //   reviewCount: 127
  // // };
  
  // setSellerData(vendorApp.data)
  // console.log(sellerData)

  //       } catch (error) {
  //         // console.error("Error fetching vendor status:", error);
  //         // toast.error("Failed to fetch vendor status");
  //       } 
  //     };
  
  //     fetchVendorStatus();
  //   }, []);

  useEffect(() => {
  const fetchVendorStatus = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/vendor/appdata`,
        { withCredentials: true }
      );

      if (res.data) {
        setvendorStatus(res.data.status || null);
        setvendorApplication(res.data);
        setSellerData(res.data); // ✅ replace hardcoded user
        console.log("Fetched Vendor Data:", res.data);
      } else {
        // No vendor application found
        setvendorStatus(null);
        setvendorApplication(null);
        setSellerData(null);
        console.log("No vendor application found.");
      }
    } catch (error) {
      console.error("Error fetching vendor status:", error.message);
      setvendorStatus(null);
      setvendorApplication(null);
      setSellerData(null);
    }
  };

  fetchVendorStatus();
}, []);


    let [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview');

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <CircularProgress className="text-center"/>;



  const onboardingSteps = [
    { id: 'profile', title: 'Complete Profile', description: 'Add your personal and business information', completed: true, required: true },
    { id: 'verification', title: 'Identity Verification', description: 'Verify your identity with government ID', completed: true, required: true },
    { id: 'business', title: 'Business Details', description: 'Add business registration and tax information', completed: true, required: true },
    { id: 'payment', title: 'Payment Setup', description: 'Configure your payment methods and bank account', completed: false, required: true },
    { id: 'products', title: 'Add Products', description: 'Upload your first products to start selling', completed: false, required: false },
    { id: 'policies', title: 'Store Policies', description: 'Set up shipping, return, and privacy policies', completed: false, required: false }
  ];

  const getStatusColor = (vendorStatus) => {
    switch (vendorStatus) {
      case 'Approved': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-purple-600 bg-purple-100';
      case 'InReview': return 'text-yellow-600 bg-yellow-100';
      case 'Rejected': return 'text-red-600 bg-red-100';
      // case null: return 'text-grey-600 bg-grey-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };


  const getStatusIcon = (vendorStatus) => {
    switch (vendorStatus) {
      case 'Approved': return <CheckCircle className="h-4 w-4" />;
      case 'Pending': return <Hourglass className="h-4 w-4" />;
      case 'InReview': return <AlertCircle className="h-4 w-4" />;
      case 'Rejected': return <TriangleAlert className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};


  return (
    <>
   


    
    <div className="min-h-screen bg-gray-50 p-5 ">
   

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
              
              <Store  className="bg-white h-24 w-24 text-primary rounded-full p-5 object-cover border-4 border-white shadow-lg" />
                {/* <User/> */}
                {/* <img src={user.avatar} alt={user.name} className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg" /> */}
                {/* <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50">
                   <Camera className="h-4 w-4 text-gray-600" /> 
                </button> */}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.username}</h1>
                <p className="text-gray-600">{user.email}</p>

                <div className="flex items-center space-x-2 mt-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vendorStatus)}`}>
                    {getStatusIcon(vendorStatus)}
                    <span className="ml-1 capitalize">{vendorStatus}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-3">
              <Logout className="w-fit  !bg-primary">
              <button className="px-4 py-2 bg-[#E47119] text-white rounded-lg hover:bg-[#d06415] transition-colors flex items-center space-x-2">
                <Edit3 className="h-4 w-4" />
                <span>Log Out</span>
              </button>
              </Logout>
            </div>
          </div>
        </div>
      </div>


 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
         

 {/* Stats */}
            {/* <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Sales</p>
                    <p className="text-2xl font-bold text-gray-900">${user.totalSales.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{user.totalOrders}</p>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{user.rating} <span className="text-sm">({user.reviewCount} reviews)</span></p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
            </div> */}
</div>
            
      {/* Tabs */}
      <div className=" bg-white border-b border-b-slate-200 rounded-t-lg shadow-sm  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {['overview', 'onboarding'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize cursor-pointer focus:border-b-primary ${
                  activeTab === tab
                    ? 'border-[#E47119] text-[#E47119] !border-b-[#E47119] focus:border-b-[#E47119]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>


      {/* Content */}
      <div className="bg-white rounded-b-lg shadow p-6  max-w-7xl mx-auto">
        {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
                
                   {/* Account Status */}
      <div className="bg-gray-50 rounded-lg p-4 mb-5">
        <div className="flex items-center justify-between">
          <div >
            <p className="text-sm font-medium text-gray-600">Email Status</p>
            <p className={`text-lg font-bold text-gray-600 capitalize ${user.emailVerified === true ? 'text-green-600' : 'text-red-600'}`}>
              {user.emailVerified ? (user.emailVerified === true ? "Verified" : "Not Verified") : "No Data"}
            </p>
          </div>
          <div className={`p-2 rounded-full `}>
      

            <CheckCircle style={{color: user.emailVerified === true ? "green":"grey"}} />
          </div>
        </div>
      </div>
     
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
      {/* Onboarding Progress */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Onboarding Progress</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#E47119] h-2 rounded-full transition-all duration-300"
           style={{
      width:
        vendorStatus === "Pending" || !vendorStatus
          ? "0%"
          : "100%",
    }}
          ></div>
        </div>
      </div>

      {/* Account Status */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Account Status</p>
            <p className={`text-lg font-bold  capitalize ${getStatusColor(vendorStatus)} !bg-gray-50 `}>
              {vendorStatus || "Not Submitted"}
            </p>
          </div>
          <div className={`p-2 rounded-full ${getStatusColor(vendorStatus)}`}>
            {getStatusIcon(vendorStatus)}
          </div>
        </div>
      </div>

{/* STORE TYPE AND CHANGE PASSWORD */}


      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Store Type</span>
        </div>
            <p className={`text-lg font-bold  capitalize text-gray-500 !bg-gray-50 `}>
              {/* {vendorStatus || "Not Submitted"} */}
              {sellerData?.vendor?.storeType || "Not Submitted"}
            </p>
      </div>

      {/* Change Password */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Change Password</p>
            <p className={`text-md  capitalize  !bg-gray-50 `}>
              Change your account password
            </p>
          </div>
          <div className={`p-2 rounded-full `}>
            <Button
        onClick={open}
        className="rounded-md bg-complimentory py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-complimentory/70 cursor-pointer data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Change Password
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white shadow-2xl text-slate-600 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-slate-600">
                Change Password
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-slate-600">
                To change your password, You have to Signout and go to forgot password to reset your password.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-complimentory py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-complimentory/70 cursor-pointer data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
          </div>
        </div>
      </div>
  
  
 
                  </div> 
                </div>
              </div>
        )}

        {activeTab === 'onboarding' && (


(sellerData)?(

  <>

          <div className="bg-white rounded-lg  p-6">

{/* NOTIFICATION FOR PENDING VENDOR STATUS */}
{vendorStatus === "Pending" && (
  <div className="mb-6 p-3 bg-yellow-50 border-l-4 border-yellow-400">
    <div className="flex">
      <div className="flex-shrink-0">
        <AlertCircle className="h-5 w-5 text-yellow-400" />
      </div>
      <div className="ml-3">
        <p className="text-sm text-yellow-700">
          Your last application was not approved. Please fill the details carfefully and resubmit.
        </p>
      </div>
    </div>
  </div>
)}

            <h2 className="text-lg font-semibold mb-4">Onboarding Details</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.firstname} {sellerData.vendor.lastname}</dd>
              </div>
           
              <div>
                <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.add_line1} {sellerData.vendor.add_line2} {sellerData.vendor.city} {sellerData.vendor.state} {sellerData.vendor.pincode}</dd>
              </div>
           
              <div>
                <dt className="text-sm font-medium text-gray-500">Store Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.storeName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Store Url</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.storeURL}</dd>
              </div>
                 <div>
                <dt className="text-sm font-medium text-gray-500">External Links</dt>
                <dd className="mt-1 text-sm text-gray-900"><a href={`${sellerData.vendor.extLinks}`}>{sellerData.vendor.extLinks}</a></dd>
              </div>
               { sellerData?.vendor?.B_name &&(
              <div>
                <dt className="text-sm font-medium text-gray-500">Business Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.B_name}</dd>
              </div>
)}
                { sellerData?.vendor?.gstin &&(
              <div>
                <dt className="text-sm font-medium text-gray-500">GSTIN</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.gstin}</dd>
              </div>
                )}
              { sellerData?.vendor?.pan &&(

                <div>
                <dt className="text-sm font-medium text-gray-500">PAN</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.pan}</dd>
              </div>
              )}
              { sellerData?.vendor?.bank_name &&(

                <div>
                <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.bank_name}</dd>
              </div>
              )}
              <div>
                <dt className="text-sm font-medium text-gray-500">Bank Account No.</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.bank_ac_number}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">IFSC Code</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.ifsc}</dd>
              </div>   
               { sellerData?.vendor?.enrollmentID &&(

                <div>
                <dt className="text-sm font-medium text-gray-500">Enrollment ID</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.vendor.enrollmentID}</dd>
              </div>
              )}      
            </dl>


<div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 my-5">


               {/* Onboarding Progress */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Last Updated</span>
        </div>
        {/* <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#E47119] h-2 rounded-full transition-all duration-300"
           style={{
      width:
        vendorStatus === "pending" || !vendorStatus
          ? "0%"
          : "100%",
    }}
          ></div>
        </div> */}
          <p className="mt-1 text-sm text-gray-900">{formatDate(sellerData.vendor.LastchangeDate || sellerData.vendor.Date)}</p>
      </div>

      {/* Account Status */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-sm font-medium text-gray-600  `}>Account Status</p>
            <p className={`text-lg font-bold  capitalize ${getStatusColor(vendorStatus)} !bg-gray-50 `}>
              {vendorStatus || "Not Submitted"}
            </p>
          </div>
          <div className={`p-2 rounded-full ${getStatusColor(vendorStatus)}`}>
            {getStatusIcon(vendorStatus)}
          </div>
        </div>
      </div>

</div>
            {/* <div className="space-y-4">
              {onboardingSteps.map(step => (
                <div key={step.id} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 rounded-full p-1.5 ${step.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                    {step.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Clock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
            
          </div>
            </>
):(
<>
  <div className="col-span-2 flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
      <p className="text-gray-600 mb-4 text-center">
        You haven’t submitted your vendor application yet.
      </p>
      <button
        onClick={() => navigate("/vendor/start")}
        className="px-6 py-2 bg-[#E47119] text-white rounded-lg hover:bg-[#c65e14] transition-colors"
        >
        Fill Vendor Application Form
      </button>
    </div>
        </>
)

        )}

        {/* {activeTab === 'details' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Profile Details</h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.status}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                <dd className="mt-1 text-sm text-gray-900">{sellerData.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Business Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.businessName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.city}, {user.country}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Join Date</dt>
                <dd className="mt-1 text-sm text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</dd>
              </div>
            </dl>
          </div>
        )} */}
      </div>
    </div>

     </>
  );
};

export default Profile;
