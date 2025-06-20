export default function Membs(props) {
    return (
        <div className="flex w-full h-[9vh] rounded border border-gray-500 items-center p-[1rem] justify-between 
                        bg-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <img 
                    src={props.pfp} 
                    alt="avatar" 
                    className="rounded-full h-[40px] w-[40px] object-cover"
                />
                <p>{props.usrname}</p>
            </div>
            <div className="flex flex-col items-center text-white cursor-pointer">
                <i className="fa-solid fa-comment"></i>
                <p className="text-[10px]">Chat</p>
            </div>
        </div>
    );
}
