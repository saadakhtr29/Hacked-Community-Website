import React from 'react';
import { Users, Calendar, Award, Code, Lightbulb, Heart, Target, Rocket, Star } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-12 h-12 text-hacked-red mb-4" />,
      title: "Biggest Tech Community",
      description: "in Jamia Hamdard",
      stat: "#1"
    },
    {
      icon: <Users className="w-12 h-12 text-hacked-red mb-4" />,
      title: "1000+ Members",
      description: "across all years of study",
      stat: "1K+"
    },
    {
      icon: <Calendar className="w-12 h-12 text-hacked-red mb-4" />,
      title: "15+ Events",
      description: "hosted till now",
      stat: "15+"
    }
  ];

  const mission = [
    {
      icon: <Code className="w-8 h-8 text-hacked-red" />,
      title: "Tech Innovation",
      description: "Fostering cutting-edge technology and innovation among students"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-hacked-red" />,
      title: "Skill Development",
      description: "Providing workshops, mentorship, and hands-on learning experiences"
    },
    {
      icon: <Heart className="w-8 h-8 text-hacked-red" />,
      title: "Community Building",
      description: "Creating a supportive network of like-minded tech enthusiasts"
    },
    {
      icon: <Target className="w-8 h-8 text-hacked-red" />,
      title: "Career Guidance",
      description: "Helping students navigate their tech careers with expert mentorship"
    }
  ];

  return (
    <div className="text-center max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-20">
        <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
          About <span className="gradient-text">Hacked</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
          We are Jamia Hamdard's premier tech community - a student-driven initiative that bridges the gap between academic learning and real-world technology.
        </p>
        <div className="flex items-center justify-center gap-2 text-lg font-medium text-hacked-red">
          <Star className="w-5 h-5 fill-current" />
          <span>By Students, For Students</span>
          <Star className="w-5 h-5 fill-current" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="glass-card p-8 rounded-2xl hover-lift animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute top-4 right-4 text-4xl font-bold text-hacked-red/20">
              {highlight.stat}
            </div>
            <div className="relative z-10">
              {highlight.icon}
              <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
              <p className="text-lg text-gray-600">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mb-20">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Rocket className="w-8 h-8 text-hacked-red" />
          <h3 className="font-display text-3xl md:text-4xl font-bold">Our Mission</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mission.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/70 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-semibold text-lg mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
        <h3 className="font-display text-3xl font-bold mb-8">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-bold text-xl mb-4 text-hacked-red">🚀 Host Tech Events</h4>
            <p className="text-gray-600">Hackathons, workshops, seminars, and tech talks featuring industry experts and innovators.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-hacked-red">🎯 Provide Guidance</h4>
            <p className="text-gray-600">Mentorship programs, career counseling, and skill development sessions for aspiring technologists.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-hacked-red">🤝 Build Community</h4>
            <p className="text-gray-600">Creating lasting connections and collaborative opportunities among tech-minded students.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;