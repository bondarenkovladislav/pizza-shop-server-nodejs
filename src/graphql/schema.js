const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Ingredient {
        name: String!
        price: Float!
    }
    
    type Pizza {
        _id: ID
        title: String!
        description: String!
        price: Float!
        img: String
        type: String!
        ingredients: [Ingredient!]!
    }
       
    type Query {
        getStock(id: String): [Pizza!]!
    }
`);
