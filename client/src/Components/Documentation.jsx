import React, { useState, useEffect } from 'react';
import { Search,NotepadText,BadgeIndianRupee,FileSearch2  , ChevronRight,Sparkles ,Gift,Star,Target, Book, Code, Lightbulb, Settings, ShoppingBag, Truck, FileCheck, AlertCircle,Rocket , Menu} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ReactMarkdown from "react-markdown";

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

const [mobileMenuOpen, setMobileMenuOpen]= useState(false);
const [openSubmenu, setOpenSubmenu] =useState(null)
  const sections = [
    {
      title: 'Getting Started',
      icon: Book,
      items: [
        {
          id: 'introduction',
          title: 'Introduction',
          content:

(<>


  <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border bg-white dark:bg-neutral-900 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-orange-900/20 dark:via-neutral-900 dark:to-neutral-800" />
        <div className="relative p-10 sm:p-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            👋 Welcome to Aabhaar Vendor Handbook
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            <span className="font-semibold text-orange-600">Aabhaar</span> is
            your modern gifting marketplace, connecting passionate creators and
            brands with customers who value{" "}
            <strong>thoughtful, premium, and personalized gifts</strong>.  
            This handbook will guide you through our platform — who we are, what
            we do, and why joining us empowers your growth.
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {/* Who We Are */}
        <div className="group rounded-xl border bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all">
          <div className="flex items-center gap-3">
            <div className="size-11 flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 shadow-sm">
              <Sparkles className="size-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Who We Are</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            A curated gifting marketplace designed for vendors who want to reach
            a wider audience with unique, high-quality products.
          </p>
        </div>

        {/* What We Do */}
        <div className="group rounded-xl border bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all">
          <div className="flex items-center gap-3">
            <div className="size-11 flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 shadow-sm">
              <Gift className="size-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">What We Do</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            We power your storefront, handle secure payments, logistics,
            marketing support, and ensure your products reach the right
            customers.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="group rounded-xl border bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all">
          <div className="flex items-center gap-3">
            <div className="size-11 flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 shadow-sm">
              <Star className="size-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Why Join Us</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Lowest commissions, unlimited listings, free promotions, fast
            payouts, and expert support — so you can focus on creating.
          </p>
        </div>

        {/* Our Aim */}
        <div className="group rounded-xl border bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all">
          <div className="flex items-center gap-3">
            <div className="size-11 flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 shadow-sm">
              <Target className="size-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Our Aim</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            To simplify gifting for everyone while giving vendors a professional,
            profitable space to scale their business with confidence.
          </p>
        </div>
      </div>

      {/* Callout */}
      <div className="mt-12 flex items-start gap-4 rounded-xl border bg-white dark:bg-neutral-900 p-6 shadow-sm">
        <span className="px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/40 rounded-full">
          Vendor-first
        </span>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="font-semibold text-orange-600 dark:text-orange-400">
            Built for growth.
          </span>{" "}
          Transparent fees, powerful tools, and real marketing support — so you
          can sell more with less effort.
        </p>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        Next: Onboarding → Store Setup → Listings → Orders → Shipping → Payouts
        → Compliance → Growth
      </p>
    </div>
  </>),


        },
        {
          id: 'quick-start',
          title: 'Quick Start',
          content: (
      <>
        
<div class="max-w-4xl mx-auto space-y-10">
  
  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      🚀 Quick Start Guide
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Get your store live on Aabhaar in just a few simple steps
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">
    
    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Sign Up</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Create your vendor account by filling out the form and accepting our terms.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Verify</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Go to Getting Started → Vendor Verification and complete the process.

          Submit KYC and bank details. 
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Store Setup</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Add your store logo, banner, and start listings product with shipping details.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Start Selling</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Receive orders, ship products, and track payouts directly from your dashboard.
        </p>
      </div>
    </div>

  </div>
</div>
      </>
    ),
        },
        {
          id: 'Onboarding',
          title: 'Onboarding',
          content: (<>
<div class="max-w-4xl mx-auto space-y-10">
  
  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      📝 Vendor Onboarding
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Complete your onboarding to unlock selling on Aabhaar. Follow these simple steps.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">
    
    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Profile Setup</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Add your store name, contact info, and a professional logo/banner to personalize your presence.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">KYC & Compliance</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Upload GST, PAN, and ID proofs. This ensures trust and transparency on the platform.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Bank Details</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Securely link your bank account to receive fast payouts directly from Aabhaar.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Approval</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Our team verifies your documents within <strong>48 hours</strong>. Once approved, you’re ready to sell.
        </p>
      </div>
    </div>

  </div>
</div>
</>),


          
        },
        {
          id: 'Store-Setup',
          title: 'Store Setup',
          content: (<>

<div class="max-w-4xl mx-auto space-y-10">
  
  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
       Store Setup
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Build a professional storefront that attracts customers and builds trust.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">
    
    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Store Profile</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Add your store name, description, logo, and banner image. This is your identity — keep it professional and inviting.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Business Information</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Fill in your address, contact number, and email so customers can trust your store’s authenticity.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Policies</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Define your return, refund, and shipping policies clearly to build customer confidence.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Shipping & Delivery</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Configure your shipping methods, delivery zones, and charges. Customers love clarity on delivery times and costs.
        </p>
      </div>
    </div>

    {/* <!-- Step 5 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        5
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Payment Settings</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Connect your preferred payment method to receive payouts quickly and securely.
        </p>
      </div>
    </div>

  </div>
</div>
</>)


          
        },
      ]
    },
  
{
  title: 'Selling Products',
  icon: Rocket,
  items: [
    {
      id: 'Product-listing',
      title: 'Product Listing',
      content: (<>
      : `
<div class="max-w-4xl mx-auto space-y-10">
  
  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      Product Listing Guide
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Showcase your products in the best way to increase visibility and conversions.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">

    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Add New Product</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Go to your dashboard and select <strong>“Add Product”</strong>. This opens the product creation form.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Basic Details</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Enter product name, category, and tags. Use keywords customers are likely to search for.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Product Images</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Upload high-quality images (min. 1000x1000px). Add multiple angles and lifestyle shots to build trust.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Description</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Write a clear, engaging product description. Highlight features, benefits, and use cases. Use bullet points for readability.
        </p>
      </div>
    </div>

    {/* <!-- Step 5 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        5
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Pricing & Inventory</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Set your product price, sale price (if any), and stock quantity. Accurate inventory avoids overselling.
        </p>
      </div>
    </div>

    {/* <!-- Step 6 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        6
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Shipping Information</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Add product weight, dimensions, and shipping class. This ensures accurate delivery charges and timelines.
        </p>
      </div>
    </div>

    {/* <!-- Step 7 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        7
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Publish</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Review all details and click <strong>Publish</strong>. Your product will now be live and visible to customers.
        </p>
      </div>
    </div>

  </div>

  {/* <!-- Pro Tips --> */}
  <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 border border-orange-200 dark:border-gray-600 shadow">
    <h3 class="text-lg font-semibold text-[#E47119] mb-2">💡 Pro Tips</h3>
    <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
      <li>Use SEO-friendly product titles (include occasion, style, or material).</li>
      <li>Showcase at least 3-5 product images per item.</li>
      <li>Keep descriptions simple, scannable, and benefit-focused.</li>
      <li>Update inventory regularly to maintain buyer trust.</li>
      <li>Use promotional pricing to highlight bestsellers.</li>
    </ul>
  </div>

</div>

      </>),
        
    },
    {
      id: 'Order-management',
      title: 'Order management',
      content: 
        (<>
        
<div class="max-w-4xl mx-auto space-y-10">

  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
       Order Management
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Stay on top of your sales with smooth order processing — from confirmation to delivery.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">

    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Order Notification</h3>
        <p class="text-gray-600 dark:text-gray-400">
          When a customer places an order, you’ll receive a real-time notification in your dashboard and email.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Review Order</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Check product details, quantity, delivery address, and payment confirmation before proceeding.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Confirm & Process</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Mark the order as <strong>Confirmed</strong>. Start preparing the product for packaging and shipment.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Packaging & Labeling</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Pack items securely with branding if possible. Print/download the shipping label and attach it properly.
        </p>
      </div>
    </div>

    {/* <!-- Step 5 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        5
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Shipping</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Handover the package to the courier partner. Update the order status to <strong>Shipped</strong> with tracking ID.
        </p>
      </div>
    </div>

    {/* <!-- Step 6 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        6
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Delivery & Completion</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Once delivered, mark the order as <strong>Completed</strong>. Payouts will be processed based on your settlement cycle.
        </p>
      </div>
    </div>

  </div>

  {/* <!-- Pro Tips --> */}
  <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 
              dark:from-gray-800 dark:to-gray-700 border border-orange-200 dark:border-gray-600 shadow">
    <h3 class="text-lg font-semibold text-[#E47119] mb-2">💡 Pro Tips</h3>
    <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
      <li>Confirm orders within <strong>12 hours</strong> for faster delivery.</li>
      <li>Always double-check packaging to avoid returns due to damage.</li>
      <li>Keep customers updated with tracking details to reduce inquiries.</li>
      <li>Respond quickly to customer queries for higher store ratings.</li>
      <li>Review sales reports to identify top-performing products.</li>
    </ul>
  </div>

</div>
        </>),
    },
    {
      id: 'Packaging-and-labeling',
      title: 'Packaging & labeling ',
      content: 
       (<>
       <div class="max-w-4xl mx-auto space-y-10">

  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      Packaging & Labeling
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Great packaging protects products, reduces returns, and creates a memorable unboxing experience for your customers.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">

    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Choose the Right Packaging</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Select sturdy boxes or bubble mailers based on product type. Fragile items need extra cushioning with bubble wrap, foam, or packing peanuts.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Secure the Product</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Wrap items tightly to avoid movement inside the package. Seal with strong tape on all edges to prevent tampering or accidental opening.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Add Branding (Optional)</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Use branded stickers, thank-you cards, or custom tape to enhance your customer’s unboxing experience and build store recall.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Print & Attach Shipping Label</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Download the order’s shipping label from your dashboard. Print on A6/A4 paper, place it in a label pouch or tape securely to the package surface.
        </p>
      </div>
    </div>

    {/* <!-- Step 5 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        5
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Final Check</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Ensure package weight/dimensions match your shipping entry. Double-check label clarity (barcode visible) and verify the order ID.
        </p>
      </div>
    </div>

  </div>

  {/* <!-- Pro Tips --> */}
  <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 
              dark:from-gray-800 dark:to-gray-700 border border-orange-200 dark:border-gray-600 shadow">
    <h3 class="text-lg font-semibold text-[#E47119] mb-2">💡 Pro Tips</h3>
    <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
      <li>Use eco-friendly packaging materials whenever possible.</li>
      <li>Keep fragile items marked with “Handle with Care” stickers.</li>
      <li>Avoid excessive empty space — it increases shipping cost and risk of damage.</li>
      <li>Always test adhesive strength of tape before bulk use.</li>
      <li>Consider adding a personalized thank-you note — customers love the extra touch.</li>
    </ul>
  </div>

</div>
       </>),
    },
    {
      id: 'Shipping',
      title: 'Shipping',
      content: (<>
      
<div class="max-w-4xl mx-auto space-y-10">

  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      Shipping
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Ensure smooth, timely, and trackable deliveries by following these best practices for shipping.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">

    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Prepare the Shipment</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Double-check packaging, verify the label is securely attached, and ensure the order ID and address are correct.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Courier Pickup / Drop-off</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Hand over the package to your assigned courier partner or drop it off at the nearest hub. Always collect proof of pickup.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Update Tracking Details</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Enter the tracking ID into your dashboard so customers can follow their shipment in real time.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mark as Shipped</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Once the courier has accepted the package, update the order status to <strong>Shipped</strong> in your system.
        </p>
      </div>
    </div>

    {/* <!-- Step 5 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        5
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Monitor the Delivery</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Track shipments regularly, especially for high-value items. If delays occur, proactively inform the customer to build trust.
        </p>
      </div>
    </div>

  </div>

  {/* <!-- Pro Tips --> */}
  <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 
              dark:from-gray-800 dark:to-gray-700 border border-orange-200 dark:border-gray-600 shadow">
    <h3 class="text-lg font-semibold text-[#E47119] mb-2">💡 Pro Tips</h3>
    <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
      <li>Always share the tracking number with customers immediately.</li>
      <li>Use tamper-proof packaging for expensive or fragile products.</li>
      <li>Schedule courier pickups early in the day to avoid delays.</li>
      <li>For bulk orders, separate packages clearly and label them correctly.</li>
      <li>Maintain a log of all shipments for easier dispute resolution.</li>
    </ul>
  </div>

</div>
</>),
       
    }
  ]
},
{
  title: 'Payments',
  icon: BadgeIndianRupee  ,
  items: [
    {
      id: 'Returns-and-refund',
      title: 'Returns & Refunds',
      content: (<>
      
      
<div class="max-w-4xl mx-auto space-y-10">

  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      Returns & Refunds
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Handling returns and refunds effectively builds trust and encourages repeat customers.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">

    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Define Your Policy</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Clearly state return eligibility (e.g., within 7 days, unused items, original packaging). Publish this in your store policies.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Receive Return Request</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Customers submit a return request with reason and order details. Review requests promptly to avoid delays.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Approve & Guide the Return</h3>
        <p class="text-gray-600 dark:text-gray-400">
          If eligible, share instructions for package return and provide a return shipping label (if applicable).
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Inspect Returned Item</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Once received, inspect the product’s condition. Approve refund only if it matches your return policy.
        </p>
      </div>
    </div>

    {/* <!-- Step 5 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        5
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Issue Refund</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Process refunds quickly through the same payment method. Update order status to <strong>Refunded</strong>.
        </p>
      </div>
    </div>

  </div>

  {/* <!-- Pro Tips --> */}
  <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 
              dark:from-gray-800 dark:to-gray-700 border border-orange-200 dark:border-gray-600 shadow">
    <h3 class="text-lg font-semibold text-[#E47119] mb-2">💡 Pro Tips</h3>
    <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
      <li>Keep policies transparent — unclear returns often cause disputes.</li>
      <li>Offer replacements or exchanges to reduce refund losses.</li>
      <li>Handle refunds quickly; delays lower customer trust.</li>
      <li>Track frequent return reasons — it helps improve product quality.</li>
    </ul>
  </div>

</div>
</>),
     
    },
    {
      id: 'Payouts',
      title: 'Commission & Payouts',
      content:  (<>
      
      <div class="max-w-4xl mx-auto space-y-10">

  {/* <!-- Heading --> */}
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
       Commissions & Payouts
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      Understand how commissions are charged and how you receive payouts for your sales.
    </p>
  </div>

  {/* <!-- Steps Grid --> */}
  <div class="grid gap-6 md:grid-cols-2">

    {/* <!-- Step 1 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        1
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Commission Structure</h3>
        <p class="text-gray-600 dark:text-gray-400">
          A small percentage of each sale is deducted as platform commission. The remaining balance is available for payout.
        </p>
      </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        2
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Invoice & Fees</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Each order generates an invoice showing sale amount, commission, and net earnings. Fees (if any) are also visible.
        </p>
      </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        3
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Payout Schedule</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Payouts are released periodically (e.g., weekly/bi-weekly). Ensure your bank details are correct to avoid delays.
        </p>
      </div>
    </div>

    {/* <!-- Step 4 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        4
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Withdraw Earnings</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Once available, request a payout from your dashboard. Funds are transferred directly to your linked account.
        </p>
      </div>
    </div>

    {/* <!-- Step 5 --> */}
    <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
        5
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Track Your Earnings</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Use the earnings dashboard to view sales, commissions, and pending payouts at any time.
        </p>
      </div>
    </div>

  </div>

  {/* <!-- Pro Tips --> */}
  <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 
              dark:from-gray-800 dark:to-gray-700 border border-orange-200 dark:border-gray-600 shadow">
    <h3 class="text-lg font-semibold text-[#E47119] mb-2">💡 Pro Tips</h3>
    <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
      <li>Keep your bank account details up to date for smooth payouts.</li>
      <li>Track your commission deductions to calculate net profit margins.</li>
      <li>Plan inventory around payout schedules for better cash flow.</li>
      <li>Use detailed invoices for bookkeeping and tax purposes.</li>
    </ul>
  </div>

</div>
</>),
        
    }
  ]
},
// {
//   title: 'General',
//   icon: FileSearch2 ,  
//   items: [
//     {
//       id: 'Guide-for-Non-Registered-Vendors',
//       title: 'Guide for Non-Registered Vendors',
//       content:(<>
      
//       <div class="max-w-4xl mx-auto space-y-10">

//   {/* <!-- Heading --> */}
//   <div class="text-center">
//     <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
//       💰 Commissions & Payouts
//     </h1>
//     <p class="mt-2 text-gray-600 dark:text-gray-400">
//       Understand how commissions are charged and how you receive payouts for your sales.
//     </p>
//   </div>

//   {/* <!-- Steps Grid --> */}
//   <div class="grid gap-6 md:grid-cols-2">

//     {/* <!-- Step 1 --> */}
//     <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
//       <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
//                   bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
//         1
//       </div>
//       <div>
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Commission Structure</h3>
//         <p class="text-gray-600 dark:text-gray-400">
//           A small percentage of each sale is deducted as platform commission. The remaining balance is available for payout.
//         </p>
//       </div>
//     </div>

//     {/* <!-- Step 2 --> */}
//     <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
//       <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
//                   bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
//         2
//       </div>
//       <div>
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Invoice & Fees</h3>
//         <p class="text-gray-600 dark:text-gray-400">
//           Each order generates an invoice showing sale amount, commission, and net earnings. Fees (if any) are also visible.
//         </p>
//       </div>
//     </div>

//     {/* <!-- Step 3 --> */}
//     <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
//       <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
//                   bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
//         3
//       </div>
//       <div>
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Payout Schedule</h3>
//         <p class="text-gray-600 dark:text-gray-400">
//           Payouts are released periodically (e.g., weekly/bi-weekly). Ensure your bank details are correct to avoid delays.
//         </p>
//       </div>
//     </div>

//     {/* <!-- Step 4 --> */}
//     <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
//       <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
//                   bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
//         4
//       </div>
//       <div>
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Withdraw Earnings</h3>
//         <p class="text-gray-600 dark:text-gray-400">
//           Once available, request a payout from your dashboard. Funds are transferred directly to your linked account.
//         </p>
//       </div>
//     </div>

//     {/* <!-- Step 5 --> */}
//     <div class="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
//       <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl 
//                   bg-gradient-to-r from-[#E47119] to-[#ffb37f] text-white font-bold shadow-md">
//         5
//       </div>
//       <div>
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Track Your Earnings</h3>
//         <p class="text-gray-600 dark:text-gray-400">
//           Use the earnings dashboard to view sales, commissions, and pending payouts at any time.
//         </p>
//       </div>
//     </div>

//   </div>

//   {/* <!-- Pro Tips --> */}
//   <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 
//               dark:from-gray-800 dark:to-gray-700 border border-orange-200 dark:border-gray-600 shadow">
//     <h3 class="text-lg font-semibold text-[#E47119] mb-2">💡 Pro Tips</h3>
//     <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
//       <li>Keep your bank account details up to date for smooth payouts.</li>
//       <li>Track your commission deductions to calculate net profit margins.</li>
//       <li>Plan inventory around payout schedules for better cash flow.</li>
//       <li>Use detailed invoices for bookkeeping and tax purposes.</li>
//     </ul>
//   </div>

// </div>
// </>),
//     },
//     {
//       id: 'Payouts',
//       title: 'Commission & Payouts',
//       content: `
//         # Order Processing Workflow

//         Understanding the complete order fulfillment process.

//         ## Order States

//         1. Pending
//         2. Confirmed
//         3. Processing
//         4. Shipped
//         5. Delivered

//         ## Processing Timeline

//         - Order confirmation: Within 12 hours
//         - Processing start: Within 24 hours
//         - Shipping: Within 48 hours
//         - Delivery tracking: Real-time updates
//       `
//     }
//   ]
// },




  ];

  const getContent = () => {
    for (const section of sections) {
      const item = section.items.find(item => item.id === activeSection);
      if (item) {
        return item;
      }
    }
    return sections[0].items[0];
  };

  const currentContent = getContent();

  return (
  <>
  <div className="sidemenu h-fit w-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 lg:hidden">
    


  <div className="relative lg:hidden ">
      {/* Hamburger Button */}
      <button
        className="p-2 text-gray-700 dark:text-gray-200 "
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full text-sm bg-white dark:bg-gray-900 shadow-md z-50">
          <ul className="flex  divide-y divide-gray-200 dark:divide-gray-700">
            {sections.map((section, index) => (
              <li key={index}>
                {/* Main Menu */}
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 dark:text-gray-100 font-medium"
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === index ? null : index)
                  }
                >
                  {section.title}
                  <span>{openSubmenu === index ? "▲" : "▼"}</span>
                </button>

                {/* Submenu */}
                {openSubmenu === index && (
                  <ul className="bg-gray-50 dark:bg-gray-800 flex flex-col">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`#${item.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-6 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>


      </div>
 
    <div className="min-h-screen flex">
 




<div className="min-h-screen w-full flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-72 h-screen sticky  backdrop-blur-lg top-0 border-r bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 p-4 overflow-y-auto hidden lg:block">
        {/* Search */}
        <div className="mb-6 sticky top-0 backdrop-sepia-100 ">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav>
          {sections.map((section, index) => {
            const Icon = section.icon || Book;
            return (
              <div key={index} className="mb-6">
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <h2 className="text-sm font-semibold ml-2">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={`#${item.id}`}
                        onClick={() => {
                          setActiveSection(item.id);
                          window.history.pushState(null, "", `#${item.id}`);
                        }}
                        className={`block py-2 px-3 text-sm rounded-md ${
                          activeSection === item.id
                            ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>
      

            {/* Main Content */}
      
      <div className="flex-1 px-8 bg-gradient">
        <article className="prose dark:prose-invert max-w-none">
{/*           <h1 className="text-3xl font-bold mb-8">{currentContent.title}</h1> */}
          <div className="space-y-4" >
{/*             {currentContent.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.replace('- ', '')}</li>;
              }
              if (line.match(/^\d+\./)) {
                return <li key={index} className="ml-4">{line.replace(/^\d+\./, '')}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }


              return <p key={index} className="text-gray-600 dark:text-gray-400 "  >{line}</p>;
            })} */}
{/*             <ReactMarkdown className="text-gray-600 dark:text-gray-400"> */}
                {currentContent.content}
{/* </ReactMarkdown> */}
          </div>
        </article>
      </div>
    </div>



    </div>



 </>


  );
}
