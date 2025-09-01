import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Blog from '../components/Blog';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Section id="hero" backgroundColor="beige">
          <Hero />
        </Section>

        {/* About Section */}
        <Section id="about" backgroundColor="white" textColor="black">
          <About />
        </Section>
        
        {/* Events Section */}
        <Section id="events" backgroundColor="red" textColor="white">
          <Events />
        </Section>
        
        {/* Blog Section */}
        <Section id="blog" backgroundColor="beige">
          <Blog />
        </Section>
        
        {/* Contact Section */}
        <Section id="contact" backgroundColor="black" textColor="white">
          <h2 
            style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: 700,
              marginTop: '4rem',
              marginBottom: '1rem',
              textAlign: 'center',
              color: '#000000ff',
            }}
          >
            Contact Us
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              textAlign: 'center',
              marginBottom: '3rem',
              maxWidth: '48rem',
              margin: '0 auto 3rem auto',
              color: 'rgba(0, 0, 0, 0.8)',
            }}
          >
            Have questions or want to get involved? Reach out to our team.
          </p>
          <ContactForm />
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;