const db = require('../config/database')

module.exports = {
  Query: {
    async getUser(_, { id_user }) {
      return await db('users')
      .where({id_user})
      .reduce( async(memo, row) => {
        const posts = await db('posts').where({id_user})
        return {
          ...memo,
          ...row,
          posts 
        }
      }, { posts: []})
    },
    async getUsers() {
      return await db('users')
      .map( async(row) => {
        const posts = await db('posts').where({id_user: row.id_user})
        return {
          ...row,
          posts 
        }
      })
    },
    async getPost(_, { id_post }) {
      return await db('posts')
      .where({id_post})
      .reduce( async(memo, row) => {
        const author = await db('users').where({id_user: row.id_user}).first()
        return {
          ...memo,
          ...row,
          author 
        }
      },{})
    },
    async getPosts() {
      return await db('posts')
      .map( async(row) => {
        const author = await db('users').where({id_user: row.id_user}).first()
        return {
          ...row,
          author 
        }
      })
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      const result = await db('users').insert({
        name: input.name,
        email: input.email
      })

      const id_user = result[0]
      return await db('users').where({ id_user }).first()
    },
    async createPost(_, { input }) {
      const result = await db('posts').insert({
        description: input.description,
        id_user: input.id_user
      })

      const id_post = result[0]
      return await db('posts').where({ id_post }).first()
    }
  } 
}