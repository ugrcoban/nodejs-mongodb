var MongoClient = require('mongodb').MongoClient;
var dbname="newdb";
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var myquery = { _id: 100 };
  dbo.collection("users").deleteMany(myquery, function(err, obj) {//deleteOne
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});