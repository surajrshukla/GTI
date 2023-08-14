const BookModel = require("../models/book");

const addBook = async (user) => {
    console.log(user);
    const newBook = new BookModel(user);
    return await newBook.save();
};

module.exports = {
    addBook,
};
