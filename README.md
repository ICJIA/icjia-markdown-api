# ICJIA REST API for Markdown Permalinks

Test REST API using [Loopback.io](https://loopback.io) and [MySQL](https://www.mysql.com/). This is used in conjunction with the [ICJIA Markdown editor](https://github.com/ICJIA/icjia-markdown) as a way to store user-generated permalinks.

For local development, make sure [Node](https://nodejs.org/en/) and [MySQL](https://www.mysql.com/) are installed.

## Start MySQL
```
sudo /etc/init.d/mysql start
```


## Local deployment:
```
npm run dev
```
Local deployment runs on local MySQL @ ```localhost```.

## Production deployment:

### First deployment:

Create MySQL database ```links```:

```
sudo mysql
mysql> CREATE DATABASE links;
mysql> SHOW STATUS;
```
Then:
```
Uncomment automigrations in ./boot/automigrate.js
```
Finally, deploy to [Now](https://zeit.co/now) static hosting:
```
now secrets add mysql-url "mysql://<USERNAME>:<PASSWORD>@<MYSQL_IP_ADDRESS>/links"

npm run now
```

### Subsequent deployments:
First:
```
Remove or comment out automigrations in ./boot/automigrate.js.
```
Then:

```
npm run now
```

## Unit tests
```
npm run test

npm run test:watch
```

## Dependences:
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://github.com/remy/nodemon)
- [Loopback.io](https://loopback.io)
- [MySQL](https://www.mysql.com/)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai](http://chaijs.com/)
