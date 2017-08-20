module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/db.sqlite`
    },
    useNullAsDeafult: true
  },

  production: {
    //Datos de conexión para producción
  }
}
