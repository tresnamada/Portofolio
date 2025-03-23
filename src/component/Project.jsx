import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from 'react-typed';
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
      category: 'Web',
      tags: ['React', 'TailwindCSS', 'Frontend']
    },
    {
      id: 2,
      title: 'Snapandev Community',
      description: 'This is the project I have created.',
      image: Karya2,
      link: 'https://example.com/project2',
      category: 'Web',
      tags: ['JavaScript', 'Community', 'Development']
    },
    {
      id: 3,
      title: 'P5 Project',
      description: 'This is the project I have created.',
      image: Karya3,
      link: 'https://example.com/project3',
      category: 'Web',
      tags: ['p5.js', 'Creative Coding', 'Animation']
    },
    {
      id: 4,
      title: 'Portfolio with TailwindCSS',
      description: 'This is the project I have created.',
      image: Karya4,
      link: 'https://example.com/project3',
      category: 'Web',
      tags: ['TailwindCSS', 'Portfolio', 'Responsive']
    },
    {
      id: 5,
      title: 'Portfolio with TailwindCSS+ReactJS For Kidi',
      description: 'This is the project I have created.',
      image: karya5,
      link: karya5,
      category: 'Web',
      tags: ['React', 'TailwindCSS', 'Children']
    },
    {
      id: 6,
      title: 'KREVA Kids Hackathon Kidi',
      description: 'This is the project I have created.',
      image: karya6,
      link: 'https://example.com/project3',
      category: 'Web',
      tags: ['Hackathon', 'Kids', 'Education']
    },
    {
      id: 7,
      title: 'App Pandhu',
      description: 'This is the project I have created.',
      image: karya7,
      link: 'https://example.com/project3',
      category: 'App',
      tags: ['Mobile', 'UI/UX', 'Android']
    },
    {
      id: 8,
      title: 'DESIGN APPS TRAMPAH',
      description: 'This is the project I have created.',
      image: karya8,
      link: 'https://example.com/project3',
      category: 'Design',
      tags: ['UI/UX', 'Figma', 'Eco-friendly']
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Web');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Web');

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    
    // Simulasi loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Mencegah scroll saat modal terbuka
  };

  const handleCloseModal = (e) => {
    if (e && e.target === e.currentTarget) {
      setSelectedProject(null);
      document.body.style.overflow = 'auto'; // Kembalikan scroll saat modal tertutup
    }
  };
  
  const handleEscKeyPress = (e) => {
    if (e.key === 'Escape' && selectedProject) {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscKeyPress);
    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [selectedProject]);

  // Filter berdasarkan kategori dan pencarian
  const filteredProjects = projects.filter(project => 
    (selectedCategory === 'All' || project.category === selectedCategory) &&
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  // Kategori yang tersedia
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-primary">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-tertiary mb-4"></div>
            <h2 className="text-xl text-tertiary font-semibold">Loading Projects...</h2>
          </div>
        </div>
      )}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tertiary text-center mb-8 mt-12" data-aos="fade-right">
          <ReactTyped strings={["My Project_", "My Portfolio_", "My Work_"]} typeSpeed={50} backSpeed={50} loop></ReactTyped>
        </h1>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8" data-aos="fade-up">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full p-3 pl-10 rounded-full border-2 border-secondary focus:outline-none focus:border-tertiary bg-white shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="text-center mb-12 pt-4" data-aos="fade-up">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveFilter(category);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium shadow-md transform transition duration-300 hover:scale-105 
                  ${activeFilter === category ? 
                    'bg-tertiary text-white scale-105' : 
                    'bg-white text-gray-800 hover:bg-gray-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Display message when no projects match */}
        {filteredProjects.length === 0 && (
          <div className="text-center my-16 text-tertiary" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold">No projects found</h3>
            <p className="mt-2">Try changing your search or filter criteria</p>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-tertiary">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Click to view details</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold line-clamp-1">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-secondary text-tertiary rounded-full">{project.category}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover rounded-t-xl"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setSelectedProject(null);
                  document.body.style.overflow = 'auto';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-tertiary rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500 text-sm">Project #{selectedProject.id}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Technologies & Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t pt-6">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-tertiary text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;