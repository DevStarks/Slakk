Channel.delete_all

c1 = Channel.create(name: "general", purpose: "This channel is for team-wide communication and announcements. All team members are in this channel.")
c2 = Channel.create(name: "random", purpose: "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.")
c3 = Channel.create(name: "other", purpose: "Another channel that only some users belong to.")




User.delete_all

12.times do
  user = User.create(
    username: Faker::Internet.user_name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: Faker::Internet.password(10, 20)
  )
  user.channel_ids += [c1.id, c2.id]
  user.channel_ids += [c3.id] if rand(2) == 1
end

guest = User.create(
  username: "GuestUser",
  first_name: "Guest",
  last_name: "User",
  password: "password"
)

guest.channel_ids += [c1.id, c2.id, c3.id]


c4 = Channel.create(direct_message: true, user_ids: [1,2,3])
c5 = Channel.create(direct_message: true, user_ids: [4,5,6,13])

Message.delete_all

User.all.each do |user|
  3.times do
    user.channels.sample.messages.create(
      body: Faker::Hipster.sentences(rand(4) + 1).join(" "),
      author_id: user.id
    )
  end
end
