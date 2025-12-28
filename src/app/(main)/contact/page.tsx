import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">Contact Us</h1>

      <p className="mb-4 text-center">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <form className="p-6 space-y-4 bg-white rounded shadow-md">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            placeholder="Your message..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 font-semibold text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center text-gray-600">
        <p>Email: contact@yourdomain.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default ContactPage;
