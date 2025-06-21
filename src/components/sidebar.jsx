import { Link, useLocation } from "react-router-dom";
import avatar from '../assets/img/avatar.avif';
import dm from '../assets/img/icons/dms.png';
import clan from '../assets/img/icons/clan.png';
import setting from '../assets/img/icons/settings.png';

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center gap-[1rem] [&>img]:h-[40px] [&>img]:w-[40px] h-screen w-[4%] bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-r border-[#2a2a2a] shadow-inner shadow-black/30 backdrop-blur-sm relative text-white [&>div]:cursor-pointer">
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <img src={avatar} alt="" className='rounded-full'/>

      <Link to="/dashboard/dms" className="flex flex-col w-full items-center">
        <div className={`${location.pathname === "/dashboard/dms" ? "bg-[#333] selected" : ""} w-full flex flex-col items-center`}>
          <img src={dm} alt="DMs" className="h-[30px] w-[30px]"/>
          <p className='text-[10px] text-center'>DMs</p>
        </div>
      </Link>

      <Link to="/dashboard/clan" className="flex flex-col w-full items-center">
        <div className={`${location.pathname === "/dashboard/clan" ? "bg-[#333] selected" : ""} w-full flex flex-col items-center`}>
          <img src={clan} alt="Clan" className="h-[30px] w-[30px]"/>
          <p className='text-[10px] text-center'>Clan</p>
        </div>
      </Link>

      <Link to="/dashboard/settings" className="flex flex-col w-full items-center">
        <div className={`${location.pathname === "/dashboard/settings" ? "bg-[#333] selected" : ""} w-full flex flex-col items-center`}>
          <img src={setting} alt="Settings" className="h-[30px] w-[30px]"/>
          <p className='text-[10px] text-center'>Settings</p>
        </div>
      </Link>
    </div>
  );
}
