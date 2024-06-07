// models/user.js
const db = require("../config");
 
const Citizen = {
  getAll: function(callback) {
    return db.query("SELECT * FROM citizen", callback);
  },
  
  getByIdentification: function(identification, callback) {
    return db.query("SELECT * FROM citizen WHERE identification = ?", [identification], callback);
  },
  
  create: function(newCitizen, callback) {
    return db.query("INSERT INTO citizen SET ?", newCitizen, callback);
  },
  
  update: function(identification, updatedCitizen, callback) {
    return db.query("UPDATE citizen SET ? WHERE identification = ?", [updatedCitizen, identification], callback);
  },
  
  delete: function(identification, callback) {
    return db.query("DELETE FROM citizen WHERE identification = ?", [identification], callback);
  }
};

module.exports = Citizen;
