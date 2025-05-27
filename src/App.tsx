import React, { useEffect, useRef } from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      cardRef.current?.classList.add('animate-in');
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-800 dark:via-neutral-900 dark:to-black flex items-center justify-center p-4">
      <div
        ref={cardRef}
        className="card-container opacity-0 transform translate-y-8 transition-all duration-700 ease-out w-full max-w-md"
      >
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[24px] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <ProfileCard />
        </div>
        <footer className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} | Made by Bharath
        </footer>
      </div>
    </div>
  );
}

export default App;
