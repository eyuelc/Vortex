import Mess from './mess';
import Message from './message.jsx'
import chatbg from '../assets/img/bg3.png';
import { channels } from '../data.js'
import { users } from '../data.js'
import Call from './call.jsx'
import Membs from './members.jsx'

const currentUserId = 'u002';
const currentChannelId = 'c001'





export default function Chat() {
    const currentChannel = channels.find(ch => ch.channel_id === currentChannelId);
    const renderMessages = () => {
        return currentChannel.channel_messages.map((msg) => {
            const user = users.find(u => u.user_id === msg.user_id);
            const isOwnMessage = msg.user_id === currentUserId;
                return (
                <div
                    key={msg.message_id}
                    className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                >
                    <Message
                    username={user.user_username}
                    text={msg.message_text}
                    time={msg.message_date.time}
                    isOwnMessage={isOwnMessage}
                    />
                </div>
                );
            });
        };
        const renderMembers = () => {
  const currentChannel = channels.find(ch => ch.channel_id === currentChannelId);
    return currentChannel.channel_users.map((usrId, i) => {
        const user = users.find(u => u.user_id === usrId);
        return (
        <Membs 
            key={i}
            pfp={user.user_profile}
            usrname={user.user_username}
        />
        );
    });
    };


  return (
    <div
      className="w-full h-screen relative flex justify-between bg-cover bg-center"
       style={{ backgroundImage: `url(${chatbg})` }}
    >
        <div className='h-[100vh] w-[75%]'>
            <div className="overflow-y-auto p-6 space-y-4 h-[85%]">
                    {renderMessages()}
            </div>

            <div className="absolute bottom-[1rem] w-full left-[10%]">
                <Mess />
            </div>
        </div>
        <div className="w-[25%] flex flex-col items-center gap-[0.5rem]">
            <Call />
            <p className='font-bold'>Members</p>
            {renderMembers()}
            
        </div>
      
    </div>
  );
}
