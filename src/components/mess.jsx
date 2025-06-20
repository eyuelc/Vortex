import { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function Mess() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmojiPicker]);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="relative w-[70%]">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Send a message"
        className="w-full h-[50px] bg-gray-800 rounded-[0.7rem] text-[13px] p-[1rem] pr-10 text-white"
      />

      <i
        className="fas fa-smile absolute right-10 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
        onClick={() => setShowEmojiPicker((prev) => !prev)}
      ></i>

      <i className="fas fa-paper-plane absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"></i>

      {showEmojiPicker && (
        <div
          ref={pickerRef}
          className="absolute bottom-[60px] right-0 z-50"
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
        </div>
      )}
    </div>
  );
}
