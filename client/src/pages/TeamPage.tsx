
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

const TeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
