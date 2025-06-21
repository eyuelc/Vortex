import Pcard from "./pcard";
import { Link, useParams } from "react-router-dom";
import { channels, users } from "../data";

const currentUserId = "u002"; // Assuming this is the logged-in user

export default function ClanList() {
  const { id: selectedId } = useParams();  // get clan id from url params
  const user = users.find((u) => u.user_id === currentUserId);

  const userClans = user?.user_channel || [];

  const renderClans = () =>
    userClans.map((channelId) => {
      const channel = channels.find((ch) => ch.channel_id === channelId);

      if (!channel) return null;

      const lastMsg = channel.channel_messages.at(-1)?.message_text || "No messages yet";

      // check if this clan is selected
      const isSelected = channel.channel_id === selectedId;

      return (
        <Link key={channel.channel_id} to={`/dashboard/clan/${channel.channel_id}`}>
          <Pcard
            pfp={channel.channel_pfp}
            chName={channel.channel_name}
            lastMsg={lastMsg}
            selected={isSelected}  // pass selected prop
          />
        </Link>
      );
    });

  return <>{renderClans()}</>;
}
