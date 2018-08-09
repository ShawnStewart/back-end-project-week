const User = require("./UserModel");

const UserController = {
  getUsers: (req, res) => {
    User.find()
      .then(response => res.json(response))
      .catch(err => res.status(404).json(err));
  },
  getUser: (req, res) => {
    const { id } = req.params;
    User.findById(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => res.status(404).json(err));
  },
  createUser: (req, res) => {
    const userInfo = req.body;
    const newUser = new User(userInfo);
    newUser
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};

module.exports = UserController;
