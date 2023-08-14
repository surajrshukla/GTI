var express = require("express");
const { getUsers, addUser } = require("../services/user.service");
const multer = require("multer");
var router = express.Router();
const upload = multer({ dest: "uploads/" });

/* GET users listing. */
router.get("/", async (req, res) => {
    const users = await getUsers();
    res.send(users);
});

router.post("/register", upload.single("image"), async (req, res) => {
    const newUser = JSON.parse(req.body.userDetails);
    const user = {
        name: newUser.name,
        emailId: newUser.name,
        state: newUser.state,
        gender: newUser.gender,
        image: req.file.originalname,
    };
    const result = await addUser(user);
    res.send(result);
});

module.exports = router;
