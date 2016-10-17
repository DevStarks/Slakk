
Channel.delete_all

c1 = Channel.create(name: "general", purpose: "This channel is for team-wide communication and announcements. All team members are in this channel.")
c2 = Channel.create(name: "random", purpose: "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.")
c3 = Channel.create(name: "other", purpose: "Another space for users to communicate")


User.delete_all

13.times do
  user = User.create(
    username: Faker::Internet.user_name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: Faker::Internet.password(10, 20)
  )
  user.channel_ids += [c1.id, c2.id]

  user.channel_ids += [c3.id] if rand(2) == 1

  user.image = File.open("app/assets/images/avatar#{rand(11) + 1}.png")
  user.save!
end

guest = User.create(
  username: "GuestUser",
  first_name: "Guest",
  last_name: "User",
  password: "password"
)

guest2 = User.create(
  username: "OtherGuest",
  first_name: "Other",
  last_name: "Guest",
  password: "password"
)

guest.channel_ids += [c1.id, c2.id, c3.id]
guest2.channel_ids += [c1.id, c2.id, c3.id]


dm1 = Channel.create(direct_message: true, user_ids: [1,2,3,guest.id, guest2.id])
dm2 = Channel.create(direct_message: true, user_ids: [4,5,2,3,6,guest.id, guest2.id])
dm3 = Channel.create(direct_message: true, user_ids: [7,10,2,guest.id, guest2.id])

Message.delete_all

sentences = [
  "Check out Devin's github page at https://github.com/DevStarks",
  "This app feels just like Slack, I almost thought it was the real thing!",
  "The repo for this app is located at https://github.com/DevStarks/Slakk",
  "Link to Devin Starks on LinkedIn: https://www.linkedin.com/in/devin-starks-37905642 ",
  "This site was built using Ruby on Rails and React.js",
  "Thank god for asynchronous javascript requests...otherwise I wouldn't be able to click on anything while messages are loading!",
  "Welcome to Slakk!!!!",
  "In case you accidentally delete a channel you can always rejoin by clicking the Channels header in the sidebar",
  "You can only edit or delete messages written by the current user, the message actions button to right of messages doesn't even appear otherwise.",
  "If you want to create a new direct-message just click the plus next to the direct-messages header in the sidebar. You can select as many users you want and search for specific users using the search bar.",
  "Messages sent to any DM or channel will pop up automatically -- no need to refresh!",
  "If you're signed in as a guest user and would like to make your own account feel free! Don't worry, your password will be protected using BCrypt's hashing technology.",
  "Slakk is a clone of the popular messaging app, Slack",
  "Hey there Slakker!!"
]


User.all.shuffle.each do |user|
  user.channels.each do |channel|
    channel.messages.create(
    body: sentences.sample,
    author_id: user.id
    )
  end
end
