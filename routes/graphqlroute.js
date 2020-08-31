const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const schema = require("../src/graphql/schema");
const resolver = require("../src/graphql/resolver");

router.use(
  "/graphql",
  graphqlHTTP({ schema, rootValue: resolver, graphiql: true })
);

module.exports = router
