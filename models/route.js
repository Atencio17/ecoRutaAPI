// models/route.js
const db = require("../config");

const Route = {
  getAll: function(callback) {
    return db.query("SELECT * FROM routes", callback);
  },
  
  getByIdentification: function(identification, callback) {
    return db.query("SELECT * FROM routes WHERE identification = ?", [identification], callback);
  },
  
  create: function(newRoute, callback) {
    return db.query("INSERT INTO routes SET ?", newRoute, callback);
  },
  
  update: function(identification, updatedRoute, callback) {
    return db.query("UPDATE routes SET ? WHERE identification = ?", [updatedRoute, identification], callback);
  },
  
  delete: function(identification, callback) {
    return db.query("DELETE FROM routes WHERE identification = ?", [identification], callback);
  }
};

module.exports = Route;
