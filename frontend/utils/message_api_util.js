export const getMessages = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/messages',
    success,
    error
  });
};

export const createMessage = (message, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: { message },
    success,
    error
  });
};
