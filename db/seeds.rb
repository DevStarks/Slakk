User.delete_all

10.times do
  User.create(
    username: Faker::Internet.user_name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: Faker::Internet.password(10, 20)
  )
end

User.create(
  username: "GuestUser",
  first_name: "Guest",
  last_name: "User",
  password: "password"
)
