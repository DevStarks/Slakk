export const createChannel = (channel, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel },
    success,
    error
  });
};

export const getChannelCount = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/channels/count',
    success,
    error
  });
};

export const searchChannels = ({ searchData }, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/channels/search',
    data: { search_data: searchData },
    success,
    error
  });
};

export const connectToChannel = ( channelID, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/channels/connect',
    data: { channel_id: channelID },
    success,
    error
  });
};
