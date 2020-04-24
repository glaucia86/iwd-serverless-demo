/**
 * File: shared/mongo.js
 * Description: file responsible for MongoDb persistence for the application.
 * Date: 04/23/2020
 * Author: Glaucia Lemos <glaucia86>
 */

const { MongoClient } = require('mongodb');

const config = {
  url: 'mongodb://localhost:27017/test-api-heroes',
};

module.exports = () => new Promise((resolve, reject) => {
  MongoClient.connect(config.url, { useNewUrlParser: true }, (err, mongoConnection) => 
    err
    ? reject(err)
    : resolve({ client: mongoConnection.db(config.dbName), 
                closeConnectionFn: () => setTimeout(() => {
                    mongoConnection.close();
                }, 1000),
                mongoConnection 
        })
    );
});