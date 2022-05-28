"use strict";
const db = require("../config/db");

class visitors {
  static async postMsg(msg) {
    return new Promise((resolve, reject) => {
      const query = "insert into visitors (contents, date) value(?, ?);";
      db.query(query, [msg.contents, msg.date], err => {
        if (err) {
          reject(`${err}`);
        } else {
          resolve({ success: true });
        }
      });
    });
  }

  static getList() {
    const query = "SELECT * FROM visitors;";
    return new Promise((resolve, reject) => {
      db.query(query, (err, rows, fields) => {
        if (err) reject(`${err}`);
        else resolve(rows);
      });
    });
  }
}

module.exports = visitors;
