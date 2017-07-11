# ICJIA REST API

Test REST API using [Loopback.io](https://loopback.io) and [MongoDB Atlas cloud database](https://cloud.mongodb.com/) .

For local development, make sure [Node](https://nodejs.org/en/) and [MongoDB]() are installed.

## Start local MongoDB
```
mongod
```

## Local deployment:
```
npm run dev
```

## Production deployment to Zeit's Now:

### First deployment:

```
now secrets add mongodb-url "mongodb://<MONGODB_ATLAS_CONNECT_STRING>"

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

## Loopback Explorer

[https://icjia-api.now.sh/explorer](https://icjia-api.now.sh/explorer)

## Dependences:
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://github.com/remy/nodemon)
- [Loopback.io](https://loopback.io)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai](http://chaijs.com/)
