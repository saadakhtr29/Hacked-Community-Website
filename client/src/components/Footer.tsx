import React from "react";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import "../style/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/hackedbyjh",
      label: "GitHub",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/JhHacked",
      label: "Twitter",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/hacked-jh/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:hello@hacked.community",
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#events", label: "Events" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const resources = [
    { href: "CommunityGuidelines", label: "Community Guidelines" },
    { href: "CodeOfConduct", label: "Code of Conduct" },
    { href: "PrivacyPolicy", label: "Privacy Policy" },
    { href: "TermsOfService", label: "Terms of Service" },
  ];

  return (
    <footer className="footer">
      <div className="footer-background" />

      <div className="container footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div>
            <div className="footer-brand font-display">
              <span className="footer-brand-highlight">Hacked</span>
            </div>
            <p className="footer-description">
              Building the future through innovation, collaboration, and
              community. Join us in creating technology that makes a difference.
            </p>

            {/* Contact Info */}
            <div className="footer-contact">
              <div>
                <MapPin size={16} />
                <span>Delhi, India</span>
              </div>
              <div>
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div>
                <Mail size={16} />
                <span>hello@hacked.community</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="footer-social"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="footer-newsletter">
              <p>Stay updated with our latest news</p>
              <div className="footer-newsletter-form">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Hacked Community. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="Privacy-Policy">Privacy Policy</a>
            <a href="Terms-of-Service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
