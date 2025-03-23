import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import Gambar from "./Gambar";
import { Link } from "react-router-dom";
import { Github, Mail, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bounce, setBounce] = useState(false);

  // Set visibility after component mounts for entrance animation
  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll indicator animation
    const bounceInterval = setInterval(() => {
      setBounce(prev => !prev);
    }, 1500);
    
    // Track mouse for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      clearInterval(bounceInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Skills array for rotating display
  const skills = ["React", "JavaScript", "Tailwind CSS", "Mobile Development"];
  
  // Function to scroll to the next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary opacity-80 z-0">
        {/* Animated circles in background */}
       
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-kuning opacity-10 animate-ping animate-duration-[4s]"></div>
      </div>
      
      {/* Main content with parallax effect */}
      <div 
        className="flex flex-col md:flex-row-reverse md:justify-center md:gap-12 items-center p-8 h-full z-10"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      >
        {/* Profile Image with interactive elements */}
        <div 
          className={`relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-tertiary shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
            transition: "transform 0.3s ease-out"
          }}
        >
          <Gambar />
          <div className="absolute inset-0 bg-primary opacity-0 hover:opacity-20 transition-opacity duration-300 cursor-pointer"></div>
          <div className="absolute bottom-4 right-4 bg-tertiary text-primary rounded-full p-3 shadow-lg animate-bounce animate-duration-[2s] animate-infinite">
            👨‍💻
          </div>
          
          {/* Tech stack icons floating around image */}
          <div className="absolute top-5 left-5 bg-white/90 text-primary rounded-full p-2 shadow-md animate-spin animate-duration-[15s] animate-infinite">
            <span className="text-xl">⚛️</span>
          </div>
          <div className="absolute top-1/4 right-0 bg-white/90 text-primary rounded-full p-2 shadow-md animate-spin animate-duration-[12s] animate-reverse animate-infinite">
            <span className="text-xl">📱</span>
          </div>
          <div className="absolute bottom-1/4 left-0 bg-white/90 text-primary rounded-full p-2 shadow-md animate-spin animate-duration-[18s] animate-infinite">
            <span className="text-xl">🚀</span>
          </div>
        </div>

        {/* Text Content with staggered animations */}
        <div className={`text-center pt-4 md:pt-0 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}>
          <h1 className="text-2xl md:text-5xl md:m-3 font-bold text-kuning drop-shadow-lg mb-2">
            Erlangga Tresnamada 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-kuning to-tertiary"> Muliawan</span>
          </h1>
          <div className="h-14 flex justify-center items-center">
            <ReactTyped
              strings={["Front End Developer", "Mobile App Developer", "UI/UX Enthusiast"]}
              typeSpeed={70}
              backSpeed={50}
              loop
              className="text-xl md:text-3xl text-tertiary font-semibold"
            />
          </div>
          
          {/* Skills showcase */}
          <div className="mt-2 overflow-hidden h-8">
            <div className="flex justify-center gap-3 text-tertiary animate-marquee animate-infinite">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center mx-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="text-tertiary pt-4 text-lg md:text-xl">
            Hi <span className="animate-wiggle animate-infinite animate-duration-[1s] inline-block">👋</span> 
            <span className="font-semibold"> Welcome to my portfolio website!</span>
          </h2>

          {/* Social buttons with hover effects */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/tresnamada"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden p-3 rounded-full bg-tertiary text-primary hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-kuning to-tertiary opacity-0 group-hover:opacity-20 transition duration-300"></span>
              <Github size={24} className="group-hover:animate-tada" />
            </a>
            
            <Link to="/Contact" className="group relative overflow-hidden p-3 rounded-full bg-kuning text-primary hover:scale-110 transition-all duration-300 shadow-lg">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary opacity-0 group-hover:opacity-20 transition duration-300"></span>
              <Mail size={24} className="group-hover:animate-tada" />
            </Link>
            
            <a
              href="https://www.linkedin.com/in/erlanggatresnamadamuliawan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden p-3 rounded-full bg-tertiary text-primary hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-kuning to-tertiary opacity-0 group-hover:opacity-20 transition duration-300"></span>
              <Linkedin size={24} className="group-hover:animate-tada" />
            </a>
          </div>
          
          {/* CTA button with animation */}
          <div className="mt-6">
            <Link to="/projects">
              <button className="group relative overflow-hidden py-3 px-8 rounded-lg bg-gradient-to-r from-kuning to-tertiary text-primary font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
                <span className="group-hover:tracking-wider transition-all duration-300">View Projects</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 transition-all duration-300 ${bounce ? 'translate-y-2' : 'translate-y-0'}`}
        onClick={scrollToNextSection}
      >
        <ChevronDown size={36} className="text-tertiary animate-pulse" />
      </div>
    </div>
  );
};

export default HeroSection;