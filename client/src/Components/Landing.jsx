import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Rocket,
  CreditCard,
  Users,
  Handshake,
  ArrowRight,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import "../Landing.css";
import { Menu, X } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
export default function Landing() {


  const [isOpen, setIsOpen] = useState(false);
    const [queryForm, setqueryForm] = useState({
      fullname: "",
      email: "",
      subject: "",
      query: "",

    });
    const handleChange = (e) => {
      setqueryForm({ ...queryForm, [e.target.name]: e.target.value });
    };

    const queryFormSubmit = async (e) => {
      e.preventDefault();
      try {
        if(!queryForm.fullname || !queryForm.email || !queryForm.subject || !queryForm.query) {
          toast.error("Please fill all fields");
          return;
        }

        const response = await axios.post(`http://localhost:3000/api/common/queryform`,queryForm ,{withCredentials: true});

        // console.log("Response:", response);
        if (response.status === 200) {
          toast.success("Query submitted successfully!");
          // alert("Query submitted successfully!");
          setqueryForm({
            fullname: "",
            email: "",
            subject: "",
            query: "",
          });
        } else {
          toast.error("Failed to submit query. Please try again.");
          // alert("Failed to submit query. Please try again.");
        }
      } catch (error) {
        // console.error("Error submitting query:", error);
        // alert("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      }
    }


  return (
    <>
      <div className="landing-page-vh w-full">
        <nav className="flex items-center w-full flex-row justify-evenly p-2 mt-0 md:mt-3">
         <div className="hidden md:flex w-9/10 justify-between items-center">

        
          <div>
            <Link className="text-2xl font-bold" to="/">
              <img src="/Logo/aabhaar.png" alt="logo" width="150px" />
            </Link>
          </div>
          <div className="flex">
            <a
              className="nav-links px-2 m-2 text-slate-600 font-semibold"
              href="#steps"
            >
              How to Sell
            </a>
            {/* <Link
              className="nav-links px-2 m-2 text-slate-600 font-semibold"
              to="/about"
            >
              About
            </Link> */}
            <Link
              className="nav-links px-2 m-2 text-slate-600 font-semibold"
              to="/documentation"
            >
              Docs
            </Link>
            <Link
              className="nav-links px-2 m-2 text-slate-600 font-semibold"
              to="#"
            >
              Don't have GST?
            </Link>
          </div>

          <div>
            <Link
              className="nav-links px-2 m-2 text-slate-600 font-semibold"
              to="/vendor/auth/signin"
            >
              Login
            </Link>
            <Link to="/vendor/auth/signup">
              <button className="p-2 px-4 rounded-xl font- cursor-pointer bg-acent h-fit text-white ">
                Start Selling
              </button>
            </Link>
          </div>
 </div>

          {/*  */}
            {/* Mobile Hamburger */}
      <div className="md:hidden   w-full items-right flex justify-between px-4">
        <div>
            <Link className="text-2xl font-bold" to="/">
              <img src="/Logo/aabhaar.png" alt="logo" width="150px" />
            </Link>
          </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50">
          <a
            className="nav-links px-2 py-2 text-slate-600 font-semibold"
            href="#steps"
            onClick={() => setIsOpen(false)}
          >
            How to Sell
          </a>
          <Link
            className="nav-links px-2 py-2 text-slate-600 font-semibold"
            to="/documentation"
            onClick={() => setIsOpen(false)}
          >
            Docs
          </Link>
          <Link
            className="nav-links px-2 py-2 text-slate-600 font-semibold"
            to="#"
            onClick={() => setIsOpen(false)}
          >
            Don't have GST?
          </Link>
          <Link
            className="nav-links px-2 py-2 text-slate-600 font-semibold"
            to="/vendor/auth/signin"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link to="/vendor/auth/signup" onClick={() => setIsOpen(false)}>
            <button className="mt-2 p-2 px-4 rounded-xl bg-acent text-white">
              Start Selling
            </button>
          </Link>
        </div>
      )}


        </nav>

        <div className="hero-section h-screen text-center w-full p-3">
          <div>
            <h1 className="font-bold text-4xl ">
              Start Selling and Growing with Us!
            </h1>
          </div>
          <h6 className="text-slate-500 font-semibold pt-4">
            Join our gifting marketplace where thousands of customers are
            looking for products like yours.
          </h6>

          <div className="action-btn-container">
            <Link to="/vendor/auth/signup">
              <button className="action-btn cursor-pointer bg-primary text-slate-50">
                {" "}
                Became a Vendor
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="section-2 grid grid-cols-3 w-19/20 sm:w-7/8  gap-10 m-auto py-4 px-2 sm:p-6 rounded bg-secondary bg-gradient-to-br from-[#E47119] to-bg-secondary items-center mb-10">
          <div className="feature text-center  border-r-2 border-white">
            <h3 className="text-lg sm:text-2xl font-bold text-slate-50 p-2  pb-0 ">
              0% Commission* 
              <br />
            </h3>
           
          </div>
          <div className="feature text-center border-r-2 border-white ">
            <h3 className="text-lg sm:text-2xl font-bold text-slate-50 p-2 ">
              Boost Your Visibility
            </h3>
          
          </div>
 
          <div className="feature text-center "> 
            <h3 className="text-lg sm:text-2xl font-bold text-slate-50 p-2 ">
              Support for all Businesses
            </h3>
          
          </div>
          
        </div> */}
        <div className="section-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[95%] sm:w-[88%] gap-6 sm:gap-10 m-auto py-4 px-2 sm:p-6 rounded bg-secondary bg-gradient-to-br from-[#E47119] to-bg-secondary items-center mb-10">
  
  <div className="feature text-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-4 sm:pb-0">
    <h3 className="text-lg sm:text-2xl font-bold text-slate-50 p-2 pb-0">
      0% Commission* 
    </h3>
  </div>
  
  <div className="feature text-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-4 sm:pb-0">
    <h3 className="text-lg sm:text-2xl font-bold text-slate-50 p-2">
      Boost Your Visibility
    </h3>
  </div>
  
  <div className="feature text-center">
    <h3 className="text-lg sm:text-2xl font-bold text-slate-50 p-2">
      Support for all Businesses
    </h3>
  </div>
  
