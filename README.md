## Steps:

### Server:
  ```
  mkdir server-graphql
  cd server-graphql
  ```
  Crea package.json
  ```
  yarn init -y
  yarn add express //Añade dependencias
  yarn add body-parser //Típica del para parsear en un proyecto node
  yarn add graphql apollo-server-express graphql-tools //Hubo cambios de nombres en el server, el paquete tools viene aparte para poder usar otro server.
  touch index.js //Dónde vamos a empezar a usar
  ```

### Schema
  touch schema.js

### Motitorear cambios en el archivo schema
  yarn add nodemon -D // Dependencia binaria solo usada en el desarrollo. En package.json vamos a agregar un scripts (Es lo recomendado)
  yarn start

### Capa de resolvers (equivale a la capa de Controller en MVC)
http://dev.apollodata.com
