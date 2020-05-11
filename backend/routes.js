const router = require("express").Router();
const logger = require("morgan");

router.use(logger());

router.use("/", (req, res) => {
  res.json("Hi, Hello - Routes Server File");
});

module.exports = router;
