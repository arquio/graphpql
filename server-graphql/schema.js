const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')

const casual = require('casual')

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
    cursos: () => {
      return [{
        id: 1,
        titulo: 'Curso de graphq',
        descripcion: 'Aprendiendo graphql',
        profesor:{
          nombre: 'Pablo'
        }
      },{
        id: 2,
        titulo: 'Curso de PHP',
        descripcion: 'Aprendiendo PHP'
      }]
    }
  },
  Curso: {
    profesor: () =>{
      return{
        nombre: "Pedro",
        nacionalidad: "Italiana"
      }
    },
    comentarios: () =>{
      return[{
        nombre: "velit nulla labore minim",
        cuerpo: "velit nulla labore minim irure eu ab aute vidisse. Aliqua possumus ad transferrem, est pariatur domesticarum id incurreret do quem in sunt litteris hic illustriora."
      },
      {
        nombre: "velit nulla labore minim",
        cuerpo: "velit nulla labore minim irure eu ab aute vidisse. Aliqua possumus ad transferrem, est pariatur domesticarum id incurreret do quem in sunt litteris hic illustriora."
      }]
    }
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
  preserveResolvers: false
})

module.exports = schema
