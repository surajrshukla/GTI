const UserModel = require("../models/user");

const addUser = async (user) => {
    console.log(user);
    const newUser = new UserModel(user);
    return await newUser.save();
};

const getUsers = async () => {
    const users = await UserModel.find();
    return users;
};

module.exports = {
    addUser,
    getUsers,
};
