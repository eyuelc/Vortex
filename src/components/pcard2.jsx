export default function Pcard2() {
  return (
    <div className="flex gap-[1rem] relative p-[0.5rem] cursor-pointer border-b border-gray-500">
            <img src={props.pfp} alt="" className="h-[60px] w-[60px] rounded-full"/>
            <div className="flex flex-col justify-around">
            <p className="font-bold">{props.chName}</p>
            <p className="text-[12px]">{props.lastMsg}</p>
        </div>
            
      </div>
  );
}
