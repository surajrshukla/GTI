const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
    title: String,
    author: String,
    publicationYear: String,
});

const BookModel = model("Book", BookSchema);

module.exports = BookModel;
