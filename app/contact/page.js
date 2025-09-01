import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen  bg-gray-50 text-black flex flex-col items-center justify-center p-6">
      <div className="text-center  py-9 max-w-3xl min-h-[40vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-5xl font-semibold mb-4 lg:mb-6">Let's Talk Bullion Business</h2>
        <p className="text-lg lg:text-xl text-gray-600">Whether you're scaling your coin shop or managing global bullion trades, we'd love to hear from you.</p>
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 py-9">
        
        {/* Left Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Your business name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Tell us about your bullion business needs..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Direct Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="h-4 w-4" />
                </span>
                <p className="text-gray-600">support@verifiedcrm.com</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="h-4 w-4" />
                </span>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Demo Box */}
          <div className="bg-orange-50 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">
              Ready to see VerifiedCRM in action?
            </h2>
            <p className="text-gray-600 mb-4">
              Schedule a personalized demo and discover how our platform can
              transform your bullion business.
            </p>
            <button className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
