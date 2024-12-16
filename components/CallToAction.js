"use client";
import Link from 'next/link';
const CallToAction = () => {
 const whatsappLink = `https://wa.me/+237674299737?text=Hello`;

  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-6">
          Let us help you build your dreams with our expert construction services. Contact us today!
        </p>
        <div className="flex justify-center space-x-4">
          <Link href='mailto:creativeconstruction237@gmail.com' className="px-8 py-3 bg-secondary hover:bg-white hover:text-primary text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Get a Quote
          </Link>
          <Link href={whatsappLink} className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
