import { useState } from "react";

const features = [
  {
    icon: "💬",
    title: "Real-Time Chat",
    desc: "Instant messages with ultra-low latency and rich media support.",
  },
  {
    icon: "🎙️",
    title: "Crystal-Clear Voice",
    desc: "Lag-free, high-fidelity voice channels for your squad.",
  },
  {
    icon: "📹",
    title: "Video Calls",
    desc: "Face-to-face strategy sessions with low bandwidth usage.",
  },
  // add more if needed
];

export default function Features() {
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section className="relative bg-black text-white py-20 px-6">
      <h2 className="text-center text-4xl font-bold mb-12 font-orbitron">
        Features That Give You The Edge
      </h2>

      <div className="flex gap-8 justify-center max-w-6xl mx-auto flex-wrap">
        {features.map(({ icon, title, desc }, i) => {
          const isHovered = hovered === i;

          // Glow circle style positioned at mouse pointer relative to card
          const glowStyle = {
            position: "absolute",
            pointerEvents: "none",
            top: mousePos.y,
            left: mousePos.x,
            width: 220,
            height: 220,
            background:
              isHovered
                ? "radial-gradient(circle, rgba(164,12,12,0.1) 0%, transparent 80%)"
                : "transparent",
            borderRadius: "50%",
            filter: "blur(35px)",
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.3s ease",
            opacity: isHovered ? 1 : 0,
            zIndex: 0,
          };

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              className={`relative cursor-pointer rounded-xl border border-green-800 bg-green-900
                transition-opacity duration-500
                opacity-80
                flex flex-col p-8 w-64 min-h-[260px]`}
            >
              {/* Glow effect */}
              <div style={glowStyle} />

              <div className="text-6xl mb-4 text-red-500 z-10 select-none">{icon}</div>
              <h3 className="text-xl font-bold mb-2 z-10">{title}</h3>
              <p className="text-gray-300 text-sm z-10">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
