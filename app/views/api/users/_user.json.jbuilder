json.id user.id
json.username user.username
json.first_name user.first_name
json.last_name user.last_name
json.username user.username
json.image_url asset_path(user.image.url)

json.channels do
  json.array! user.channels
    .select("channels.*, count(users.id) as user_count")
    .joins(:users)
    .where(direct_message: false)
    .group("channels.id") do |channel|
      json.id channel.id
      json.name channel.name
      json.purpose channel.purpose
      json.memberCount channel.user_count
  end
end

json.direct_messages do
  json.array! user.direct_messages
    .select("channels.*, count(users.id) as user_count")
    .joins(:users)
    .group("channels.id") do |dm|
      json.id dm.id
      json.name dm.name
      json.memberCount dm.user_count
  end
end
