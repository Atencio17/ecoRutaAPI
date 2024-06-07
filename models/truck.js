// models/truck.js
const db = require("../config");

const Truck = {
  getAll: function(callback) {
    return db.query("SELECT * FROM truck", callback);
  },
  
  getByPlate: function(plate, callback) {
    return db.query("SELECT * FROM truck WHERE plate = ?", [plate], callback);
  },
  
  create: function(newTruck, callback) {
    return db.query("INSERT INTO truck SET ?", newTruck, callback);
  },
  
  update: function(plate, updatedTruck, callback) {
    return db.query("UPDATE truck SET ? WHERE plate = ?", [updatedTruck, plate], callback);
  },
  
  delete: function(plate, callback) {
    return db.query("DELETE FROM truck WHERE plate = ?", [plate], callback);
  }
};

module.exports = Truck;
