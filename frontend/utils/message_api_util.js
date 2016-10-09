export const getMessages = (conversation_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: { message: { conversation_id }},
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

export const deleteMessage = (messageID, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/messages/${messageID}`,
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
