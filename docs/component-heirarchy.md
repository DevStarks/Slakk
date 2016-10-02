
### Component Hierarchy

- AuthFormContainer
  - AuthForm

- CreateUserContainer
  - CreateUser

- HomeContainer
  - Home
    - UserShow
    - SidebarContainer
      - Sidebar
        - ConversationContainer
          - Conversation
            - ConversationHeader
            - MessageIndexContainer
              - MessageIndex
                - Message
                  - MessageActionsContainer
                    - MessageActions
                - EditMessageContainer
                  - EditMessage
            - MessageForm

- NewDM
  - SearchBar
  - SearchResultsContainer
    - SearchResults
      - UserListItem


- ChannelSearch    
  - SearchBar
  - SearchResultsContainer
    - SearchResults
      - ChannelListItem


### Routes


path='/signin' component='AuthFormContainer'
path='/signup/username' component='CreateUserContainer'
path='/signup/password' component='CreateUserContainer'

path='/' component='HomeContainer'
  path='/conversation/:id' component='ConversationContainer'
    path='/users/:id' component='UserShow'

path='/new-message' component='NewDM'
path='/channel-search' component='ChannelSearch'
