import logo from '../assets/img/logo.png'
import Join from './join'

function Hero() {
    return (
        <div className="relative h-[100vh] w-full bg-black overflow-hidden text-white">
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 opacity-20 blur-3xl animate-pulse z-0" />
            <div className="relative z-10 flex flex-col h-full">
                <nav className="p-[1rem] flex justify-between">
                    <div className="flex items-center gap-[1rem]">
                        <img src={logo} alt="Logo" className="h-[50px] w-[50px]" />
                        <div className="flex gap-[1rem] p-[0.5rem] items-center rounded-[0.7rem] bg-[rgba(255,255,255,0.15)]">
                            <a href="#home" className="text-[15px] selected">Home</a>
                            <a href="#about" className="text-[15px]">About Us</a>
                            <a href="#join" className="text-[15px]">Join a Clan</a>
                            <a href="#features" className="text-[15px]">Features</a>
                            <a href="" className="text-[15px]">Login/Register</a> 
                        </div>
                    </div>
                    <Join />
                    
                </nav>

                
                <div className="flex flex-col h-[80%] w-full items-center justify-center gap-[1rem]">
                    <p className="text-[1.7rem] font-bold w-[60%] text-center bg-gradient-to-r from-white to-red-800 bg-clip-text text-transparent">
                        Where Gamers Connect, Chat, and Conquer — All in One Place. Create your clan, jump into voice or video
                    </p>
                    <div className="flex [&>p]:text-[13px] [&>p]:text-red-100 gap-[1rem]">
                        <p><i className="fa-solid fa-comment text-red-500"></i> Real-time chat</p>
                        <p><i className="fa-solid fa-microphone"></i> Voice Calls</p>
                        <p><i className="fa-solid fa-tower-cell"></i> Video Calls</p>
                        <p><i className="fa-solid fa-gamepad text-red-500"></i> Game-Focused UI</p>
                    </div>
                    <div className="flex gap-[1rem]">
                        <Join />
                        <button className="cursor-pointer bg-red-600 hover:bg-red-700 transition rounded-[0.6rem] py-3 px-6 font-semibold w-max">
                            Login
                        </button>
                    </div>
                    
                </div>
                <div className="flex [&>i]:text-[1.3rem] gap-[0.7rem]">
                    <p className='font-bold'>Follow Us</p>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Hero;
