import React, { useState, useEffect } from "react";
import Join from './join'

const bubbles = [
  "Hey, squad ready?",
  "Yeah, let's crush this game!",
  "Voice chat on?",
  "On. Let's go!",
];

export default function Jac() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev + 1) % (bubbles.length + 1)); 
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[70vh] w-full bg-black text-white px-12 items-center text-center">
      <div className="relative w-1/2 pr-12 flex flex-col justify-center">
        <div className="absolute inset-0 bg-red-700 opacity-40 rounded-lg blur-4xl -z-10"></div>

        
        <h2 className="text-4xl font-bold mb-4">Join a Clan & Dominate</h2>
        <p className="mb-6 text-gray-300">
            Connect with players who share your passion. Form strategies, win tournaments, and be part of a community that never quits.
        </p>
        <Join />
        </div>

      <div className="w-1/2 flex flex-col justify-end gap-4 max-w-md ml-auto">
        {bubbles.slice(0, visibleCount).map((text, i) => (
          <div
            key={i}
            className="bg-red-700 text-white px-4 py-2 rounded-xl shadow-lg origin-bottom-right animate-popIn self-end max-w-[70%]"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
