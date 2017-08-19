const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Curso{
    id: ID!
    titulo: String!
  }

  type Query{
    cursos: [Curso]
  }
`

const schema = makeExecutableSchema({
  typeDefs: typeDefs
})

module.exports = schema
