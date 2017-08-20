## Steps:

### Server:
  ```
  mkdir server-graphql
  cd server-graphql
  ```
  Crea package.json:
  ```
  yarn init -y
  ```
  Añade dependencias:
  ```
  yarn add express
  ```
Típica del para parsear en un proyecto node
  ```
  yarn add body-parser
  ```
Hubo cambios de nombres en el server, el paquete tools viene aparte para poder usar otro server:
  ```
  yarn add graphql apollo-server-express graphql-tools
  ```
  ```
  touch index.js
  ```
  Schema
  ```
  touch schema.js
  ```

### Monitorear cambios en el archivo schema.js
 Dependencia binaria solo usada en el desarrollo. En package.json vamos a agregar un scripts (Es lo recomendado)
```
  yarn add nodemon -D
  yarn start
```

### Capa de resolvers (equivale a la capa de Controller en MVC)
http://dev.apollodata.com
