json.merge! channel.attributes

json.members do
  if channel.direct_message
    json.array! channel.users do |user|
      json.id user.id
      json.username user.username
    end
  else
    json.count channel.users.count
  end
end
