const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databasename = "diary-app";
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log(err);
  }
  const db = client.db(databasename);

  //start server
});
