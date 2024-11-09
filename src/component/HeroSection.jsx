import React from 'react';
import { ReactTyped,Typed } from "react-typed";
import Gambar from './Gambar';


const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:flex md:justify-center md:gap-8 items-center bg-primary text-white  p-8 h-screen mx-auto shadow-lg animate-fade-down animate-once animate-ease-in-out">

<div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-tertiary">
   <Gambar/>
  </div>
      <div className='text-center pt-4 animate-fade-right animate-once animate-ease-in-out'>
        <h1 className="text-2xl md:text-4xl md:m-3 font-semibold drop-shadow-lg text-tertiary ">Erlangga Tresnamada Muliawan</h1>
        <h1 className='md:mb-3 '><ReactTyped strings={["Front End Developer", "Mobile App Developer"] } typeSpeed={50} backSpeed={50} loop className='text-xl md:text-2xl text-kuning' /></h1>
        <h2 className='text-tertiary pt-2 '>Hi <span className='animate-wiggle animate-infinite animate-ease-in-out'>👋</span>  Welcome to my portfolio website!</h2>
        <div className=' mt-4 flex justify-center gap-3'>
          <a href='https://github.com/tresnamada'target='blank' className="border-2  py-2 px-6 rounded-lg text-primary bg-tertiary hover:opacity-80  hover:text-white duration-300">My Github</a>
          <button className="border-2 py-2 px-6 rounded-lg bg-tertiary hover:opacity-80 duration-300">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
