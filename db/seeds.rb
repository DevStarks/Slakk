
Channel.delete_all

c1 = Channel.create(name: "general", purpose: "This channel is for team-wide communication and announcements. All team members are in this channel.")
c2 = Channel.create(name: "random", purpose: "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.")
c3 = Channel.create(name: "other", purpose: "#{Faker::ChuckNorris.fact}")
c4 = Channel.create(name: "Chuck Norris", purpose: "#{Faker::Hipster.sentence}")
c5 = Channel.create(name: "#{Faker::Space.agency}", purpose: "#{Faker::Hipster.sentence}")
c6 = Channel.create(name: "#{Faker::Music.instrument}", purpose: "#{Faker::Hipster.sentence}")
c7 = Channel.create(name: "#{Faker::Name.first_name}", purpose: "#{Faker::Hipster.sentence}")
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

  Channel.all[2..-1].each do |channel|
    user.channel_ids += [channel.id] if rand(2) == 1
  end

  user.image = File.open("app/assets/images/avatar#{rand(11) + 1}.png")
  user.save!
end

guest = User.create(
  username: "GuestUser",
  first_name: "Guest",
  last_name: "User",
  password: "password"
)

guest.channel_ids += [c1.id, c2.id, c3.id, c4.id, c5.id]


dm1 = Channel.create(direct_message: true, user_ids: [1,2,3,guest.id])
dm2 = Channel.create(direct_message: true, user_ids: [4,5,2,3,6,guest.id])
dm3 = Channel.create(direct_message: true, user_ids: [7,10,2,guest.id])
dm4 = Channel.create(direct_message: true, user_ids: [4,11,8,guest.id])

Message.delete_all

sentence_beginnings = [
  "What if ",
  "Don't you think ",
  "Maybe ",
  "Was that you that was telling me about ",
  "Could it be that ",
  "Please you can't even tell me ",
  "Yesterday I",
  "Chuck Norris used to ",
  "Ahhhhhhhhhhhhh!!!! Duhh..."
]

4.times do
  User.all.shuffle.each do |user|
    user.channels.each do |channel|
      channel.messages.create(
      body: sentence_beginnings.sample +
        Faker::Hipster.sentences(rand(4) + 1).map do |sent|
          sent[0..-2] + ["?", "!"].sample
        end.join("  "),
      author_id: user.id
      )
    end
  end
end
