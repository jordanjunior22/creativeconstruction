"use client";
import { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsList = [
    {
      title: "Luxury Home",
      description: "A stunning luxury home built with attention to detail.",
      image: "/images/2.jpeg",
      additionalImages: [
        "/images/1.jpeg",
        "/images/4.jpeg",
        "/images/5.jpeg",
        "/images/2.jpeg",
        "/images/6.jpeg",
      ],
    },
    {
      title: "Modern Office",
      description: "A state-of-the-art office space designed for productivity.",
      image: "/images/9.jpeg",
      additionalImages: [
        "/images/8.jpeg",
        "/images/9.jpeg",
        "/images/7.jpeg",
      ],
    },
    {
      title: "Community Park",
      description: "A beautiful park designed for community enjoyment.",
      image: "/images/16.jpeg",
      additionalImages: [
        "/images/16.jpeg",
        "/images/15.jpeg",
        "/images/14.jpeg",
        "/images/17.jpeg",
      ],
    },
    {
      title: "Retail Space",
      description: "An inviting retail space tailored for shopping experiences.",
      image: "/images/20.jpeg",
      additionalImages: [
        "/images/20.jpeg",
        "/images/21.jpeg",
        "/images/22.jpeg",
        "/images/23.jpeg",
        "/images/25.jpeg",
        "/images/26.jpeg",
      ],
    },
    {
      title: "Retail Space",
      description: "An inviting retail space tailored for shopping experiences.",
      image: "/images/11.jpeg",
      additionalImages: [
        "/images/11.jpeg",
        "/images/12.jpeg",
      ],
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0); // Start with the first image
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentProject.additionalImages.length);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + currentProject.additionalImages.length) % currentProject.additionalImages.length
      );
    }
  };

  return (
    <section className="py-20 bg-light-gray text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-10 max-w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Our Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-lg text-white">{project.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-primary hover:bg-secondary text-white font-semibold rounded-lg shadow-lg transition duration-300"
                onClick={() => openModal(project)}
              >
                More Images
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 max-w-4xl w-full rounded-lg">
            <h3 className="text-2xl font-semibold text-black mb-4">{currentProject.title}</h3>
            <div className="flex justify-center items-center relative">
              {/* Prev Button */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={prevImage}
              >
                Prev
              </button>

              {/* Image Display */}
              <div className="max-w-full h-[500px] overflow-hidden">
                <Image
                  src={currentProject.additionalImages[currentImageIndex]}
                  alt={currentProject.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Next Button */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={nextImage}
              >
                Next
              </button>
            </div>

            {/* Close Modal Button */}
            <button
              className="absolute top-4 right-4 text-red font-semibold"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
