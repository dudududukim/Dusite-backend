"use strict";

const getVisitors = require("../models/getVisitors");

const visitors = require("../models/visitors");

const data = {
  visitors: async (req, res) => {
    const visitorsData = await getVisitors;
    return res.json(visitorsData);
  },
};

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
  data,
  post,
  get,
};
