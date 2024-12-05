const { request } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.get("/send", (req, res) => {
    res.json({});
});

router.post("/send", (req, res) => {
    console.log("POST request received:", req.body);
    res.json({ status: "OK", message: "request processed" });
});

module.exports = router;
