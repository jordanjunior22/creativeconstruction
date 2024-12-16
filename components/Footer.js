"use client";
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral text-gray-900 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company Info</h4>
            <p className="mb-2">Creative Construction, Building Your Vision with Precision and Passion</p>
            <p>© {new Date().getFullYear()} Creative Construction. All Rights Reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-primary">Services</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-primary">Projects</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="mailto:creativeconstruction237@gmail.com" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Additional Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">More Links</h4>
            <ul>
              <li><Link href="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="flex items-center mb-2">
              <span className="mr-2"><FaPhoneAlt className="text-primary" /></span>
              +(237) 6 74 29 97 37
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2"><FaEnvelope className="text-primary" /></span>
              creativeconstruction237@gmail.com
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2"><FaMapMarkerAlt className="text-primary" /></span>
              123 Construction Ave, Building City, CA 12345
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-primary">
            <FaFacebook className="text-xl" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-primary">
            <FaTwitter className="text-xl" />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-primary">
            <FaInstagram className="text-xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
