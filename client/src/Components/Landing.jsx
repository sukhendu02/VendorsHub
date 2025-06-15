import React from "react";
import { Link } from "react-router-dom";
import "../Landing.css";

export default function Landing() {
  return (
    <>
      <div className="w-full">
        <nav className="flex h-fit items-center w-full flex-row justify-evenly p-2">
          <div>
            <Link className="text-2xl font-bold" to="/">
              AABHARA
            </Link>
          </div>
          <div className="flex">
            <Link
              className="nav-links px-2 m-2 text-primary font-semibold"
              to="/Home"
            >
              Home
            </Link>
            <Link
              className="nav-links px-2 m-2 text-primary font-semibold"
              to="/about"
            >
              About
            </Link>
            <Link
              className="nav-links px-2 m-2 text-primary font-semibold"
              to="/contact"
            >
              Contact
            </Link>
          </div>

          <Link to="/vendor/auth/signup">
          <button className="p-2 px-4 rounded-xl font-semibold bg-primary h-fit text-white ">
            Get Started
          </button>
          </Link>
        </nav>

        {/* <div className="landing"> */}
        <div className="hero-section h-screen text-center  w-full">
          <lottie-player
            src="/images/Infinite Loader (1).json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>

          <div>
            <h1 className="font-bold text-4xl">
              Start Selling and Growing with Us!
            </h1>
          </div>
          <h6 className="text-slate-500 font-semibold pt-4">
            Join our gifting marketplace where thousands of customers are
            looking for products like yours.
          </h6>

          <div className="action-btn-container">
            <a href="#explore">
              {" "}
              <button className="action-btn cursor-pointer"> Explore More</button>
            </a>
          </div>
        </div>


{/* ------------------------------------------- */}
        <div className="what-we-do-container">
          <div className="what-we-do">
            <div className="heading text-center m-4">
              <h3 className="text-center text-3xl font-bold">
                What <span className="text-acent">We</span> Do
              </h3>
              <p className="my-4 text-lg text-slate-500">
                Empowering vendors to reach a
                {/* <img width="40px" src="/images/gift-box.png" alt="" /> */}
                gifting-focused audience effortlessly
              </p>
            </div>

            <div className="some-body">
              <div className="div1">
                {/* <img src="/images/gift.svg" alt="" /> */}
                <h6 className="text-lg font-semibold">Targeted Audience</h6>
                <p>
                  Reach a dedicated audience searching for unique gifts for
                  every occasion.
                </p>
              </div>
              <div className="div2">
                {/* <img src="/images/boost.svg" alt="" /> */}
                <h6 className="text-lg font-semibold">Boost Your Visibility</h6>
                <p>
                  Get featured in our marketplace promotions and social media
                  campaigns.
                </p>
              </div>
              <div className="div3">
                {/* <img src="/images/business (1).svg" alt="" /> */}
                <h6 className="text-lg font-semibold">Support for All Businesses</h6>
                <p>
                  Whether you're an individual or a large enterprise, we help
                  you succeed.
                </p>
              </div>
              <div className="div4">
                {/* <img src="/images/growth.svg" alt="" /> */}
                <h6 className="text-lg font-semibold">Grow Your Business</h6>
                <p>
                  Access detailed analytics and insights to optimize your sales
                  strategy.
                </p>
              </div>
              <div className="div5">
                {/* <img src="/images/online-store.svg" alt="" /> */}
                <h6 className="text-lg font-semibold">Simplify Selling</h6>
                <p>
                  Set up your online store in minutes with our user-friendly
                  tools.
                </p>
              </div>
              <div className="div6">
                {/* <img src="/images/secure-payment.svg" alt="" /> */}
                <h6 className="text-lg font-semibold">Secure & Fast Payments</h6>
                <p>Enjoy transparent payment processing with no hidden fees.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
        <div id="pitch-sec" className="pitch-section flex mt-5 mb-3">
            <div className="pitch-section-1 flex justify-center  items-center w-1/2 mr-3">

                <h3 className="text-3xl font-semibold">Why <span className="text-acent">partner</span> with us?</h3>
            </div>
            <div className="features-us">
                <div className="parent">
                    <div className="div1">

                        <div>
                            <h6>Lowest Commission Promised!</h6>
                            <p>Maximize your profits with low commission rates that prioritize your growth</p>
                        </div>
                    </div>
                    <div className="div2">
                        <div>
                            <h6>Unlimited Products</h6>
                            <p>No limit of the products. Setup your store as you want.</p>
                        </div>
                    </div>
                    <div className="div3">
                        <div>
                            <h6>Broad Reach</h6>
                            <p>Expand your reach to thousands of customers looking for unique gifts for every occasion.
                            </p>
                        </div>
                    </div>
                    <div className="div4">
                        <div>
                            <h6>For small, Medium to Large Business</h6>
                            <p>Whether you’re just starting or are an established business we are here for you!</p>
                        </div>
                    </div>
                    <div className="div5">
                        <div>
                            <h6>Support at Every Step</h6>
                            <p>From onboarding to selling, our dedicated vendor support team is here for you.</p>
                        </div>
                    </div>
                    <div className="div6">
                        <div>
                            <h6>Easy-to-Use Platform</h6>
                            <p>Start selling quickly with our user-friendly setup and management tools, perfect for any
                                skill level.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>






      </div>
    </>
  );
}
