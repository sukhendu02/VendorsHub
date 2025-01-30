// import React from 'react'

// import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import axios from "axios";
// import toast, { Toaster } from 'react-hot-toast';



// export default function Sign() {
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const toggleForm = () => {
//       setIsSignUp(!isSignUp);
//     };

//     // const handleSignup =((e)=>{
//     //   e.preventDefault()
//     //   axios.post()
      
//     // })
//     const [formData, setFormData] = useState({
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       });
//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };

//       const handleSignup = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {

//           if (formData.password !== formData.confirmPassword) {
//             toast.error('Passwords do not match');
//             setLoading(false);
//             return;
//           }
          
//           // const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
          
//           // alert(response.data.message);
//         } catch (error) {
//           console.error(error.response?.data || error.message);
//         }
//         finally{
//           setLoading(false)
//         }
//       };

//   return (
//     <>
//      <div className="w-full  flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-lg p-14 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isSignUp ? 'Sign Up' : 'Sign In'}
//         </h2>

//         <p className='text-gray-500 text-center mb-4'>
//         {isSignUp ? 'Create a new account and Start Selling! ':"Sign in to your existing account!"}
//         </p>

//         {isSignUp ? (
//           <form onSubmit={handleSignup} method='post'>
//             <div className="mb-4">
//               {/* <label className="block text-sm font-medium text-gray-700">Name</label> */}
//               <input
//                 type="text"
//                 placeholder="Username or Bussiness Name"
//                 name='username'
//                 className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-4">
//               {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name='email'
//                 className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-4">
//               {/* <label className="block text-sm font-medium text-gray-700">Password</label> */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name='password'
//                 className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-4">
//               {/* <label className="block text-sm font-medium text-gray-700">Password</label> */}
//               <input
//                 type="password"
//                 placeholder="Cofirm Password"
//                 name='confirmPassword'
//                 className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className= {`cursor-pointer w-full my-4 p-3  text-white rounded-xl ${loading? "bg-[#F1B97D]":"bg-secondary" }`}
//             >

//           {loading ? 'Loading...' : 'Sign Up'}
//               {/* Sign Up */}
//             </button>
//           </form>
//         ) : (
//           <form>
//             <div className="mb-4">
//               {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
//               />
//             </div>
//             <div className="mb-4">
//               {/* <label className="block text-sm font-medium text-gray-700">Password</label> */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full my-4 p-3 bg-secondary text-white rounded-xl"
//             >
//               Sign In
//             </button>
//           </form>
//         )}
//         <div className="text-center mt-4">
//           <p className="text-sm text-slate-600">
//             {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
//             <button
//               onClick={toggleForm}
//               className="text-primary  font-bold cursor-pointer"
//             >
//               {isSignUp ? 'Sign In' : 'Sign Up'}
//             </button>
//           </p>
          
//           <p className='text-sm my-4 text-slate-500'>Can't Remember Password? <a href="" className='text-secondary font-semibold'>Forgot Password</a></p>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }
