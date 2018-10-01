const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Users {
    id_user: ID
    name: String
    email: String
    posts: [Posts]
  }

  type Posts {
    id_post: ID
    description: String!
    author: Users
    create_at: String
  }

  type Query {
    getUser(id_user: ID!): Users
    getUsers: [Users]
    getPost(id_post: ID!): Posts 
    getPosts: [Posts]
  }

  input UserInput {
    name: String!
    email: String!
  }

  input PostInput {
    description: String!
    id_user: ID!
  }

  type Mutation {
    createUser(input: UserInput): Users
    createPost(input: PostInput): Posts
  }
`

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
 })