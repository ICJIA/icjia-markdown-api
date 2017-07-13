const mysqlUrl = process.env.MYSQL_URL

if (mysqlUrl) {
  //console.log('Using MongoDB url:', mongodbUrl)


const dataSources = {
  db: {
    name: 'db',
    connector: 'mysql',
    url: mysqlUrl
  }
}
module.exports = dataSources
}
