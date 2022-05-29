"use strict";
const visitors = require("../models/visitors");

const post = {
  visitorsMsg: async (req, res) => {
    const visitorsMsg = req.body;
    console.log(visitorsMsg);
    const response = await visitors.postMsg(visitorsMsg);
    return res.json(response);
  },
};

const get = {
  visitorsList: async (req, res) => {
    const visitorsList = await visitors.getList();
    return res.json(visitorsList);
  },
};

module.exports = {
  post,
  get,
};
