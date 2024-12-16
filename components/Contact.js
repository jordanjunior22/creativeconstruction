"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="relative py-20 bg-neutral text-gray-900 border border-red-300">
      <div className="absolute inset-0">
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: "url('/contact-bg.jpg')" }}
        ></div>
        <div className="bg-black opacity-50 h-full"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Get in Touch with Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info with Image */}
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col justify-between relative">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-primary text-2xl sm:text-3xl mr-3" />
              <div>
                <p className="text-lg font-semibold">(123) 456-7890</p>
                <p className="text-sm text-gray-600">Available 9am - 5pm</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-primary text-2xl sm:text-3xl mr-3" />
              <p className="text-lg">contact@constructioncompany.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-primary text-2xl sm:text-3xl mr-3" />
              <p className="text-lg">123 Construction Ave, Building City, CA 12345</p>
            </div>
            <img
              src="/contact-image.jpg" // Replace with your contact image
              alt="Contact Us"
              className="w-full h-48 object-cover rounded-lg mt-6"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form>
              <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary hover:bg-secondary text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
