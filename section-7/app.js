var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/animals",
  function (err, client) {
    if (err) throw err;
    console.log("MONGO CONNECTED");

    // var db = client.db("animals");
    // db.collection("mammals")
    //   .find()
    //   .toArray(function (err, result) {
    //     if (err) throw err;

    //     console.log(result);
    //   });
  }
);
