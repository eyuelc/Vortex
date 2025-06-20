import avatar from '../assets/img/avatar.avif'; // example user avatar

export default function Pcard2() {
  return (
    <div className="flex gap-[1rem] relative p-[0.5rem] cursor-pointer border-b border-gray-500 selected">
      <img src={avatar} alt="" className="h-[60px] w-[60px] rounded-full" />
      <div className="flex flex-col justify-around">
        <p className="font-bold">Direct Message</p>
        <p className="text-[12px]">Chat with friends</p>
      </div>
      <p className="absolute p-[0.2rem] bg-green-500 rounded-full h-[20px] w-[20px] text-[10px] text-center top-[50%] right-[2rem]">5</p>
    </div>
  );
}
