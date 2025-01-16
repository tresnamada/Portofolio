import { useEffect } from 'react';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';
import Gambar from './Gambar';
import uiux from './image/uiux.jpg';
import webdev from './image/webdev.png';
import cyber from './image/cybersec.jpg';
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
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
    <section className="w-full bg-gradient-to-r from-primary to-secondary text-white min-h-screen text-tertiary">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row-reverse lg:items-center md:mt-20 lg:gap-12 mb-20 mt-12 ">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex items-center mx-auto justify-center mb-8 lg:mb-0" data-aos="fade-right">
            <div className="relative">
              <Gambar />
            </div>
          </div>

          {/* About Text Container */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">./About</h2>
            <div className="space-y-6 text-lg text-tertiary">
              <p className='text-xl font-bold'>
                My name is Erlangga Tresnamada Muliawan, 17 years old. Im from Semarang, Indonesia.<br/> I am a Front End Developer. And im interested in Fullstack Developer.
              </p>
              <p>
               Im studying at SMK Negeri 8 Semarang. I am currently learning Web Development. 
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">./Education</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[22px] top-0 h-full w-0.5 bg-blue-500"></div>

         
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative pl-12" data-aos="fade-right">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 -translate-x-1/2 w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-tertiary w-6 h-6" />
                  </div>

                  {/* Content Box */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">{item.school}</h3>
                    <p className="text-tertiary  mb-1">{item.period}</p>
                    <p className="text-tertiary">{item.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">./Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LineExperience.map((item, index) => (
              <div 
                key={index} 
                className="group bg-secondary rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Certificate Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.experience}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FontAwesomeIcon icon={faAward} className="text-blue-500 w-5 h-5" />
                    <h3 className="font-bold text-lg">{item.experience}</h3>
                  </div>
                  <p className="text-tertiary">{item.date}</p>
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