import avatar from '../assets/img/avatar.avif';
import dm from '../assets/img/icons/dms.png'
import clan from '../assets/img/icons/clan.png'
import setting from '../assets/img/icons/settings.png'

export default function Sidebar() {
    return (
        <div className="flex flex-col items-center gap-[1rem] [&>img]:h-[40px] [&>img]:w-[40px] h-screen w-[4%] bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-r border-[#2a2a2a] shadow-inner shadow-black/30 backdrop-blur-sm relative text-white [&>div]:cursor-pointer">

            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <img src={avatar} alt="" className='rounded-full'/>
            <div className='flex flex-col w-full [&>img]:h-[30px] [&>img]:w-[30px] items-center'>
                <img src={dm} alt=""/>
                <p className='text-[10px] text-center'>DMs</p>
            </div>
            <div className='selected w-full flex flex-col [&>img]:h-[30px] [&>img]:w-[30px] items-center'>
                <img src={clan} alt=""/>
                <p className='text-[10px] text-center'>Clan</p>
            </div>
            <div className='flex flex-col w-full [&>img]:h-[30px] [&>img]:w-[30px] items-center'>
                <img src={setting} alt=""/>
                <p className='text-[10px] text-center'>Settings</p>
            </div>
            
        </div>

    );
}
