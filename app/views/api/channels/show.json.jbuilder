json.partial! 'api/channels/channel',
  channel: @channel
    .select("channels.*, count(users.id) as user_count")
    .joins(:users)
    .group("channels.id")
