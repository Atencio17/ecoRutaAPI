// models/user.js
const db = require("../config");

const User = {
  getAll: function (callback) {
    return db.query("SELECT * FROM user", callback);
  },

  getById: function (name, callback) {
    return db.query("SELECT * FROM user WHERE name = ?", [name], callback);
  },

  getByCitizenIdentification: function (citizen_identification, callback) {
    return db.query("SELECT * FROM user WHERE citizen_identification = ?", [citizen_identification], callback);
  },

  create: function (newUser, callback) {
    return db.query("INSERT INTO user SET ?", newUser, callback);
  },

  update: function (name, updatedUser, callback) {
    return db.query("UPDATE user SET ? WHERE name = ?", [updatedUser, name], callback);
  },

  updateByCitizenIdentification: function (citizen_identification, updatedUser, callback) {
    return db.query("UPDATE user SET ? WHERE citizen_identification = ?", [updatedUser, citizen_identification], callback);
  },

  delete: function (name, callback) {
    return db.query("DELETE FROM user WHERE name = ?", [name], callback);
  }
};

module.exports = User;
