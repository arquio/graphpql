const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual')
const Curso = require('./models/Curso')
const Profesor = require('./models/Profesor')

const typeDefs = `
  #Esto es un curso en el sistema
  type Curso{
    id: ID!
    titulo: String!
    #Esta es la descripción del curso
    descripcion : String!
    profesor: Profesor
    rating: Float @deprecated(reason:"Ejemplo para campos deprecados")
    comentarios: [Comentario]
  }

  type Profesor {
    id: ID!
    nombre: String!
    nacionalidad: String!
    genero: Genero
    cursos: [Curso]
  }

  enum Genero{
    MASCULINO
    FEMENINO
  }

  type Comentario{
    id: ID!
    nombre: String!
    cuerpo: String!
  }

  type Query{
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }
`
const resolvers = {
  Query: {
    cursos: () => Curso.query(),
    profesores: () => Profesor.query(),
    curso: (rootValue, args) => Curso.query().findById(args.id),
    profesores: (rootValue, args) => Profesor.query().findById(args.id)
  }
}

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})

addMockFunctionsToSchema({
  schema: schema,
  mocks: {
    Curso: () => {
      return{
        id: casual.uuid,
        titulo: casual.sentence,
        descripcion: casual.description
      }
    },
    Profesor: ()=>{
      return {
        nombre: casual.name,
        nacionalidad: casual.country
      }
    }
  },
  preserveResolvers: true
})

module.exports = schema
