export default function Message({ username, text, time, isOwnMessage }) {
  return (
    <div className="flex flex-col max-w-[70%]">
      <p className="text-xs text-gray-300 mb-1">{username}</p>
      <div
        className={`p-3 rounded-xl shadow text-white ${
          isOwnMessage ? 'bg-red-800' : 'bg-gray-800'
        }`}
      >
        {text}
      </div>
      <p className="text-[10px] text-gray-500 mt-1">{time}</p>
    </div>
  );
}
