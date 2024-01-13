const { ApolloServer, gql } = require("apollo-server");
const { mergeTypeDefs } = require('graphql-tools');
const UserSchema = require("./schemas/user.graphql");
const UserResolver = require("./resolvers/user");
const UserAPI = require("./datasources/user-api");
// const UserAPI = require("./datasources/user-api");

const typeDefs = [UserSchema];
const resolvers = [UserResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    dataSources: {
      userAPI: new UserAPI()
    }
  }

});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`)
})