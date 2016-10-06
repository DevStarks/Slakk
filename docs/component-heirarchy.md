
## Component Hierarchy

**LoginPage**
  - HeaderAuthButton
  - LoginFormContainer
    - LoginForm

**MasterSignupContainer**
  - SignUpPage
    - UsernameSignup
    - PasswordSignup

**HomeContainer**
  - Home
    - UserProfile
    - SidebarContainer
      - Sidebar
        - ChannelsIndex
        - DirectMessagesIndex
        - ConversationContainer
          - Conversation
            - ConversationHeader
            - MessagesIndexContainer
              - MessagesIndex
                - Message
                  - MessageActionsContainer
                    - MessageActions
                - EditMessageContainer
                  - EditMessage
            - MessageForm

**DirectMessageForm**
  - SearchBar
  - SearchResultsContainer
    - SearchResults
      - UserListItem


**ChannelSearch**
  - SearchBar
  - SearchResultsContainer
    - SearchResults
      - ChannelListItem

**ChannelFormContainer**
  - ChannelForm
    - SearchBar
    - SearchResultsContainer
      - SearchResults
        - UserListItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-in"          | "LoginFormContainer"   |
| "/sign-up/username" | "SignUpFormContainer" |
| "/sign-up/password" | "SignUpFormContainer" |
| "/"                 | "HomeContainer"       |
| "/conversation/:id" | "ConversationContainer" |
| "/conversation/:id/users/:username" | "UserProfile" |
| "/new-message"      | "DirectMessageForm" |
| "/new-channel"      | "ChannelFormContainer"
| "/channel-search"   | "ChannelSearch" |
