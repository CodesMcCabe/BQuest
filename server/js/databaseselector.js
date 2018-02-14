path = require('path');

module.exports = function(config, db) {
  if (db === 'redis') {
    return require(path.resolve(__dirname, 'db_providers', config.database[0]));
  } else if (db === 'mongo') {
    return require(path.resolve(__dirname, 'db_providers', config.database[1]));
  }  
};
