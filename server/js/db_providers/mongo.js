const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var cls = require("../lib/class");
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'browserQuest';

let db;
module.exports = MongoHandler = cls.Class.extend({
  init: function(config){
    MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      db = client.db(dbName);

      // client.close();
    });
  },

  addInventory: function(item, username) {
    const collection = db.collection('player_inventory');

    collection.findOneAndUpdate(
      {username: username},
      {$push: {inventory: item}}
    );
  },

  loadInventory: function(username) {
    const collection = db.collection('player_inventory');

    const inventory = collection.find({username: username});
    const inventoryList = inventory.toArray();
    return inventoryList;
  }
});
