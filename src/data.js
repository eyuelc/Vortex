export const users = [
  {
    "user_id": "u001",
    "user_fname": "Ethan",
    "user_lname": "James",
    "user_username": "EthanJ",
    "user_email": "ethan.james@example.com",
    "user_password": "hashed_password_1",
    "user_channel": "general"
  },
  {
    "user_id": "u002",
    "user_fname": "Sophia",
    "user_lname": "Lee",
    "user_username": "SophLee",
    "user_email": "sophia.lee@example.com",
    "user_password": "hashed_password_2",
    "user_channel": "gaming"
  },
  {
    "user_id": "u003",
    "user_fname": "Liam",
    "user_lname": "Smith",
    "user_username": "LiamS",
    "user_email": "liam.smith@example.com",
    "user_password": "hashed_password_3",
    "user_channel": "general"
  },
  {
    "user_id": "u004",
    "user_fname": "Ava",
    "user_lname": "Martinez",
    "user_username": "AvaM",
    "user_email": "ava.martinez@example.com",
    "user_password": "hashed_password_4",
    "user_channel": "music"
  },
  {
    "user_id": "u005",
    "user_fname": "Noah",
    "user_lname": "Brown",
    "user_username": "NoahB",
    "user_email": "noah.brown@example.com",
    "user_password": "hashed_password_5",
    "user_channel": "gaming"
  }
]

export const channels = [
  {
    "channel_id": "c001",
    "channel_name": "general",
    "channel_users": ["u001", "u003"],
    "channel_messages": [
      {
        "message_id": "m001",
        "user_id": "u001",
        "message_date": "2025-06-20T12:00:00Z",
        "message_text": "Hey everyone, welcome to the general chat!",
        "message_type": "text"
      },
      {
        "message_id": "m002",
        "user_id": "u003",
        "message_date": "2025-06-20T12:05:00Z",
        "message_text": "Thanks! Glad to be here.",
        "message_type": "text"
      }
    ],
    "channel_created_at": "2025-01-15T09:00:00Z",
    "channel_description": "General discussion for all users"
  },
  {
    "channel_id": "c002",
    "channel_name": "gaming",
    "channel_users": ["u002", "u005"],
    "channel_messages": [
      {
        "message_id": "m003",
        "user_id": "u002",
        "message_date": "2025-06-20T13:00:00Z",
        "message_text": "Anyone up for a game tonight?",
        "message_type": "text"
      },
      {
        "message_id": "m004",
        "user_id": "u005",
        "message_date": "2025-06-20T13:10:00Z",
        "message_text": "Count me in!",
        "message_type": "text"
      }
    ],
    "channel_created_at": "2025-02-20T15:00:00Z",
    "channel_description": "Discuss all things gaming"
  },
  {
    "channel_id": "c003",
    "channel_name": "music",
    "channel_users": ["u004"],
    "channel_messages": [
      {
        "message_id": "m005",
        "user_id": "u004",
        "message_date": "2025-06-20T14:00:00Z",
        "message_text": "Check out this new track I found!",
        "message_type": "text"
      }
    ],
    "channel_created_at": "2025-03-01T10:30:00Z",
    "channel_description": "For music lovers"
  }
]
