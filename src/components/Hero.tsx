import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Users, Zap, Rocket, Star, Cpu, Wifi } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center hero-texture overflow-hidden">
      {/* Dynamic Background Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Tech Icons with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 w-8 h-8 text-electric-blue/40 float-slow" />
        <Users className="absolute top-32 right-20 w-6 h-6 text-electric-blue/30 float-medium" />
        <Zap className="absolute bottom-40 left-20 w-10 h-10 text-electric-blue/35 float-fast" />
        <Rocket className="absolute bottom-60 right-10 w-7 h-7 text-electric-blue/25 float-slow animation-delay-200" />
        <Star className="absolute top-1/2 left-16 w-5 h-5 text-electric-blue/20 float-medium animation-delay-400" />
        <Cpu className="absolute top-3/4 right-1/4 w-6 h-6 text-electric-blue/30 float-fast animation-delay-600" />
        <Wifi className="absolute top-1/4 right-1/3 w-8 h-8 text-electric-blue/25 float-slow animation-delay-800" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-fade-in">
          Welcome to <span className="gradient-text">HACKED</span>
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto mb-6 animate-fade-in animation-delay-200 font-medium leading-tight">
          A Vibrant Community of <em className="font-display font-semibold">Innovators</em>, <em className="font-display font-semibold">Creators</em>, and <em className="font-display font-semibold">Tech Enthusiasts</em>
        </p>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-400 text-muted-foreground leading-relaxed">
          Where Ideas Come to Life and Innovation Never Stops
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in animation-delay-600">
          <button className="btn-primary group">
            <span className="relative z-10">Join Our Community</span>
            <Rocket className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </button>
          <button className="btn-secondary group">
            <span className="relative z-10">Explore Events</span>
            <Star className="inline-block ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button 
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-12 text-electric-blue hover:text-electric-blue-light transition-colors duration-300 group"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">Scroll to explore</span>
          <ChevronDown size={32} className="animate-bounce group-hover:scale-110 transition-transform duration-300" />
        </div>
      </button>
    </div>
  );
};

export default Hero;