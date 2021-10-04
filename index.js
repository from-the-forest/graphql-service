require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

// managed federation
const gateway = new ApolloGateway()

const server = new ApolloServer({
  gateway,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground()
  ]
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
