var MongoClient = require('mongodb').MongoClient;
var dbname="newdb";
var url = "mongodb://localhost:27017/"+dbname;

MongoClient.connect(url,  {useNewUrlParser: true } , function(err, db) {
  if (err) throw err;
  console.log("Database created! "+dbname);
  db.close();
});