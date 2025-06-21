import { useParams, useLocation } from 'react-router-dom';
import chatbg from '../assets/img/bg3.png';
import { users, channels, dms } from '../data.js';
import Message from './message.jsx';
import Mess from './mess.jsx';
import Call from './call.jsx';
import Membs from './members.jsx';

const currentUserId = 'u002';

export default function Chat() {
  const { id } = useParams();
  const location = useLocation();

  const isClan = location.pathname.includes('/clan');
  const isDm = location.pathname.includes('/dms');

  let messages = [];
  let members = [];

  if (isClan) {
    const channel = channels.find(ch => ch.channel_id === id);
    if (channel) {
      messages = channel.channel_messages;
      members = channel.channel_users;
    }
  } else if (isDm) {
    const dm = dms.find(
      dm =>
        dm.participants.includes(currentUserId) &&
        dm.participants.includes(id)
    );
    if (dm) {
      messages = dm.messages;
      members = dm.participants;
    }
  }

  const renderMessages = () => {
    if (!id) return <p className="text-white text-center">Select a chat to view messages</p>;

    if (!messages.length) return <p className="text-white text-center">No messages yet</p>;

    return messages.map((msg) => {
      const senderId = msg.sender_id || msg.user_id;
      const user = users.find(u => u.user_id === senderId);
      const isOwn = senderId === currentUserId;

      return (
        <div key={msg.message_id} className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
          <Message
            username={user?.user_username || 'Unknown'}
            text={msg.message_text}
            time={msg.message_date?.time || '--:--'}
            isOwnMessage={isOwn}
          />
        </div>
      );
    });
  };

  const renderMembers = () => {
    if (!id) return null;

    return members
      .filter(uid => uid !== currentUserId)
      .map((usrId, i) => {
        const user = users.find(u => u.user_id === usrId);
        if (!user) return null;
        return <Membs key={i} pfp={user.user_profile} usrname={user.user_username} />;
      });
  };

  return (
    <div className="w-full h-screen relative flex justify-between bg-cover bg-center"
         style={{ backgroundImage: `url(${chatbg})` }}>
      <div className='h-[100vh] w-[75%]'>
        <div className="overflow-y-auto p-6 space-y-4 h-[85%]">
          {renderMessages()}
        </div>
        {id && (
          <div className="absolute bottom-[1rem] w-full left-[10%]">
            <Mess />
          </div>
        )}
      </div>
      {isClan && id && (
        <div className="w-[25%] flex flex-col items-center gap-[0.5rem] text-white">
            <Call />
            {(() => {
            const channel = channels.find(ch => ch.channel_id === id);
            return channel ? (
                <div className="flex flex-col items-center mt-4 text-center">
                <img
                    src={channel.channel_pfp}
                    alt="Channel"
                    className="w-[80px] h-[80px] rounded-xl mb-2 object-cover"
                />
                <p className="font-bold text-lg">{channel.channel_name}</p>
                <p className="text-sm text-gray-300 px-2">{channel.channel_description}</p>
                </div>
            ) : null;
            })()}
            <p className='font-bold mt-4'>Members</p>
            {renderMembers()}
        </div>
        )}

      {isDm && id && (
            <div className="w-[25%] flex flex-col items-center gap-[0.5rem] text-white">
                <Call />
                {(() => {
                    const friendId = members.find(uid => uid !== currentUserId);
                    const friend = users.find(u => u.user_id === friendId);
                    return friend ? (
                        <div className="flex flex-col items-center mt-4">
                        <img src={friend.user_profile} className="w-[80px] h-[80px] rounded-full mb-2" />
                        <p className="font-bold text-lg">{friend.user_username}</p>
                        <p className="text-sm text-gray-300">{friend.user_email}</p>
                        </div>
                    ) : null;
                    })()}
                </div>
                )}
      
    </div>
  );
}
