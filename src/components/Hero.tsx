
import React from 'react';
import { ChevronDown, Code, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen hero-texture flex flex-col justify-center items-center text-center pb-16 relative overflow-hidden">
      {/* Floating icons for visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-20 left-10 w-8 h-8 text-hacked-red/30 animate-pulse" />
        <Users className="absolute top-32 right-20 w-6 h-6 text-hacked-red/20 animate-pulse animation-delay-200" />
        <Zap className="absolute bottom-40 left-20 w-10 h-10 text-hacked-red/25 animate-pulse animation-delay-400" />
        <Code className="absolute bottom-60 right-10 w-7 h-7 text-hacked-red/20 animate-pulse animation-delay-600" />
      </div>
      
      <div className="relative z-10">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="gradient-text">Hacked</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 animate-fade-in animation-delay-200 font-medium">
          Jamia Hamdard's Premier Tech Community
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-400 text-gray-600">
          Where innovation meets collaboration. By students, for students.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in animation-delay-600">
          <a 
            href="#events" 
            className="group bg-hacked-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              Explore Events
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          <a 
            href="#contact" 
            className="glass-card px-8 py-4 rounded-xl font-semibold hover:bg-white/40 transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
          >
            Join Community
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 animate-bounce text-hacked-red"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </a>
    </div>
  );
};

export default Hero;
