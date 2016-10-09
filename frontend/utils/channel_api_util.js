export const createChannel = (channel, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel },
    success,
    error
  });
};
