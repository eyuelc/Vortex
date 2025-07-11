export const users = [
  {
    user_id: "u001",
    user_fname: "Ethan",
    user_lname: "James",
    user_username: "EthanJ",
    user_email: "ethan.james@example.com",
    user_password: "hashed_password_1",
    user_channel: ["c001"],
    user_friends: ["u002", "u003"],
    user_profile: "https://images.unsplash.com/photo-1699524826369-57870e627c43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpYyUyMGNhcnRvb24lMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    user_id: "u002",
    user_fname: "Sophia",
    user_lname: "Lee",
    user_username: "SophLee",
    user_email: "sophia.lee@example.com",
    user_password: "hashed_password_2",
    user_channel: ["c001", "c002"],
    user_friends: ["u001", "u005"],
    user_profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlivxUCKSS_CWLBG4blPFe6VFDgdY1us2Mew&s"
  },
  {
    user_id: "u003",
    user_fname: "Liam",
    user_lname: "Smith",
    user_username: "LiamS",
    user_email: "liam.smith@example.com",
    user_password: "hashed_password_3",
    user_channel: ["c001"],
    user_friends: ["u001"],
    user_profile: "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWMlMjBjYXJ0b29uJTIwZ2FtaW5nfGVufDB8fDB8fHww"
  },
  {
    user_id: "u004",
    user_fname: "Ava",
    user_lname: "Martinez",
    user_username: "AvaM",
    user_email: "ava.martinez@example.com",
    user_password: "hashed_password_4",
    user_channel: ["c003"],
    user_friends: ["u005"],
    user_profile: "https://media.istockphoto.com/id/1466513068/photo/flying-gamepad-on-blue-background-creative-minimal-gaming-concept-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=i5OMqZemmgFkQ4xo9JvswCvZqPDzJQRdpQnxY8e4lXo="
  },
  {
    user_id: "u005",
    user_fname: "Noah",
    user_lname: "Brown",
    user_username: "NoahB",
    user_email: "noah.brown@example.com",
    user_password: "hashed_password_5",
    user_channel: ["c002"],
    user_friends: ["u002", "u004"],
    user_profile: "https://images.unsplash.com/photo-1740252117027-4275d3f84385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpYyUyMGNhcnRvb24lMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D"
  }
];


export const channels = [
  {
    "channel_id": "c001",
    "channel_name": "Fortnite>>Angle",
    "channel_users": ["u001", "u002","u003"],
    "channel_messages": [
      {
        "message_id": "m001",
        "user_id": "u001",
        "message_date": {
          "date": "2025-06-20",
          "time": "12:00:00"
        },
        "message_text": "Hey everyone, welcome to the general chat!",
        "message_type": "text"
      },
      {
        "message_id": "m002",
        "user_id": "u003",
        "message_date": {
          "date": "2025-06-20",
          "time": "12:05:00"
        },
        "message_text": "Thanks! Glad to be here.",
        "message_type": "text"
      }
    ],
    "channel_created_at": "2025-01-15T09:00:00Z",
    "channel_description": "General discussion for all users",
    "channel_pfp": "https://images.unsplash.com/photo-1607165697276-326e7955b6e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYW4lMjBwaWMlMjBjYXJ0b29uJTIwZ2FtaW5nfGVufDB8fDB8fHww"
  },
  {
    "channel_id": "c002",
    "channel_name": "King Clan",
    "channel_users": ["u002", "u005"],
    "channel_messages": [
      {
        "message_id": "m003",
        "user_id": "u002",
        "message_date": {
          "date": "2025-06-20",
          "time": "13:00:00"
        },
        "message_text": "Anyone up for a game tonight?",
        "message_type": "text"
      },
      {
        "message_id": "m004",
        "user_id": "u005",
        "message_date": {
          "date": "2025-06-20",
          "time": "13:10:00"
        },
        "message_text": "Count me in!",
        "message_type": "text"
      }
    ],
    "channel_created_at": "2025-02-20T15:00:00Z",
    "channel_description": "Discuss all things gaming",
    "channel_pfp": "https://images.unsplash.com/photo-1702078564355-1122eb6303cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsYW4lMjBwaWMlMjBjYXJ0b29uJTIwZ2FtaW5nfGVufDB8fDB8fHww"
  },
  {
    "channel_id": "c003",
    "channel_name": "Flavor Clan",
    "channel_users": ["u004"],
    "channel_messages": [
      {
        "message_id": "m005",
        "user_id": "u004",
        "message_date": {
          "date": "2025-06-20",
          "time": "14:00:00"
        },
        "message_text": "Check out this new track I found!",
        "message_type": "text"
      }
    ],
    "channel_created_at": "2025-03-01T10:30:00Z",
    "channel_description": "For music lovers",
    "channel_pfp": "https://images.unsplash.com/photo-1736166054893-85645d3d0a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsYW4lMjBwaWMlMjBjYXJ0b29uJTIwZ2FtaW5nfGVufDB8fDB8fHww"
  }
];

export const dms = [
  {
    dm_id: "dm001",
    participants: ["u001", "u002"],
    messages: [
      {
        message_id: "dm001-m1",
        sender_id: "u001",
        message_text: "Yo Sophia, are you joining the raid tonight?",
        message_date: { date: "2025-06-19", time: "20:30:00" },
        message_type: "text"
      },
      {
        message_id: "dm001-m2",
        sender_id: "u002",
        message_text: "Yup! Just gearing up 🔥",
        message_date: { date: "2025-06-19", time: "20:31:00" },
        message_type: "text"
      }
    ]
  },
  {
    dm_id: "dm002",
    participants: ["u001", "u003"],
    messages: [
      {
        message_id: "dm002-m1",
        sender_id: "u003",
        message_text: "Hey Ethan, what’s your build for the new character?",
        message_date: { date: "2025-06-18", time: "19:15:00" },
        message_type: "text"
      }
    ]
  },
  {
    dm_id: "dm003",
    participants: ["u002", "u005"],
    messages: [
      {
        message_id: "dm003-m1",
        sender_id: "u002",
        message_text: "Noah! That last round was insane 😂",
        message_date: { date: "2025-06-20", time: "14:00:00" },
        message_type: "text"
      },
      {
        message_id: "dm003-m2",
        sender_id: "u005",
        message_text: "We crushed it 🔥 GG!",
        message_date: { date: "2025-06-20", time: "14:02:00" },
        message_type: "text"
      }
    ]
  },
  {
    dm_id: "dm004",
    participants: ["u004", "u005"],
    messages: [
      {
        message_id: "dm004-m1",
        sender_id: "u004",
        message_text: "Noah, I made a playlist for today’s session 🎵",
        message_date: { date: "2025-06-19", time: "17:45:00" },
        message_type: "text"
      }
    ]
  }
];


