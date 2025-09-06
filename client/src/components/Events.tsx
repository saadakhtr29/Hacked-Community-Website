import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import '../style/Events.css';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'AI & Machine Learning Workshop',
      date: '2025-09-15',
      time: '2:00 PM - 6:00 PM',
      location: 'Convention Center, Jamia Hamdard',
      attendees: 45,
      description: 'Hands-on workshop covering the latest in AI and ML technologies.',
      type: 'Workshop'
    },
    {
      title: 'Startup Pitch Night',
      date: '2025-09-22',
      time: '6:00 PM - 9:00 PM',
      location: 'Tech Hub, Gurgaon',
      attendees: 120,
      description: 'Present your startup ideas to investors and fellow entrepreneurs.',
      type: 'Networking'
    },
    {
      title: 'Blockchain Development Bootcamp',
      date: '2025-10-05',
      time: '10:00 AM - 4:00 PM',
      location: 'Digital Campus, Noida',
      attendees: 60,
      description: 'Learn blockchain fundamentals and build your first DApp.',
      type: 'Bootcamp'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="events-section">
      <h1 className="events-title font-display scroll-animation">
        Upcoming Events
      </h1>
      
      <p className="events-subtitle scroll-animation">
        Join us for exciting workshops, hackathons, and networking events that will elevate your tech journey.
      </p>

      {/* Events Grid */}
      <div className="events-grid">
        {upcomingEvents.map((event, index) => (
          <div
            key={event.title}
            className="event-card scroll-animation card-hover"
            style={{ animationDelay: `${index * 200}ms` }}
          >
           <div className='event-contents'>
             {/* Event Type Badge */}
            <div className="event-badge">
              {event.type}
            </div>

            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>

            {/* Event Details */}
            <div className="event-details">
              <div className="event-detail">
                <Calendar size={16} />
                <span>{formatDate(event.date)}</span>
              </div>
              
              <div className="event-detail">
                <Clock size={16} />
                <span>{event.time}</span>
              </div>
              
              <div className="event-detail">
                <MapPin size={16} />
                <span>{event.location}</span>
              </div>
              
              <div className="event-detail">
                <Users size={16} />
                <span>{event.attendees} attendees</span>
              </div>
            </div>
           </div>
            {/* Register Button */}
            <button className="register-btn">
              Register Now
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta-section scroll-animation">
        <h3 className="cta-title">Want to Host an Event?</h3>
        <p className="cta-text">
          Have an idea for a workshop, talk, or community event? We'd love to help you make it happen!
        </p>
        <button className="host-event-btn">
          Propose an Event
        </button>
      </div>
    </div>
  );
};

export default Events;
