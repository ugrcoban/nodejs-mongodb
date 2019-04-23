var MongoClient = require('mongodb').MongoClient;
var dbname="newdb";
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  
  /**** InsertOne ***/
  var myobj = { name: "Vivi Inc", address: "Esentepe mah." };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount + " document inserted");
    console.log("Inserted id : "+res.insertedId);
    db.close();
  });
  
  
  
	/***** insertMany *****/
	// documents to be inserted
	var docs = [{ name: "Udat", age: "21" },
                { name: "Karthik", age: "24" },
                { _id:100, name: "Anil", age: "23" }];
    
	// insert multiple documents to 'users' collection using insertOne
	dbo.collection("users").insertMany(docs, function(err, res) {
		if (err) throw err;
		console.log(res.insertedCount+" documents inserted");
		// close the connection to db when you are done with it
		db.close();
	});
	
	
});
