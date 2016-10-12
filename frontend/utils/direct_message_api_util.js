export const getDirectMessageNames = (directMessageIDs, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/channels/dm-names',
    data: { direct_message_ids: directMessageIDs },
    success,
    error
  });
};
