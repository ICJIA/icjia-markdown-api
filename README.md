# ICJIA API

Test API using [Loopback.io](https://loopback.io) and [MongoDB Atlas cloud database](https://cloud.mongodb.com/) .

For local development, make sure [Node](https://nodejs.org/en/) and [MongoDB]() are installed.

To start local MongoDB: ```mongod```


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
## Dependences:
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://github.com/remy/nodemon)
- [Loopback.io](https://loopback.io)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
