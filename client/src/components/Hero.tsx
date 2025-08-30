import React from "react";
import { ArrowRight, Code, Users, Zap } from "lucide-react";
import DotGrid from "./DotGrid";
import BlurText from "./BlurText";
import TextType from "./TextType";
import "../style/Hero.css";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <DotGrid
            dotSize={5}
            gap={8}
            baseColor="#e6e6e6ff"
            activeColor="#a5a5a4ff"
            proximity={110}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <h1 className="hero-title font-display animate-fade-in">
          <BlurText
            text="Welcome to Hacked"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="hero-title"
          />
        </h1>

        <p className="hero-subtitle animate-fade-in">
          <TextType
            text={[
              "A vibrant community of innovators, creators, and tech enthusiasts pushing the boundaries of what's possible.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons animate-fade-in">
          <a href="#about" className="btn-primary magnetic-button">
            Join Our Community
            <ArrowRight size={20} />
          </a>

          <a href="#events" className="btn-secondary">
            Explore Events
          </a>
        </div>

        {/* Feature highlights */}
        <div className="features-grid animate-fade-in">
          <div className="feature-card card-hover">
            <Code size={48} className="feature-icon" />
            <h3>Innovation Hub</h3>
            <p>Cutting-edge projects and breakthrough technologies</p>
          </div>

          <div className="feature-card card-hover">
            <Users size={48} className="feature-icon" />
            <h3>Community</h3>
            <p>Connect with like-minded tech enthusiasts</p>
          </div>

          <div className="feature-card card-hover">
            <Zap size={48} className="feature-icon" />
            <h3>Impact</h3>
            <p>Build solutions that matter to the world</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
