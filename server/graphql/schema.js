import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type Countries {
        id: Int!
        name: String!
        price: Int!
        done: Boolean!
        bought: Boolean!
        owner: String!
    }

    type Query {
        allCountries: [Countries]!
    }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
