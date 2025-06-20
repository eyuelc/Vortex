import { useEffect } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gif from '../assets/img/cube.gif'


function About() {
  const quoteRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-50%"]);


  const glowRef = useRef(null);

  useEffect(() => {
    const lines = glowRef.current.querySelectorAll('.maze-block');

    const handleMouseMove = (e) => {
      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          line.classList.add('glow');
        } else {
          line.classList.remove('glow');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center h-[150vh]">
      <div
        ref={glowRef}
        className="relative flex flex-col items-center justify-around h-[80vh] w-[50%] overflow-hidden"
      >
        {/* 🔧 Blocky Maze BG */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid of horizontal and vertical lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="maze-block absolute left-0 w-full h-[2px]"
              style={{ top: `${i * 20}%` }}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="maze-block absolute top-0 h-full w-[2px]"
              style={{ left: `${i * 20}%` }}
            />
          ))}
        </div>

        {/* 💬 Foreground Content */}
        <div className="z-10 flex flex-col items-center gap-[0.3rem]">
          <p className="text-[1.5rem] font-bold">Built for Gamers. Designed for Victory.</p>
          <p>Vortex isn’t just another chat app — it’s your squad’s home base.</p>
          <p className="text-[12px] text-gray-400 text-center">
            Vortex brings together gamers from every corner of the globe with 
            crystal-clear voice, instant video calls, and lightning-fast chat — all in one unified hub.
            Whether you're strategizing for a tournament or just chilling with your squad,
            Vortex gives you the tools to stay connected, competitive, and in control.
          </p>
        </div>

        <div className="z-10 self-start flex flex-col items-center pl-[4rem]">
          <p className="font-bold">20k<span className="text-red-500">+</span> Users</p>
          <p className="text-[12px]">Worldwide</p>
        </div>
        <div className="z-10 self-end flex flex-col items-center pr-[4rem]">
          <p className="font-bold">350k<span className="text-red-500">+</span> Calls</p>
          <p className="text-[12px]">on video and voice</p>
        </div>
        <div className="z-10 self-start flex flex-col items-center pl-[4rem]">
          <p className="font-bold">100<span className="text-red-500">+</span> Countries</p>
          <p className="text-[12px]">Countries</p>
        </div>
      </div>
      <motion.div
        ref={quoteRef}
        style={{ x }}
        className="flex w-full justify-center mt-15"
      >
        <p className="text-[3.5rem] bg-gradient-to-r from-white to-red-800 bg-clip-text text-transparent font-semibold text-center whitespace-nowrap">
          Victory doesn’t wait — it listens, speaks, and strikes.
        </p>
      </motion.div>
      <div className="flex">
          <div className="pl-[10rem] [&>p]:text-[1.7rem] [&>p]:font-bold relative">
            <img src={gif} alt="" className="h-[250px]"/>
        </div>
        
      </div>
      
      
    </div>
  );
}

export default About;
