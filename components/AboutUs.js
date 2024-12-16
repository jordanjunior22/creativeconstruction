"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        if (top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-neutral text-black relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-lg md:text-xl mb-4 opacity-90">
              At Creative Construction, we believe in building more than just structures; we build relationships, trust, and a better future for our communities.
            </p>
            <p className="mb-6 text-lg md:text-xl opacity-80">
              With over 10 years of experience in the construction industry, our dedicated team is committed to delivering top-notch quality, innovative solutions, and sustainable practices in every project we undertake.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside mb-6 text-lg md:text-xl opacity-75">
              <li>Integrity: We adhere to the highest ethical standards in all our dealings.</li>
              <li>Quality: Our commitment to quality is evident in every project.</li>
              <li>Innovation: We embrace new technologies and ideas to stay ahead.</li>
              <li>Sustainability: We are dedicated to environmentally friendly practices.</li>
            </ul>
            <Link href='mailto:creativeconstruction237@gmail.com' className="px-6 py-2 bg-primary hover:bg-secondary text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Get A Quote
            </Link>
          </div>

          {/* Right Column: Team Image */}
          <div className="relative h-64 md:h-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/boss.jpeg" // Replace with your team image
              alt="Our Team" 
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110 opacity-90"
            />
          </div>
        </div>

        {/* Additional Content: Mission Statement */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
            Our mission is to transform visions into reality through quality construction and exceptional service. We strive to exceed client expectations at every turn, ensuring that every project we complete is a testament to our dedication and craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
