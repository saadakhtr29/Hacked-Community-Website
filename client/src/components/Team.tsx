
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const Team = () => {
  const founders: TeamMember[] = [
    { name: 'John Doe', role: 'Founder & CEO' },
    { name: 'Jane Smith', role: 'Co-Founder & CTO' },
    { name: 'Mike Johnson', role: 'Co-Founder & COO' }
  ];

  const teams = {
    'Graphic Team': Array.from({ length: 10 }, (_, i) => ({
      name: `Designer ${i + 1}`,
      role: 'Graphic Designer'
    })),
    'Management Team': Array.from({ length: 10 }, (_, i) => ({
      name: `Manager ${i + 1}`,
      role: 'Event Manager'
    })),
    'Social Media Team': Array.from({ length: 10 }, (_, i) => ({
      name: `Social ${i + 1}`,
      role: 'Social Media Expert'
    })),
    'Mentor Team': Array.from({ length: 10 }, (_, i) => ({
      name: `Mentor ${i + 1}`,
      role: 'Technical Mentor'
    })),
    'Content Team': Array.from({ length: 10 }, (_, i) => ({
      name: `Writer ${i + 1}`,
      role: 'Content Creator'
    }))
  };

  const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>
                <User className="w-8 h-8" />
              </AvatarFallback>
            </Avatar>
            <h4 className="font-semibold text-center">{member.name}</h4>
            <p className="text-sm text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
      
      {/* Founders Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Founders</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={founder.image} alt={founder.name} />
                <AvatarFallback>
                  <User className="w-10 h-10" />
                </AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-semibold">{founder.name}</h4>
              <p className="text-gray-600">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Sections */}
      {Object.entries(teams).map(([title, members]) => (
        <TeamSection key={title} title={title} members={members} />
      ))}

      {/* Join Us Section */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold mb-4">Want to join us?</h3>
        <p className="text-lg mb-8">Click the button below and register through our form</p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-hacked-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
        >
          Join Our Community
        </a>
      </div>
    </div>
  );
};

export default Team;
