// models/report.js
const db = require("../config");

const Report = {
  getAll: function(callback) {
    return db.query("SELECT * FROM report", callback);
  },
  
  getByIdentification: function(identification, callback) {
    return db.query("SELECT * FROM report WHERE citizen_identification = ?", [identification], callback);
  },
  
  create: function(newReport, callback) {
    return db.query("INSERT INTO report SET ?", newReport, callback);
  },
  
  update: function(identification, updatedReport, callback) {
    return db.query("UPDATE report SET ? WHERE identification = ?", [updatedReport, identification], callback);
  },
  
  delete: function(identification, callback) {
    return db.query("DELETE FROM report WHERE identification = ?", [identification], callback);
  }
};

module.exports = Report;
