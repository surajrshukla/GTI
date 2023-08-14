var express = require("express");
const { addBook } = require("../services/book.service");
var router = express.Router();

/* GET users listing. */
router.post("/add", async (req, res) => {
    const result = await addBook(req.body.book);
    res.send(result);
});

module.exports = router;
