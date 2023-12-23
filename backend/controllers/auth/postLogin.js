const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = process.env;

const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({ mail: mail.toLowerCase() }).exec();

    const storedPassword = user.password;

    const isMatch = await bcrypt.compare(password, storedPassword);

    if (user && isMatch) {
      const token = jwt.sign(
        {
        userId: user._id,
          mail,
        },
        config.TOKEN_KEY
      );

      return res.status(200).json({
        userDetails: {
          mail: user.mail,
          token: token,
          username: user.username,
        },
      });
    }

    return res.status(409).send(" Invalid crediantial error");
  } catch (err) {
    return res.status(500).send(" something went wrong ");
  }
};

module.exports = postLogin;
