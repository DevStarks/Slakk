
Channel.delete_all

c1 = Channel.create(name: "general", purpose: "This channel is for team-wide communication and announcements. All team members are in this channel.")
c2 = Channel.create(name: "random", purpose: "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.")
c3 = Channel.create(name: "other", purpose: "#{Faker::ChuckNorris.fact}")
c4 = Channel.create(name: "Chuck Norris", purpose: "#{Faker::Hipster.sentence}")
c5 = Channel.create(name: "#{Faker::Space.agency}", purpose: "#{Faker::Hipster.sentence}")
c6 = Channel.create(name: "#{Faker::Music.instrument}", purpose: "#{Faker::Hipster.sentence}")
c7 = Channel.create(name: "#{Faker::Food.ingredient}", purpose: "#{Faker::Hipster.sentence}")
c8 = Channel.create(name: "other", purpose: "#{Faker::Hipster.sentence}")




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

guest.channel_ids += [c1.id, c2.id, c3.id, c4.id]


dm1 = Channel.create(direct_message: true, user_ids: [1,2,3,guest.id])
dm2 = Channel.create(direct_message: true, user_ids: [4,5,6,guest.id])
dm3 = Channel.create(direct_message: true, user_ids: [7,10,2,guest.id])
dm4 = Channel.create(direct_message: true, user_ids: [4,11,8,guest.id])

Message.delete_all

User.all.shuffle.each do |user|
  10.times do
    user.channels.sample.messages.create(
      body: Faker::Hipster.sentences(rand(4) + 1).join(" "),
      author_id: user.id
    )
  end
end
