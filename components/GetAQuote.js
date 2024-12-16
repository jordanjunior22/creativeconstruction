// components/GetQuoteForm.js
"use client"
import React, { useState } from 'react';

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your API or a backend service
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-xl mx-auto text-white p-8 bg-primary rounded-lg shadow-lg mt-20 mb-20">
      <h2 className="text-2xl font-semibold text-center mb-6">Get a Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium ">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 text-gray-900 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium ">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-gray-900 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-medium ">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-900 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium ">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe your project in detail..."
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetQuoteForm;
