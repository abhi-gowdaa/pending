const User = require("../../models/user");
const postInvite = async (req, res) => {
  const { targetMail } = req.body;
  const { userId, mail } = req.user;

  if (targetMail.toLowerCase() === mail.toLowerCase()) {
   return res.status(409)
    .send("you cant send request to yourself");
  }

  const targetUser = await User.findOne({
    mail: targetMail.toLowerCase(),
  });

  if (!targetUser) {
    return res.status(404).send("user not found");
  }
//check if the invitation already been sent
  return res.send("controller is working");
};

module.exports = postInvite;
