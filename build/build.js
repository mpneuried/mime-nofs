var db = require('mime-db');

var mapByType = {};
Object.keys(db).forEach(function(key) {
  var extensions = db[key].extensions;
  if (extensions) {
    mapByType[key] = extensions;
  }
});

console.log("module.exports = " + JSON.stringify(mapByType, true, 2));
