import React from "react";
import { Target, Lightbulb, Heart, Rocket } from "lucide-react";
import TrueFocus from './TrueFocus';
import "../style/About.css";

const About = () => {
  const values = [
    {
      icon: <Target size={48} />,
      title: "Innovation",
      description:
        "We push the boundaries of technology and creative thinking to solve real-world problems.",
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Learning",
      description:
        "Continuous growth through knowledge sharing, workshops, and collaborative projects.",
    },
    {
      icon: <Heart size={48} />,
      title: "Community",
      description:
        "Building meaningful connections and supporting each other's journey in tech.",
    },
    {
      icon: <Rocket size={48} />,
      title: "Impact",
      description:
        "Creating solutions that make a positive difference in our communities and beyond.",
    },
  ];

  return (
    <div className="about-section">
      <h2 className="about-title font-display scroll-animation">
        <TrueFocus
          sentence="About Hacked"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </h2>

      <p className="about-description scroll-animation">
        We are a passionate community of developers, designers, entrepreneurs,
        and dreamers who believe technology can change the world for the better.
      </p>

      {/* Mission Statement */}
      <div className="mission-card scroll-animation card">
        <h3 className="mission-title">Our Mission</h3>
        <p className="mission-text">
          To create an inclusive space where technology enthusiasts can learn,
          collaborate, and build innovative solutions that address real-world
          challenges. We believe that when diverse minds come together,
          extraordinary things happen.
        </p>
      </div>

      {/* Values Grid */}
      <div className="values-grid">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="value-card scroll-animation card-hover"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            <div className="value-icon">{value.icon}</div>
            <h4 className="value-title">{value.title}</h4>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="stats-section scroll-animation">
        <h3 className="stats-title">Our Growing Community</h3>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <p className="stat-label">Active Members</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">50+</div>
            <p className="stat-label">Events Hosted</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">100+</div>
            <p className="stat-label">Projects Built</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
