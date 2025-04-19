import React, { useEffect, useRef, ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  backgroundColor: 'beige' | 'red' | 'black' | 'white';
  textColor?: 'white' | 'black';
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  backgroundColor,
  textColor = 'black',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const bgColorMap = {
    beige: 'bg-hacked-beige',
    red: 'bg-hacked-red',
    black: 'bg-hacked-black',
    white: 'bg-white',
  };

  const textColorMap = {
    white: 'text-white',
    black: 'text-hacked-black',
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`opacity-0 transition-opacity duration-1000 ease-in-out section-padding ${bgColorMap[backgroundColor]} ${textColorMap[textColor]} ${className || ''}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
