# ICJIA REST API

Test REST API using [Loopback.io](https://loopback.io) and MySQL.

For local development, make sure [Node](https://nodejs.org/en/) and MySQL are installed.

## Start local MySQL
```
sudo /etc/init.d/mysql start
```

## Local deployment:
```
npm run dev
```

## Production deployment to Zeit's Now:

### First deployment:

```
now secrets add mysql-url "mysql://<USERNAME>:<PASSWORD>@<MYSQL_IP_ADDRESS>/links"

npm run now
```

### Subsequent deployments:
```
npm run now
```

## Unit tests
```
npm run test

npm run test:watch
```

## Demo endpoint

[https://icjia-api.now.sh/api/links](https://icjia-api.now.sh/api/links)


## Dependences:
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://github.com/remy/nodemon)
- [Loopback.io](https://loopback.io)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai](http://chaijs.com/)
