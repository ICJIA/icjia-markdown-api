# ICJIA API

Test API using [Loopback.io](https://loopback.io) and [MongoDB Atlas cloud database](https://cloud.mongodb.com/) .

For local development, make sure [Node](https://nodejs.org/en/) and [MongoDB]() are installed. 

To start local MongoDB: ```mongod```

```
## Local deployment:

MONGODB_URL=mongodb://localhost:27017/db npm run dev

## Production deployment to a Zeit Now (w/MongoDB Atlas):

now secrets add mongodb-url "mongodb://<USERNAME>:<PASSWORD>@cluster0-shard-00-00-8qarm.mongodb.net:27017,cluster0-shard-00-01-8qarm.mongodb.net:27017,cluster0-shard-00-02-8qarm.mongodb.net:27017/permalink?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

npm run now

```
## Dependences:
- [Node.js](https://nodejs.org/en/)
- [Loopback.io](https://loopback.io)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)










