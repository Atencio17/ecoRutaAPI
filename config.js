const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "s7pfbqg8bsfi4jyf",
  password: "a5x3q6y9gtccf8rm",
  database: "jskkve79zk4db5dr",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos: ", err);
    return;
  }
  console.log("Conexión a la base de datos MySQL establecida correctamente");
});

module.exports = connection;
