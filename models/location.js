// models/location.js
const db = require("../config");

const Location = {
  getAll: function(callback) {
    return db.query("SELECT * FROM location", callback);
  },
  
  getById: function(identification, callback) {
    return db.query("SELECT * FROM location WHERE identification = ?", [identification], callback);
  },
  
  create: function(newLocation, callback) {
    return db.query("INSERT INTO location SET ?", newLocation, callback);
  },
  
  update: function(identification, updatedLocation, callback) {
    return db.query("UPDATE location SET ? WHERE identification = ?", [updatedLocation, identification], callback);
  },
  
  delete: function(identification, callback) {
    return db.query("DELETE FROM location WHERE identification = ?", [identification], callback);
  }
};

module.exports = Location;
