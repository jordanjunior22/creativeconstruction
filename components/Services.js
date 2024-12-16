"use client";

import { FaHammer, FaTools, FaBuilding, FaHardHat,FaChalkboardTeacher } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaHammer className="text-4xl mb-4 text-primary" />,
    title: "Construction Management",
    description: "Expert oversight and project management from start to finish. Ensuring quality, safety, and timely delivery.",
  },
  {
    id: 2,
    icon: <FaTools className="text-4xl mb-4 text-primary" />,
    title: "Renovations & Remodeling",
    description: "Transform your space with our professional renovation services. We specialize in both residential and commercial projects.",
  },
  {
    id: 3,
    icon: <FaBuilding className="text-4xl mb-4 text-primary" />,
    title: "New Constructions",
    description: "Building your dream home or commercial space from the ground up with the finest materials and skilled labor.",
  },
  {
    id: 4,
    icon: <FaHardHat className="text-4xl mb-4 text-primary" />,
    title: "Consultation Services",
    description: "Get expert advice on your construction projects. We provide comprehensive consultations tailored to your needs.",
  },
  {
    id: 5,
    icon: <FaChalkboardTeacher className="text-4xl mb-4 text-primary" />, // Changed to a teacher icon, representing training
    title: "Training",
    description: "Learn how to use cutting-edge construction software to streamline your projects. Our expert-led training sessions are tailored to help you master the tools for success in the construction industry.",
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-neutral text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl vintage-border">
              <div className="text-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-center mt-4">{service.title}</h3>
              <p className="text-center mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
