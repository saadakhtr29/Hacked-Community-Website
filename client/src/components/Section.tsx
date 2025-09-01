import React from 'react';
import '../style/Section.css';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: 'beige' | 'red' | 'black' | 'white';
  textColor?: 'white' | 'black';
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  backgroundColor = 'white',
  textColor = 'black',
  className = ''
}) => {
  return (
    <section
      id={id}
      className={`section ${backgroundColor} text-${textColor} ${className}`}
    >
      {backgroundColor === 'beige' && (
        <div className="beige-overlay" />
      )}
      
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
