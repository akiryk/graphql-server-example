import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./models/typeDefs.js";
import mongoose, { ConnectOptions } from "mongoose";

console.log(process.env);
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log(`
      🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
           S U C C E S S !
      🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀`);
  })
  .catch((err) => {
    console.log(err.message);
  });

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = Number.parseInt(process.env.PORT) || 4000;

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
