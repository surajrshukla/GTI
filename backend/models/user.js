const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    emailId: String,
    state: String,
    gender: String,
    image: String,
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
