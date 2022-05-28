"use strict";
const db = require("../config/db");
const query = "insert into visitors (contents, date) value(?, ?);";

module.exports = async msg => {
  return new Promise((resolve, reject) => {
    db.query(query, [msg.contents, msg.date], err => {
      if (err) {
        reject(`${err}`);
      } else {
        resolve({ success: true });
      }
    });
  });
};
