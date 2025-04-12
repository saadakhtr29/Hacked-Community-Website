
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  // Sample events data
  const events = [
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

  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
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
              <button className="w-full bg-hacked-beige text-hacked-black font-semibold py-2 rounded-md hover:bg-hacked-red hover:text-white transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
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
