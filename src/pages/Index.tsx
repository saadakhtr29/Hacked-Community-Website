
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Events from '@/components/Events';
import Blog from '@/components/Blog';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Section id="hero" backgroundColor="beige" className="pt-20">
          <Hero />
        </Section>

        {/* About Section */}
        <Section id="about" backgroundColor="white" textColor="black">
          <About />
        </Section>

        {/* Team Section */}
        <Section id="team" backgroundColor="beige" textColor="black">
          <Team />
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
          <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
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
