// components/WhatsAppButton.js
"use client"

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from React Icons

const WhatsAppButton = ({ phoneNumber, message }) => {
  const formattedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky bottom-4 right-4 z-50" // Sticky button at bottom-right of the viewport
    >
      <button className="flex items-center justify-center bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#128C7E] transition-colors">
        <FaWhatsapp className="text-2xl mr-2" />
        Chat with us on WhatsApp
      </button>
    </a>
  );
};

export default WhatsAppButton;
