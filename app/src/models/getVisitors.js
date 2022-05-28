const db = require("../config/db");
const query = "SELECT * FROM visitors;";

module.exports = new Promise((resolve, reject) => {
  db.query(query, (err, rows, fields) => {
    // console.log(rows);
    if (err) reject(`${err}`);
    else resolve(JSON.stringify(rows));
  });
});
