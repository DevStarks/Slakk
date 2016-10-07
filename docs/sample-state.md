```js
{
  session: {
    currentUser: {
      id: "1",
      username: "Devin"
    },
    tempUser: null,
    errors: ["Invalid credentials."],
  },
  channels: {
    1: {
      id: "1",
      name: "channel-name"
    },
    errors: ["Channel name can't be blank."],
  },
  directMessages: {
    1: {
      id: "1",
    }
  },
  message: {
    messages: {
      1: {
        id: "1",
        body: "first message",
        author: {
          username: "author1",
          first_name: "Tommy",
          last_name: "Pickles",
          picture_url: "/assets/aaa.jpg"
        },
        created_at: "03:24:12 PM GMT"
      },
      2: {
        id: "1",
        body: "second message",
        author: {
          username: "author2",
          first_name: "Dill",
          last_name: "Pickles",
          picture_url: "/path/bbb.jpg"
        },
        created_at: "03:24:12 PM GMT"
      }
    }
  },
  user_profile: {
    id: "1"
    name: "username",
    first_name: "Devin",
    last_name: "Starks",
    picture_url: "/path/ccc.jpg"
  }
}
```
