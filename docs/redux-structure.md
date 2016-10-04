# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer.

Using this document, you will be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `CreateUser` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `LoginForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from button in `Sidebar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `requestCurrentUser`
  0. invoked from `App` in `onEntry`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Channel Cycles

### Channel API Request Actions

* `fetchAllChannels`
  0. invoked from `ChannelsIndex` `willMount`
  0. `GET /api/channels` is called.
  0. `receiveAllChannels` is set as the success callback.

* `createChannel`
  0. invoked from `ChannelForm` `onSubmit`
  0. `POST /api/channels` is called.
  0. `receiveChannel` is set as the success callback.

* `updateChannel`
  0. invoked from `ChannelForm` `onSubmit`
  0. `PATCH /api/channels/:id` is called.
  0. `receiveChannel` is set as the success callback.

* `leaveChannel`
  0. invoked from delete channel button `onClick`
  0. `DELETE/api/channel_members/` is called.
  0. `removeChannel` is set as the success callback.

### Channel API Response Actions

* `receiveAllChannels`
  0. invoked from an API callback
  0. the `ChannelReducer` updates `channel` in the application's state.

* `receiveChannel`
  0. invoked from an API callback
  0. the `ChannelReducer` updates `channel[id]` in the application's state.

* `removeChannel`
  0. invoked from an API callback
  0. the `ChannelReducer` removes `channel[id]` from the application's state.

## DirectMessage Cycles

### DirectMessage API Request Actions

* `fetchAllDirectMessages`
  0. invoked from `MessagesIndex` `willMount`/`willReceiveProps`
  0. `GET /api/direct_messages` is called.
  0. `receiveAllDirectMessages` is set as the success callback.

* `createDirectMessage`
  0. invoked from new directMessage button `onClick`
  0. `POST /api/direct_messages` is called.
  0. `receiveDirectMessage` is set as the callback.

* `leaveDirectMessage`
  0. invoked from delete directMessage button `onClick`
  0. `DELETE /api/direct_message_memberships/?with=params` is called.
  0. `removeDirectMessage` is set as the success callback.

### DirectMessages API Response Actions

* `receiveAllDirectMessages`
  0. invoked from an API callback.
  0. The `DirectMessages` reducer updates `directMessages` in the application's state.

* `receiveDirectMessage`
  0. invoked from an API callback.
  0. The `DirectMessages` reducer updates `directMessages[id]` in the application's state.

* `removeDirectMessage`
  0. invoked from an API callback.
  0. The `DirectMessage` reducer removes `directMessages[id]` from the application's state.

## Messages Cycles

### Messages API Request Actions

* `fetchAllMessages`
  0. invoked from `MessagesIndex` `willMount`/`willReceiveProps`
  0. `GET /api/messages` is called.
  0. `receiveAllMessages` is set as the success callback.

* `createMessage`
  0. invoked from `MessageForm` `onSubmit`
  0. `POST /api/messages` is called.
  0. `receiveSingleMessage` is set as the success callback.

* `updateMessage`
  0. invoked from `EditMessage` `onSubmit`
  0. `POST /api/messages` is called.
  0. `receiveSingleMessage` is set as the success callback.

* `destroyMessage`
  0. invoked from `MessageActions` delete button `onClick`
  0. `DELETE /api/messages/:id` is called.
  0. `removeMessage` is set as the success callback.

### Messages API Response Actions

* `receiveAllMessages`
  0. invoked from an API callback
  0. the `MessageReducer` updates `messages` in the application's state.

* `receiveSingleMessage`
  0. invoked from an API callback
  0. the `MessageReducer` updates `messages[id]` in the application's state.

* `removeMessage`
  0. invoked from an API callback
  0. the `MessageReducer` removes `messages[id]` from the application's state.
