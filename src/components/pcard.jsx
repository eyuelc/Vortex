import avatar from '../assets/img/clanavatar.png'
export default function Pcard() {
    return(
        <div className="flex gap-[1rem] relative p-[0.5rem] cursor-pointer border-b border-gray-500">
            <img src={avatar} alt="" className="h-[70px] w-[70px] rounded-full"/>
            <div className="flex flex-col justify-around">
            <p className="font-bold">My Clan</p>
            <p className="text-[12px]">Les gooo!</p>
        </div>
            <p className="absolute p-[0.2rem] bg-red-500 rounded-full h-[20px] w-[20px] text-[10px] text-center top-[50%] right-[2rem]">2</p>
        </div>
    )
}