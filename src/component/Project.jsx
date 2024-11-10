import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typed, ReactTyped } from 'react-typed';
import Karya1 from './image/karya1.png';
import Karya2 from './image/karya2.png';
import Karya3 from './image/karya3.png';
import Karya4 from './image/Karya4.png';
import karya5 from './image/karya5.png';
import karya6 from './image/karya6.png';
import karya7 from './image/Karya7.jpg';  
import karya8 from './image/karya8.png';
const ProjectPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Karya Kerja FICPACT',
      description: 'This is the project I have created.',
      image: Karya1,
      link: 'https://example.com/project1',
      category: 'Web', // Menambahkan kategori
    },
    {
      id: 2,
      title: 'Snapandev Community',
      description: 'This is the project I have created.',
      image: Karya2,
      link: 'https://example.com/project2',
      category: 'Web', // Menambahkan kategori
    },
    {
      id: 3,
      title: 'P5 Project',
      description: 'This is the project I have created.',
      image: Karya3,
      link: 'https://example.com/project3',
      category: 'Web', // Menambahkan kategori
    },
    {
      id: 4,
      title: 'Portfolio with TailwindCSS',
      description: 'This is the project I have created.',
      image: Karya4,
      link: 'https://example.com/project3',
      category: 'Web', // Menambahkan kategori
    },
    {
      id: 5,
      title: 'Portfolio with TailwindCSS+ReactJS For Kidi',
      description: 'This is the project I have created.',
      image: karya5,
      link: karya5,
      category: 'Web', // Menambahkan kategori
    },
    {
      id: 6,
      title: 'KREVA Kids Hackathon Kidi',
      description: 'This is the project I have created.',
      image: karya6,
      link: 'https://example.com/project3',
      category: 'Web', // Menambahkan kategori
    },
    {
      id: 7,
      title: 'App Pandhu',
      description: 'This is the project I have created.',
      image: karya7,
      link: 'https://example.com/project3',
      category: 'App', // Menambahkan kategori
    },
    {
      id: 8,
      title: 'DESIGN APPS TRAMPAH',
      description: 'This is the project I have created.',
      image: karya8,
      link: 'https://example.com/project3',
      category: 'Design', // Menambahkan kategori
    },
    // Tambahkan lebih banyak proyek jika dibutuhkan
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Web'); // Set default to 'Web'

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Filter proyek berdasarkan kategori yang dipilih
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-primary">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tertiary text-center mb-8 " data-aos="fade-right">
        <ReactTyped strings={["My Project_"]} typeSpeed={50} backSpeed={50} loop></ReactTyped>
      </h1>

      {/* Filter Kategori */}
      <div className="text-center mb-8 text-md pt-4 text-kuning">
        <button
          onClick={() => setSelectedCategory('Web')}
          className="px-4 py-2 mx-2 bg-secondary  hover:bg-tertiary hover:transition ease-out duration-500 rounded-lg"
        >
          Web
        </button>
        <button
          onClick={() => setSelectedCategory('App')}
          className="px-4 py-2 mx-2 bg-secondary  hover:bg-tertiary hover:transition ease-out duration-500 rounded-lg"
        >
          App
        </button>
        <button
          onClick={() => setSelectedCategory('Design')}
          className="px-4 py-2 mx-2 bg-secondary hover:bg-tertiary hover:transition ease-out duration-500 rounded-lg"
        >
          Design
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-tertiary ">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 border-4 border-secondary border-transparent"
            data-aos="fade-up"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-primary rounded-lg shadow-lg p-8 max-w-3xl w-full"
            data-aos="zoom-in"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl text-tertiary font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-tertiary mb-4">{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
