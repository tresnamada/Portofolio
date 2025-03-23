import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import { Cpu, Palette, Code, Star } from "lucide-react";
import tailwind from "./image/tailwind.png";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  const [activeTab, setActiveTab] = useState("languages");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    languages: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "hover:bg-orange-500",
        proficiency: 90,
        description: "Semantic HTML, Accessibility, SEO optimization"
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "hover:bg-blue-500",
        proficiency: 85,
        description: "Responsive design, Animations, Layouts"
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "hover:bg-yellow-400",
        proficiency: 80,
        description: "ES6+, DOM manipulation, Async/Await"
      },
      {
        name: "Dart",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        color: "hover:bg-blue-400",
        proficiency: 75,
        description: "Mobile development, State management"
      },
    ],
    frameworks: [
      {
        name: "Tailwind CSS",
        logo: tailwind,
        color: "hover:bg-cyan-500",
        proficiency: 90,
        description: "Utility-first CSS, Responsive design"
      },
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "hover:bg-blue-600",
        proficiency: 85,
        description: "Hooks, Context API, Redux"
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        color: "hover:bg-sky-400",
        proficiency: 80,
        description: "Cross-platform mobile development"
      },
    ],
    design: [
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "hover:bg-purple-500",
        proficiency: 85,
        description: "UI/UX design, Prototyping, Collaboration"
      },
      {
        name: "Canva",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        color: "hover:bg-blue-500",
        proficiency: 90,
        description: "Graphic design, Social media assets"
      },
    ],
  };

  const icons = {
    languages: <Code size={18} />,
    frameworks: <Cpu size={18} />,
    design: <Palette size={18} />,
  };

  // Animation variants for staggered animation
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Function to get rating stars
  const getRatingStars = (proficiency) => {
    const stars = [];
    const fullStars = Math.floor(proficiency / 20);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i}
          size={16} 
          className={i < fullStars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
        />
      );
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-r from-primary to-secondary p-16 md:p-8 lg:p-12 relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              opacity: Math.random() * 0.5,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 relative z-10">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-tertiary text-center mb-8 relative"
          data-aos="fade-down"
        >
          <ReactTyped
            strings={["My Skills_", "My Expertise_", "My Abilities_"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-Biru rounded-full"></span>
        </h1>

        {/* Tabs */}
        <div
          className="flex flex-wrap md:mt-12 justify-center mb-12 space-x-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-500 transform ${
                activeTab === tab
                  ? "bg-Biru text-white shadow-lg scale-105"
                  : "bg-tertiary text-secondary hover:bg-kuning hover:text-white hover:scale-105"
              }`}
              data-aos={activeTab === tab ? "zoom-in" : ""}
            >
              <span className={`mr-2 transition-transform duration-300 ${activeTab === tab ? "rotate-360" : ""}`}>
                {icons[tab]}
              </span>
              <span className="ml-2 font-medium">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-kuning rounded-b-lg" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Cards with staggered animation */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {skills[activeTab]?.length > 0 ? (
            skills[activeTab].map((skill, index) => (
              <div
                key={skill.name}
                className={`relative group overflow-hidden rounded-xl border-b-4 border-secondary bg-tertiary/90 backdrop-blur-sm p-6 transition-all duration-500 ${skill.color} hover:scale-105 hover:shadow-xl hover:shadow-${skill.color.split('-')[1]}/20 hover:border-transparent`}
                data-aos="zoom-in"
                data-aos-delay={200 * index}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-20 h-20 object-contain transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 transform group-hover:rotate-12"
                    />
                    <div className="absolute inset-0 bg-transparent rounded-full border-2 border-dashed border-transparent group-hover:border-white/30 animate-spin-slow"></div>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-xl text-center group-hover:text-white transition-all duration-300">
                      {skill.name}
                    </span>
                    
                    {/* Skill bar animation on hover */}
                    <div className="mt-3 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-Biru transition-all duration-1000 ease-out"
                        style={{ 
                          width: hoveredSkill === skill.name ? `${skill.proficiency}%` : '0%'
                        }}
                      ></div>
                    </div>
                    
                    {/* Star rating */}
                    <div className="flex justify-center mt-2 space-x-1">
                      {getRatingStars(skill.proficiency)}
                    </div>
                    
                    {/* Description appears on hover */}
                    <p className="mt-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/80">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Animated background effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner decoration */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rotate-45 transform transition-all duration-500 group-hover:scale-150"></div>
              </div>
            ))
          ) : (
            <p className="text-center text-tertiary col-span-3">
              No skills available in this category.
            </p>
          )}
        </div>
        
        {/* Animated hint text */}
        <div className="text-center mt-12 opacity-70 text-tertiary/80" data-aos="fade-up" data-aos-delay="600">
          <p className="animate-pulse">
            Hover over skills to see more details
          </p>
        </div>
      </div>
      
      {/* Add keyframes for the floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;