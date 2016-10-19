# Slakk

[Heroku link](https://slakk.herokuapp.com/)

### Minimum Viable Product

Slakk is a clone of Slack, a collaborative instant-messaging app. This app is built using Ruby on Rails and React/Redux.

By 10/14, this app will demonstrate the following features with production-quality navigation, adequate seed data for a realistic experience, and appropriate CSS styling:

- Hosting on Heroku
- New account creation, login, and guest/demo login
- Live chat
- Channels
- Direct Message
- Teams or multi-person DM
- [Production README](../README.md)

### Design Docs
- [View Wireframes](./docs/wireframes)
- [React Components](./docs/component-heirarchy.md)
- [API Endpoints](./docs/api-endpoints.md)
- [DB Schema](./docs/schema.md)
- [Redux Structure](./docs/redux-structure.md)
- [Sample State](./docs/sample-state.md)

---
### Implementation Timeline

##### Phase 1: Backend setup and Front End User Authentication (2 days)
<br/>
**Objective**: Functioning rails project with front-end Authentication

 - New Rails project
 - User model/migration
 - Back end authentication (session/password)
 - StaticPages controller and root view
 - Webpack & react/redux modules
 - APIUtil to interact with the API
 - Redux cycle for frontend authentication
 - User signup/signin components
 - Blank landing component after signup/signin
 - Style signup/signin components
 - Seed users

##### Phase 2: Live Chat Implementation/Sidebar (3 days)
<br/>
**Objective**: Live chat with real-time message updates using websockets

- Message model
- Messages controller
- JBuilder views
- Components and Redux Cycles for:
  - Sidebar
  - Conversation
  - MessagesIndex
- API Util to fetch all messages
- Create message feature
- Edit message feature
- Pusher subscription for live message update
- Style sidebar and message related components


##### Phase 3: Channels (2 days)
<br/>
**Objective**: Users subscribe to channels and channels have many exclusive messages

- Channel model/controller
- ChannelSubscribes join table
- Components and Redux Cycles for:
  - ChannelsIndex
  - ChannelForm
  - UserSearch
  - ConversationHeader
- Seed channel data with corresponding users/messages
- MessagesIndex filtered by channel
- Pusher subscribes all of channel's users to feed
Edit feature
- Styling for ChannelForm, ConversationHeader, and ChannelIndex

##### Phase 4: Direct Messages (1 days)
<br/>
**Objective**: User can start private conversation with other user

- DirectMessages model/controller
- DirectMessageSubscribes join table
- Components and Redux Cycles for:
  - DirectMessagesIndex
  - DirectMessageForm
- Seed DM data with corresponding users/messages
- API call to fetch conversation if already exists
- MessagesIndex filtered by current DirectMessage
- Delete feature
- Styling for DirectMessageForm and DirectMessagesIndex

##### Phase 5: Multi-User DM/UserProfile Component (1 day)
<br/>
**Objective**: Direct Message Conversations with up to 8 people

- Update DirectMessageForm to take up to 8 people
- Pusher subscribes all of DM's users to feed
- Add direct_message_memberships association for users
- UserProfile Component
- API call to fetch userProfile info
- Styling for UserProfile

##### Bonus Features TBD

- Message Search
- Teams
- Notifications
- Reactions
