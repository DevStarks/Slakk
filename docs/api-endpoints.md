# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`

- `DELETE /api/session`

- `GET /api/session`
  - returns current user if any

### Channels

- `GET /api/channels`

- `POST /api/channels`

- `PATCH /api/channels/:id`

### Channel Memberships

- `DELETE/api/channel_members/`
  - accepts `user_id` and `channel_id` query param to remove association

### Direct Messages

- `GET /api/direct_messages`

- `POST /api/direct_messages`

### Direct Message Memberships

- `DELETE/api/conversation_members/`
  - accepts `user_id` and `direct_message_id` query param to remove association

### Messages

- `GET /api/channels/:id/messages`

- `POST /api/messages`

- `DELETE /api/messages/:id`
