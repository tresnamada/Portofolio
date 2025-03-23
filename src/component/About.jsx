import { useEffect } from 'react';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAward, faCode, faStar } from '@fortawesome/free-solid-svg-icons';
import Gambar from './Gambar';
import uiux from './image/uiux.jpg';
import webdev from './image/webdev.png';
import cyber from './image/cybersec.jpg';

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-in-out-cubic',
    });
  }, []);

  const timelineData = [
    {
      school: 'SMK Negeri 8 Semarang',
      period: '2023 - Present',
      major: 'Front End Developer',
    },
    {
      school: 'SMP Negeri 15 Semarang',
      period: '2020 - 2023',
      major: 'Junior High School',
    },
  ];

  const LineExperience = [
    {
      experience: '1st UIUX NATIONAL GENETIC USM 2024 Competition',
      date: '2024',
      img: uiux,
    },
    {
      experience: 'WEB DEVELOPMENT FICPACT',
      date: '2024',
      img: webdev,
    },
    {
      experience: 'LEARNING CYBER SECURITY',
      date: '2024',
      img: cyber,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-primary to-secondary text-white min-h-screen text-tertiary relative overflow-hidden -z-10">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Page Header with Animation */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></div>
          </h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12 mb-24 mt-12 perspective-1000">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex items-center mx-auto justify-center mb-8 lg:mb-0" 
               data-aos="flip-right" 
               data-aos-duration="1500">
            <div className="relative transform transition-transform duration-700 hover:rotate-y-10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
              <Gambar />
            </div>
          </div>

          {/* About Text Container */}
          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">./About</span>
              <div className="w-24 h-1 bg-blue-500 mt-2 rounded-full transform origin-left transition-all duration-300 ease-in-out"></div>
            </h2>
            <div className="space-y-6 text-lg text-tertiary backdrop-blur-sm bg-secondary/30 p-6 rounded-lg border border-blue-500/20 shadow-lg transition-all duration-500 hover:shadow-blue-500/10">
              <p className="text-xl font-bold leading-relaxed">
                My name is Erlangga Tresnamada Muliawan, 17 years old. Im from Semarang, Indonesia.<br/> I am a Front End Developer. And Im interested in Fullstack Development.
              </p>
              <p className="transform transition-all duration-500 hover:translate-x-2">
                Im studying at SMK Negeri 8 Semarang. I am currently learning Web Development.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-24" data-aos="fade-up" data-aos-anchor-placement="top-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 relative inline-block">
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">./Education</span>
            <div className="w-32 h-1 bg-indigo-500 mt-2 rounded-full"></div>
          </h2>
          <div className="relative">
            {/* Timeline Line with Animation */}
            <div className="absolute left-[22px] top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-300 opacity-50 blur-sm animate-pulse"></div>
            </div>

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-12" 
                  data-aos="fade-right" 
                  data-aos-delay={index * 150}
                >
                  {/* Timeline Dot with Pulse Effect */}
                  <div className="absolute left-2 -translate-x-1/2 w-11 h-11 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-50"></div>
                    <FontAwesomeIcon icon={faGraduationCap} className="text-tertiary w-6 h-6 z-10" />
                  </div>

                  {/* Content Box with Better Hover Effects */}
                  <div className="bg-secondary/80 backdrop-blur-md p-6 rounded-lg shadow-lg border border-blue-500/20 transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 hover:-translate-y-1 group">
                    <div className="absolute top-0 right-0 m-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FontAwesomeIcon icon={faStar} className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-indigo-500 transition-all duration-300">{item.school}</h3>
                    <p className="text-tertiary mb-1 group-hover:text-blue-300 transition-colors duration-300">{item.period}</p>
                    <p className="text-tertiary group-hover:text-blue-200 transition-colors duration-300">{item.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">./Experience</span>
            <div className="w-36 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LineExperience.map((item, index) => (
              <div 
                key={index} 
                className="group bg-secondary/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-blue-500/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
              >
                {/* Certificate Image with Enhanced Effects */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.experience}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Gradient Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50 transition-all duration-700 rounded-lg opacity-0 group-hover:opacity-100"></div>
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FontAwesomeIcon icon={faCode} className="text-blue-400 w-12 h-12 transform transition-transform duration-500 rotate-12 group-hover:rotate-0" />
                  </div>
                </div>

                {/* Certificate Info with Better Animation */}
                <div className="p-6 relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-center gap-3 mb-3 transform transition-all duration-500 group-hover:translate-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-md group-hover:shadow-blue-500/50 transition-all duration-500">
                      <FontAwesomeIcon icon={faAward} className="text-tertiary w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-lg bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">{item.experience}</h3>
                  </div>
                  <p className="text-tertiary pl-11 transform transition-all duration-500 group-hover:text-blue-300">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;