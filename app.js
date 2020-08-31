const express = require("express");
const path = require("path");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mongoose = require("mongoose");
const keys = require("./keys");
const pizzaRouter = require("./routes/pizza");
const authRouter = require("./routes/auth");
const graphQlRouter = require('./routes/graphqlroute')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/pizza", pizzaRouter);
app.use("/auth", authRouter);
app.use(graphQlRouter);

(async function () {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  } catch (e) {
    console.log(e);
  }
})();

module.exports = app;
