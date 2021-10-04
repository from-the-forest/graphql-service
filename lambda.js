require('dotenv').config()

const { ApolloServer } = require('apollo-server-lambda')
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

exports.handler = server.createHandler()
