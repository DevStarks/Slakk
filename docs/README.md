<!-- This is your Development README, which will:

outline the architecture,
show wireframes,
describe features, and
outline a development schedule for your application.




api-endpoints.md
component-heirarchy.md
redux-structure.md
sample-state.md
schema.md -->

# Slakk

[Heroku link](https://slakk.herokuapp.com/)

### Minimum Viable Product

Slakc is a clone of Slack, a collaborative instant-messaging app. This app is built using Ruby on Rails and React/Redux.

By 10/14, this app will demonstrate the following features with production-quality navigation, adequate seed data for a realistic experience, and appropriate CSS styling:

- Hosting on Heroku
- New account creation, login, and guest/demo login
- Live chat
- Channels
- Direct Message
- Teams or multi-person DM
- [Production README](../README.md)

### Design Docs
- [View Wireframes](./wireframes)
- [React Components](./component-heirarchy.md)
- [API Endpoints](./api-endpoints.md)
- [DB Schema](./schema.md)
- [Redux Structure](./redux-structure.md)
- [Sample State](./sample-state.md)
---
### Implementation Timeline

##### Phase 1: Backend setup and Front End User Authentication (2 days)
<br/>
**Objective**: Functioning rails project with front-end Authentication

 New Rails project
 User model/migration
 Back end authentication (session/password)
 StaticPages controller and root view
 Webpack & react/redux modules
 APIUtil to interact with the API
 Redux cycle for frontend authentication
 User signup/signin components
 Blank landing component after signup/signin
 Style signup/signin components
 Seed users
 Review phase 1
