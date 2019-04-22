var MongoClient = require('mongodb').MongoClient;
var dbname="newdb";
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var myobj = { name: "Vivi Inc", address: "Esentepe mah." };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount + " document inserted");
    console.log("Inserted id : "+res.insertedId);
    db.close();
  });
});