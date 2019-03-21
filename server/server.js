import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphQL/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphQL/schema.graphql",
  resolvers: resolvers
});

server.start(() => console.log("listening 4000port"));
