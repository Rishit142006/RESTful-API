const { users } = require("../utils/dataStore");

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.createUser = (req, res) => {

    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(user);

    res.json(user);
};