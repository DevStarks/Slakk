@channels = @channels
  .select("channels.*, count(users.id) as user_count")
  .joins(:users)
  .group("channels.id")


json.array! @channels, partial: 'api/channels/channel', as: :channel
