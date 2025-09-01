import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-bg via-light-bg to-light-gray text-dark-text flex flex-col items-center justify-center p-6 relative">
      {/* Background gradients to match theme */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(200,162,74,0.06),transparent_70%)]" />
      <div className="text-center py-9 max-w-3xl min-h-[40vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-5xl font-semibold mb-4 lg:mb-6 text-dark-text">Let&apos;s Talk Bullion Business</h2>
        <p className="text-lg lg:text-xl text-dark-text-muted">Whether you&apos;re scaling your coin shop or managing global bullion trades, we&apos;d love to hear from you.</p>
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 py-9">
        
        {/* Left Form */}
        <div className="bg-white-bg rounded-xl border border-light-border p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-dark-text">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 border border-light-border rounded-lg bg-white-bg text-dark-text focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <input
                type="text"
                placeholder="Your business name"
                className="w-full px-4 py-2 border border-light-border rounded-lg bg-white-bg text-dark-text focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-light-border rounded-lg bg-white-bg text-dark-text focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full px-4 py-2 border border-light-border rounded-lg bg-white-bg text-dark-text focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Tell us about your bullion business needs..."
              className="w-full px-4 py-2 border border-light-border rounded-lg bg-white-bg text-dark-text focus:outline-none focus:ring-2 focus:ring-gold-400"
            ></textarea>
            <button
              type="submit"
              className="w-full btn-base btn-primary py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white-bg rounded-xl border border-light-border p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-dark-text">Direct Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-gold-400/20 p-3 rounded-lg border border-gold-400/30">
                  <Mail className="h-4 w-4 text-gold-400" />
                </span>
                <p className="text-dark-text-muted">support@verifiedcrm.com</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-gold-400/20 p-3 rounded-lg border border-gold-400/30">
                  <Phone className="h-4 w-4 text-gold-400" />
                </span>
                <p className="text-dark-text-muted">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Demo Box */}
          <div className="bg-white-bg rounded-xl border border-light-border p-6 shadow-md bg-gradient-to-br from-gold-50 to-white-bg">
            <h2 className="text-lg font-semibold mb-2 text-dark-text">
              Ready to see VerifiedCRM in action?
            </h2>
            <p className="text-dark-text-muted mb-4">
              Schedule a personalized demo and discover how our platform can
              transform your bullion business.
            </p>
            <button className="btn-base btn-primary px-5 py-2 rounded-lg transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
