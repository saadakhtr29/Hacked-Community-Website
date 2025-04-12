
import React from 'react';
import { Calendar, Clock, MapPin, Users, Film } from 'lucide-react';

const Events = () => {
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Hacked Hackathon 2025',
      date: 'April 20-21, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Hub, Downtown',
      attendees: 200,
      description: 'Join us for a weekend of innovation, collaboration, and fun as we hack solutions for real-world problems.',
    },
    {
      id: 2,
      title: 'Web3 Workshop Series',
      date: 'May 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Virtual Event',
      attendees: 150,
      description: 'Learn the fundamentals of blockchain, smart contracts, and decentralized applications in this hands-on workshop.',
    },
    {
      id: 3,
      title: 'Tech Talk: AI Ethics',
      date: 'June 5, 2025',
      time: '7:00 PM - 9:00 PM',
      location: 'Community Center',
      attendees: 100,
      description: 'An evening discussion on the ethical implications of artificial intelligence in our society.',
    },
  ];

  // Sample past events data
  const pastEvents = [
    {
      id: 4,
      title: 'Coding Bootcamp 2024',
      date: 'January 10-12, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Innovation Center',
      attendees: 175,
      description: 'An intensive three-day bootcamp covering the latest web development technologies and best practices.',
    },
    {
      id: 5,
      title: 'Data Science Summit',
      date: 'February 22, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'Science Museum',
      attendees: 220,
      description: 'A day-long summit exploring the latest trends and innovations in data science and machine learning.',
    },
    {
      id: 6,
      title: 'Startup Pitch Night',
      date: 'March 15, 2024',
      time: '7:00 PM - 10:00 PM',
      location: 'Entrepreneur Hub',
      attendees: 120,
      description: 'Watch innovative startups pitch their ideas to investors and receive valuable feedback from industry experts.',
    },
  ];

  // Function to render event cards
  const renderEventCards = (events, isPast = false) => {
    return events.map((event, index) => (
      <div 
        key={event.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="bg-hacked-red text-white p-4">
          <h3 className="text-xl font-bold">{event.title}</h3>
        </div>
        <div className="p-6 text-hacked-black">
          <div className="flex items-center mb-3">
            <Calendar size={18} className="mr-2 text-hacked-red" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center mb-3">
            <Clock size={18} className="mr-2 text-hacked-red" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center mb-3">
            <MapPin size={18} className="mr-2 text-hacked-red" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center mb-4">
            <Users size={18} className="mr-2 text-hacked-red" />
            <span>{event.attendees} Attendees</span>
          </div>
          <p className="mb-4">{event.description}</p>
          {isPast ? (
            <button className="w-full bg-hacked-beige text-hacked-black font-semibold py-2 rounded-md hover:bg-hacked-red hover:text-white transition-colors flex items-center justify-center">
              <Film size={18} className="mr-2" />
              View Highlights
            </button>
          ) : (
            <button className="w-full bg-hacked-beige text-hacked-black font-semibold py-2 rounded-md hover:bg-hacked-red hover:text-white transition-colors">
              Register Now
            </button>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderEventCards(upcomingEvents)}
      </div>

      <div className="mt-20 mb-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderEventCards(pastEvents, true)}
        </div>
      </div>

      <div className="text-center mt-10">
        <a 
          href="#contact"
          className="inline-block bg-hacked-black text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition-colors"
        >
          Stay Updated on Events
        </a>
      </div>
    </div>
  );
};

export default Events;