</div>


        <div className="what-we-are-section my-4 p-4 sm:p-5 sm:py-15">
          <p className="text-center text  text-slate-700 font-medium mb-3 ">
            We Empower vendors to reach a gifting focus audience effortlessly.{" "}
          </p>
          <p className="text-center text text-slate-700 font-medium mb-3 ">
            {" "}
            Reach to a dedicated audience searching for unique gifts for every
            occasion with more than 30+ catagories, whether you're an individual
            or a large enterprise, we help you succeed.
          </p>
        </div>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {/* Why <span className="text-acent">Partner</span> With Us */}
                  Your <span className="text-primary">Growth</span>  Partner
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're not just another marketplace platform. We're your growth
                  partner, providing everything you need to succeed in today's
                  competitive market.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#FCF1E8] bg-opacity-10 p-2 rounded-lg mr-4">
                      <Rocket className="h-6 w-6 text-[#E47119]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fastest Setup
                      </h3>
                      <p className="text-gray-600">
                        Get your store live in under 15 minutes with our
                        intuitive onboarding process.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#FCF1E8] bg-opacity-10 p-2 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-[#E47119]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Dedicated Support
                      </h3>
                      <p className="text-gray-600">
                        From onboarding to selling our 24/7 expert support team
                        with an average response time of under 2 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#FCF1E8] bg-opacity-10 p-2 rounded-lg mr-4">
                      <Handshake className="h-6 w-6 text-[#E47119]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Easy-to-Use Platform
                      </h3>
                      <p className="text-gray-600">
                        Start selling quickly with our user-friendly setup and
                        management tools, perfect for any skill level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#E47119] to-[#c85e15] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Success by the Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3.2x</div>
                    <div className="text-orange-200">
                      Average Sales Increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">45%</div>
                    <div className="text-orange-200">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15 min</div>
                    <div className="text-orange-200">Setup Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-orange-200">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div id="explore" className="container-feature">
            <div className="features">
              <h2 className="text-center text-3xl font-bold text-slate-700 my-6">
                Features and Benifits
              </h2>
              <div className="card-container-1 d-flex my-5">
                <div className="marquee-text">
                  <div className="marquee-text-track">
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Easy Store
                      Setup
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Vendor First
                      Approch
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Real Time
                      Dashboard
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Multiple
                      Payment Options
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Easy Store
                      Setup
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Vendor First
                      Approch
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Real Time
                      Dashboard
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Multiple
                      Payment Options
                    </p>
                  </div>
                </div>
                <div className="marquee-text">
                  <div className="marquee-text-track-2">
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Easy Payouts
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> No Limits on
                      Products
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Full access
                      to Features
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Inventory
                      management
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Easy Payouts
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> No Limits on
                      Products
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Full access
                      to Features
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Inventory
                      management
                    </p>
                  </div>
                </div>
                <div className="marquee-text">
                  <div className="marquee-text-track">
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Multiple
                      Catagoires
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Broad
                      Audience
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Easy
                      Customization
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-check"></i> Unilimited
                      Coupons
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Multiple
                      Catagoires
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Broad
                      Audience
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Easy
                      Customisation
                    </p>
                    <p aria-hidden="true">
                      <i className="fa-solid fa-circle-check"></i> Unilimited
                      Coupons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="steps" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-3">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6 ">
                  {/* <img src="/icons/Orange sketch.svg" alt="" /> */}
                  Steps to <span className="text-primary">get started</span> 
                </h2>
                <p className="text-slate-600  mr-3">
                  Start your journey with these simple steps. <br /> Start selling to thousands of eager gift buyers!
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-700 mb-6">
                  Start Your Journey
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#E47119] text-white text-sm font-bold px-3 py-1 rounded-full mr-4 mt-1">
                      Step 1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Login or Register
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Click on get Started and Register with business Email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#E47119] text-white text-sm font-bold px-3 py-1 rounded-full mr-4 mt-1">
                      Step 2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Fill and Submit Onboarding Form
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Fill the Onboarding Form to get verified.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#E47119] text-white text-sm font-bold px-3 py-1 rounded-full mr-4 mt-1">
                      Step 3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        You will get the confirmation mail.
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Once Verification completes you will get confirmation
                        mail.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#E47119] text-white text-sm font-bold px-3 py-1 rounded-full mr-4 mt-1">
                      Step 4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Start selling and growing
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Setup your store and start Selling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------- */}
        <div className="what-we-do-container">
          <div className="what-we-do">
            <div id="pitch-sec" className="pitch-section md:flex">
              <div className="pitch-section-1 flex justify-center  items-center md:w-1/3 mr-3">
                <h2 className="text-4xl font-semibold">
                  Why <span className="text-primary">partner</span> with us?
                </h2>
              </div>


              <div className="features-us md:w-2/3">
                <div className="parent grid grid-cols-2 grid-row-3 gap-2 sm:gap-6 ">
                  <div className="div1 bg-white sm:p-4 shadow-md rounded-lg">
                    <div>
                        <img src="/icons/growth (1).svg" alt="" width="50px" className="p-1 b-2 border-acent  rounded my-2"  />
                      <h6 className="font-semibold text-primary mb-2">Lowest Commission Promised!</h6>
                      <p>
                        We believe in fair business. Keep more of your profits with the lowest commission rates in the gifting industry—guaranteed.
                      </p>
                    </div>
                  </div>
                  <div className="div2 bg-white sm:p-4 shadow-md rounded-lg">
                    <div>
                      <img src="/icons/infinity (1).svg" alt="" width="50px" className=" p-1 b-2 border-acent  rounded my-2"  />
                      <h6 className="font-semibold text-primary mb-2">Unlimited Products</h6>
                      <p>
                       No caps, no limits. Upload and sell as many products as you want with full freedom to showcase your entire collection..
                      </p>
                    </div>
                  </div>
                  <div className="div3 bg-white sm:p-4 shadow-md rounded-lg">
                    <div>
                      <img src="/icons/social-media-attraction.svg" alt="" width="50px" className=" p-1 b-2 border-acent  rounded my-2"  />
                      <h6 className="font-semibold text-primary mb-2">Broad Reach</h6>
                      <p>
                        Get discovered by thousands of gift buyers across India. Expand your reach beyond local markets with our platform's growing audience.
                      </p>
                    </div>
                  </div>
                  <div className="div4 bg-white sm:p-4 shadow-md rounded-lg">
                    <div>
                      <img src="/icons/business-team.svg" alt="" width="50px" className=" p-1 b-2 border-acent  rounded my-2"  />
                      <h6 className="font-semibold text-primary mb-2">For small, Medium to Large Business</h6>
                      <p>
                        Whether you're just starting or scaling up, Aabhaar supports businesses of all sizes with flexible tools and tailored support.
                      </p>
                    </div>
                  </div>
                  <div className="div5 bg-white sm:p-4 shadow-md rounded-lg">
                    <div>
                    <img src="/icons/customer-support (1).svg" alt="" width="50px" className=" p-1 b-2 border-acent  rounded my-2"  />
                      <h6 className="font-semibold text-primary mb-2">Support at Every Step</h6>
                      <p>
                        From onboarding to order fulfillment—we’re with you. Get personalized help, 24/7 dedicated support, and resources whenever you need them.
                      </p>
                    </div>
                  </div>
                  <div className="div6 bg-white sm:p-4 shadow-md rounded-lg">
                    <div>
                      <img src="/icons/promotion (1).svg" alt="" width="50px" className=" p-1 b-2 border-acent  rounded my-2"  />
                      <h6 className="font-semibold text-primary mb-2">Marketing and Promotions</h6>
                      <p>
                        We run organic and paid campaigns to highlight your brand, feature your bestsellers, and drive continuous visibility and engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="bg-dein">

