const config = {
  databaseName: 'test-db-2000',
  port: 27017,
  host: 'localhost'
}

const getConnectionString = ({ host, port, databaseName }) => `mongodb://${host}:${port}/${databaseName}`

export { config, getConnectionString }
