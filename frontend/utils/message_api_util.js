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

export const deleteMessage = (messageId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/messages/${messageId}`,
    success,
    error
  });
};

export const editMessage = (message, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/messages/${message.id}`,
    data: { message },
    success,
    error
  });
};
