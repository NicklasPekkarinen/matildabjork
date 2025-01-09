'use client';

import { useEffect, useState } from 'react';

const SlidingExhibition = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full text-center">
      <div
        className={`transform transition-transform duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-sm text-custom-blue space-y-2 mt-32">
          <p className="font-bold">Aktuella utställningar</p>
          <p>Stockholms konstsalong</p>
          <p>29 mars - 6 april 2025</p>
          
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <SlidingExhibition />
    </div>
  );
}
