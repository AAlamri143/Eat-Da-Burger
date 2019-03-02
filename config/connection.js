var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Aalamri_143",
    database: "burgers_db"
  });
}

connection.connect();


//Export Config (Mysql)
module.exports = connection;