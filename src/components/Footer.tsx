
import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hacked-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-hacked-red">H</span>acked
            </h3>
            <p className="mb-4 max-w-xs">
              Building a community of innovators, creators, and tech enthusiasts to shape the future together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hacked-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-hacked-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-hacked-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-hacked-red transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-hacked-red transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-hacked-red transition-colors">Home</a></li>
              <li><a href="#events" className="hover:text-hacked-red transition-colors">Events</a></li>
              <li><a href="#blog" className="hover:text-hacked-red transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-hacked-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2">123 Tech Avenue</p>
              <p className="mb-2">Innovation District, CA 90210</p>
              <p className="mb-2">contact@hacked.community</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Hacked Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
