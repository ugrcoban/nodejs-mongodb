var MongoClient = require('mongodb').MongoClient;
var dbname="newdb";
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  
  
  // mysql> Select * FROM users
  dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log('\n mysql> Select * FROM users');
	console.log(result);
    db.close();
  });
  
  
  
  // mysql> Select id,name FROM users
  var query= {};
  dbo.collection("users").find(query, { projection: { _id: 1, name:1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log('\n mysql> Select id,name FROM users');
	console.log(result);
    db.close();
  });
  
  
  
  // mysql> Select address FROM users WHERE name='Vivi Inc' ORDER by name ASC LIMIT 5
  var query = { name: "Vivi Inc" };
  var orderby = { name: 1 };//1:ASC,-1:DESC
  var limit = 5;
  dbo.collection("users").find(query, { projection: { _id: 0, address:1 } }).sort(orderby).limit(limit).toArray(function(err, result) {
    if (err) throw err;
    
	console.log("\n mysql> Select address FROM users WHERE name='Vivi Inc' ORDER by name ASC LIMIT 5");
	
	//console.log(result);
	Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.address);
    });
	
    db.close();
  });
  
});