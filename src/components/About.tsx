
import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-12 h-12 text-hacked-red mb-4" />,
      title: "Biggest Tech Community",
      description: "in Jamia Hamdard"
    },
    {
      icon: <Users className="w-12 h-12 text-hacked-red mb-4" />,
      title: "1000+ Members",
      description: "across all years of study"
    },
    {
      icon: <Calendar className="w-12 h-12 text-hacked-red mb-4" />,
      title: "15+ Events",
      description: "hosted till now"
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-12">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {highlight.icon}
            <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
            <p className="text-lg">{highlight.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;
