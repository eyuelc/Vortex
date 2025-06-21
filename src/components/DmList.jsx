import Pcard from "./pcard";
import { Link, useParams } from 'react-router-dom';
import { channels, users, dms } from "../data"; // ⬅️ import dms too

const currentUserId = "u002";

export default function DmList() {
  const { id: selectedId } = useParams(); // the currently selected friend id from URL
  const user = users.find((u) => u.user_id === currentUserId);
  const userFriends = user?.user_friends || [];

  const renderFriends = () =>
    userFriends.map((friendId) => {
      const friend = users.find((fr) => fr.user_id === friendId);
      if (!friend) return null;

      // find the DM that includes both users
      const dm = dms.find(dm =>
        dm.participants.includes(currentUserId) &&
        dm.participants.includes(friendId)
      );

      const lastmsg = dm?.messages.at(-1)?.message_text || "No msg yet";
      const isSelected = friend.user_id === selectedId;

      return (
        <Link key={friendId} to={`/dashboard/dms/${friend.user_id}`}>
          <Pcard
            pfp={friend.user_profile}
            chName={friend.user_username}
            lastMsg={lastmsg}
            selected={isSelected}
          />
        </Link>
      );
    });

  return <>{renderFriends()}</>;
}