<img src="/icons/wave-bg.svg" alt="" className="absolute -z-10 sm:mt-22 opacity-50" />

{/* <img className="absolute -z-10 opacity-50 w-full" src="/icons/blob-scatter-haikei.svg" alt="" /> */}

        <div className="Social-section text-center my-4 p-4">
          <div className="social-media-invite m-5 p-3">
            <h3 className="text-3xl font-semibold text-slate-700 my-3">
              Connect with Us on Social Media!
            </h3>
            <p className="text-secondary my-3">
              Stay updated, get inspired, and be part of a growing community of
              successful vendors.
            </p>

            <div className="icon-container">
              <a
                className="social-icon-link"
                target="_blank"
                href="https://www.instagram.com/aabhara.india"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                className="social-icon-link"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61578000454740"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="social-icon-link"
                target="_blank"
                href="https://www.youtube.com/@aabhaarIndia"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>


<section id="query-section">

   <div  className="final-cta my-4 p-2">
                <div id="blob" className="item-container text-light">


                    <h2 className="text-center pb-3 fw-bold text-4xl font-semibold text-primary">Ready to Grow Your Business?</h2>
                    <h6 className="text-center text-2xl font-semibold text-slate-700">But still have <span className="text-primary"> Query?</span> Fill out the Form</h6> 
      

                </div>
                <div id="form" className="md:w-1/3 w-full m-auto p-3">
                    <div className="form">
                        <h5 className="text-center text-lg text-slate-600 font-bold">Send Us Your Query</h5>

                        <form onSubmit={queryFormSubmit}  className="px-5 py-3" action="/leadform" method="POST">
                        
       
                            <div className="p-2">
                                <input placeholder="Full Name*" required type="text" name="fullname"  onChange={handleChange} value={queryForm.fullname} className="input-cta"/>

                            </div>
                            <div className="p-2">
                                <input placeholder="Email*" type="email" required name="email" onChange={handleChange} value={queryForm.email} className="input-cta"/>

                            </div>
                       
                            <div className="p-2">
                                <input placeholder="Subject*" type="text" required name="subject" onChange={handleChange} value={queryForm.subject} className="Subject of Query input-cta"/>

                            </div>
       

                            <div>

                             
                                <div className="p-2">
                                    <textarea placeholder="Query*" rows="4" required name="query" onChange={handleChange} value={queryForm.query}
                                        className="input-cta"></textarea>

                                </div>
                            </div>

                            <br />

                            <div className="text-center">
                                <div className="btn-container">
                                    <button className="border-2 bg-primary border-primary p-2 px-5 rounded-xl outline-0 focus:outline-none cursor-pointer  text-white">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        </div>
                        </div>
                        </div>
