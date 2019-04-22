var MongoClient = require('mongodb').MongoClient;
var dbname="newdb";
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});