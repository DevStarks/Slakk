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