</section>
</div>

        <section></section>
        <section className=" bg-gradient-to-br bg-secondary bg-gradient-to-br from-[#E47119] text-white">
          <div className="custom-shape-divider-top-1731587920 mb-10">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          {/* <div className="container mx-auto p-4 md:p-12"> */}
          <h2 className="text-3xl text-center font-bold p-3 my-5">
            Ready to Transform Your Business?
          </h2>
          <p className="text-center">
            Join our growing community of successful vendors and start reaching
            more customers today!
          </p>

          <div className="btn-container text-center my-5">
              <Link to="/vendor/auth/signup">
            <button className="border-slate-50 border-2 p-3 px-5 rounded-2xl my-5 m-2 font-semibold text-primary bg-slate-50 cursor-pointer focus:outline-none ">
              Start Selling <ArrowRight className="inline" />
            </button>
              </Link>
              <a href="#query-section">
            <button className="border-slate-100 border-2 p-3 px-5 rounded-2xl my-5 m-2 font-semibold  cursor-pointer focus:outline-none ">
              Still have Query <MessageCircle className="inline" />
            </button>
              </a>
          </div>

          <div className="">
            <p className="text-orange-200 text-sm text-center pb-8">
              ✓ 0% Commission* ✓ No setup fees ✓ ₹0 Monthly Cost ✓ 24/7 support
            </p>
          </div>

      
        </section>

        <footer className="bg-[#2C313C] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="lg:text-sm text-gray-400">
                <img src="/Logo/aabhaar.png" alt="logo" width="180px" />
                <div>
                 
                  {/* <p className="text-gray-400 mb-4">
                    Empowering sellers to grow and reach broad audience.
                  </p> */}
                  <div className="flex space-x-4 ">
                    
                    <Instagram className="h-10 w-10 text-[#E47119] bg-white m-3 p-2 rounded-full cursor-pointer" />
                    <Facebook className="h-10 w-10 text-[#E47119] bg-white m-3 p-2 rounded-full cursor-pointer" />
                    <Youtube className="h-10 w-10 text-[#E47119] bg-white m-3 p-2 rounded-full cursor-pointer" />
                  </div>
                </div>
              </div>
                 
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-[#E47119] transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-[#E47119] transition-colors">Don't have GST?</a></li>
                <li><a href="#" className="hover:text-[#E47119] transition-colors">Documentation</a></li>
                {/* <li><a href="#" className="hover:text-[#E47119] transition-colors">Community</a></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-[#E47119] transition-colors"><Link to="mailto:support@aabhaarindia.com"> Contact Us <br />
                <small>support@aabhaarindia.com</small></Link></li>
                <li><a href="#" className="hover:text-[#E47119] transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-[#E47119] transition-colors">Privacy Policy</a></li>
                {/* <li><a href="#" className="hover:text-[#E47119] transition-colors">Community</a></li> */}
              </ul>
            </div>
            </div>
          </div>
               <div className="border-t text-sm  border-gray-800 mt-8 pt-8 text-center text-white">
            <p>&copy; 2025 Aabhaar India. All rights reserved. Built with ❤️ for <img src="/src/assets/flag.png" alt="flag" width="20px" className="inline" />.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
