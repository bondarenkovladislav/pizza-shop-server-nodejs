const isAuth  = require("../src/middleware/isAuth");
const attachCurrentUser = require("../src/middleware/attachCurrentUser")
const { Router } = require("express");
const Pizza = require("../src/models/Pizza");
const Ingredient = require("../src/models/Ingredients");
const router = Router();

router.get("/", isAuth, attachCurrentUser, async (req, res) => {
  const user = req.currentUser;
  const result = await Pizza.find();
  res.status(200).send({ data: result, user });
});

router.get("/ing", async (req, res) => {
  const result = await Ingredient.find();
  res.status(200).send({ data: result });
});

module.exports = router;
