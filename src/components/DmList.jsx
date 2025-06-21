import Pcard from "./pcard";
import { channels, users } from "../data";

const currentUserId = "u002";

export default function DmList() {
  const user = users.find((u) => u.user_id === currentUserId);
  const userFriends = user?.user_friends || [];

  const renderFriends = () =>
    userFriends.map((friendId) => {
      const friend = users.find((fr) => fr.user_id === friendId);
      if (!friend) return null;

      const lastmsg = "No msg yet";

      return (
        <Pcard
          key={friendId}
          pfp={friend.user_profile}
          chName={friend.user_username}
          lastMsg={lastmsg}
        />
      );
    });

  return <>{renderFriends()}</>;
}
