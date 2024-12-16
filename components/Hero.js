"use client"; // Ensure that this component is a client component in Next.js
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen bg-neutral text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/10.jpeg" // Replace with your background image
          alt="Construction Site"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
          Building Your Vision With, <br /> Precision and Passion
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fade-in animation-delay-500">
          Reliable. Efficient. Future-Ready.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-8">
          <Link href="mailto:creativeconstruction237@gmail.com" className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 mb-4 md:mb-0">
            Get a Quote
          </Link>
          <Link href='/projects' className="w-full md:w-auto px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            View Our Projects
          </Link>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
