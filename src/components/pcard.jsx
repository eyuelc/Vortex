export default function Pcard({ pfp, chName, lastMsg, selected }) {
  return (
    <div
      className={`flex gap-[1rem] relative p-[0.5rem] cursor-pointer border-b border-gray-500 ${
        selected ? 'selected' : ''
      }`}
    >
      <img src={pfp} alt="" className="h-[60px] w-[60px] rounded-full" />
      <div className="flex flex-col justify-around">
        <p className="font-bold">{chName}</p>
        <p className="text-[12px]">{lastMsg}</p>
      </div>
    </div>
  );
}
