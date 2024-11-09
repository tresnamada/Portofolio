import React from 'react'
import { useState } from 'react'
import { ReactTyped } from 'react-typed';
import Aos from 'aos';
import tailwind from './image/tailwind.png';
const Skills = () => {

    Aos.init(
      {
        duration: 1200,
      }
    );
    const [activeTab, setActiveTab] = useState('languages');
  
    const skills = {
      languages: [
        { 
          name: "HTML", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "hover:bg-orange-500" 
        },
        { 
          name: "CSS", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "hover:bg-blue-500" 
        },
        { 
          name: "JavaScript", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "hover:bg-yellow-400" 
        },
        { 
          name: "Dart", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
          color: "hover:bg-blue-400" 
        },
      ],
      frameworks: [
        { 
          name: "Tailwind CSS", 
          logo: tailwind,
          color: "hover:bg-cyan-500" 
        },
        { 
          name: "React.js", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "hover:bg-blue-600" 
        },
        { 
          name: "Flutter", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
          color: "hover:bg-sky-400" 
        },
      ],
      design: [
        { 
          name: "Figma", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          color: "hover:bg-purple-500" 
        },
        { 
          name: "Canva", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
          color: "hover:bg-blue-500" 
        },
      ],
    };
    
    return (
      <div className="min-h-screen bg-primary p-16 md:p-8 lg:p-12">
        <div className="max-w-6xl top-7 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tertiary text-center mb-8 "  data-aos="fade-right">
            <ReactTyped strings={["My Skill_"]} typeSpeed={50} backSpeed={50} loop></ReactTyped>
            
          </h1>
  
          {/* Tabs */}
          <div className="flex md:mt-12 justify-center mb-8 space-x-4" data-aos="fade-right">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg bg-secondary transition-all duration-500 ${
                  activeTab === tab
                    ? 'bg-secondary text-tertiary transition-all duration-5000'
                    : 'bg-white text-bg-secondary hover:bg-tertiary'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2  md:mt-12 md:grid-cols-3 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {skills[activeTab].map((skill) => (
              <div
                key={skill.name}
                className={`relative group overflow-hidden rounded-xl border-4 border-secondary p-4 transition-all duration-300 ${skill.color} hover:border-transparent`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="font-medium text-lg text-center group-hover:text-tertiary">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Skills
