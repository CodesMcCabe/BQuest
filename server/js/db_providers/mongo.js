const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var cls = require("../lib/class");
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'browserQuest';


// Class MongoClient {
//   constructor () {
//
//   }
//
//   connect(url, ) {
//
//   }
// }
// Use connect method to connect to the server
module.exports = MongoHandler = cls.Class.extend({
  init: function(config){
    MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(dbName);

      client.close();
    });
  }
});


// module.exports = MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//     client.close();
// });

// const fetchInventory = function() {
//   const collection = db.collection('playerInventory');
//
//   collection.find({username:  })
// };

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

const findDocuments = function(db, callback) {
  const collection = db.collection('documents');

  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};
