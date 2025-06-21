import Pcard from "./pcard";
import { channels, users } from "../data";

const currentUserId = "u002"; // Assuming this is the logged-in user

export default function ClanList() {
  const user = users.find((u) => u.user_id === currentUserId);

  const userClans = user?.user_channel || [];

  const renderClans = () =>
    userClans.map((channelId) => {
      const channel = channels.find((ch) => ch.channel_id === channelId);

      if (!channel) return null;

      const lastMsg = channel.channel_messages.at(-1)?.message_text || "No messages yet";

      return (
        <Pcard
          key={channel.channel_id}
          pfp={channel.channel_pfp}
          chName={channel.channel_name}
          lastMsg={lastMsg}
        />
      );
    });

  return <>{renderClans()}</>;
}
