exports.getEmail = (req, res) => {
  res.send({ data: "hello no eamils " });
  console.log(req.params._id);
  getMessage(userId, messageId, callback);
};

function getMessage(userId, messageId, callback) {
  var request = gapi.client.gmail.users.messages.get({
    userId: userId,
    id: messageId
  });
  request.execute(callback);
}
