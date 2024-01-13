const userResolver = {
  Query: {
    users: async (_, __, { dataSources }) => dataSources.userAPI.getUsers(),
    user: async (_, { id }, { dataSources }) => dataSources.userAPI.getUserById(id)
  },
  Mutation: {
    addUser: async (_, body, { dataSources }) => dataSources.userAPI.addUser(body),
    updateUser: async (_, body, { dataSources }) => dataSources.userAPI.updateUser(body),
    deleteUser: async (_, { id }, { dataSources }) => dataSources.userAPI.deleteUser(id)
  }
}

module.exports = userResolver