const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./api/schema')

const app = express()
app.use('/api', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => console.log('API is live!'))