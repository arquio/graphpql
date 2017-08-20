### Tecnologías

- GraphQL
- GraphQL Server (Apollo)
- Node 6.11.2
- Yarn
- Objection como ORM
- Knex para migraciones de DB
- SQLite como motor de base de datos

### Instalación

Clona este repositorio y en la carpeta raíz ejecuta los siguientes comandos:

1. `yarn install`
1. `touch db/db.sqlite`
1. `yarn run db:migrate`
1. `yarn run db:seed`
1. `yarn start`

### Server Dev Note:
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
Típica librería para parsear en un proyecto node
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
