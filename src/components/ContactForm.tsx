
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      toast({
        title: "Message Sent!",
        description: "Thanks for contacting us. We'll get back to you soon.",
      });
      
      // Reset the submitted state after a delay
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'events', label: 'Events & Meetups' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'membership', label: 'Membership' },
    { value: 'feedback', label: 'Feedback' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 animate-fade-in max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-hacked-black">Get in Touch</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hacked-red"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hacked-red"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hacked-red"
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hacked-red"
            placeholder="Your message"
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-md font-semibold text-white transition-colors ${
              submitted 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-hacked-red hover:bg-opacity-90'
            }`}
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : submitted ? (
              <>
                <Check size={18} className="mr-2" /> Sent!
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" /> Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
