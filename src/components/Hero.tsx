
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center pb-16 relative">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        Welcome to <span className="text-hacked-red">Hacked</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
        A vibrant community of innovators, creators, and tech enthusiasts
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
        <a 
          href="#events" 
          className="bg-hacked-red text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
        >
          Upcoming Events
        </a>
        <a 
          href="#contact" 
          className="border-2 border-hacked-black bg-transparent px-6 py-3 rounded-md font-semibold hover:bg-hacked-black hover:text-white transition-colors"
        >
          Join Us
        </a>
      </div>
      
      <a 
        href="#events" 
        className="absolute bottom-8 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </div>
  );
};

export default Hero;
