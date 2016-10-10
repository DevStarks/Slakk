json.id message.id
json.body message.body
json.author do
  json.id message.author.id
  json.username message.author.username
  json.image_url asset_path(message.author.image.url)
end
json.created_at message.created_at
