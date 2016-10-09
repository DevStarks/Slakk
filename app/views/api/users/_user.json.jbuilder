json.username user.username
json.first_name user.first_name
json.last_name user.last_name
json.username user.username
json.image_url asset_path(user.image.url)
json.channels do
  json.array! user.channels do |channel|
    json.id channel.id
    json.name channel.name
    json.purpose channel.purpose
  end
end
