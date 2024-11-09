import React from 'react'
import HeroSection from '../component/HeroSection'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => { 
    document.body.style.overflow = 'hidden';
    

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>

    <HeroSection/>
    </>
  )
}

export default Home
