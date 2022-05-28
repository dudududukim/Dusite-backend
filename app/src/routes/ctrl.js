"use strict";

const getVisitors = require("../models/getVisitors");

const postVisitorsMsg = require("../models/postVisitorsMsg");

const data = {
  visitors: async (req, res) => {
    const visitorsData = await getVisitors;
    console.log(`controller : ${visitorsData}`);
    return res.json(visitorsData);
  },
};

const put = {
  visitorsMsg: async (req, res) => {
    const visitorsMsg = req.body;
    console.log(visitorsMsg);
    const response = await postVisitorsMsg(visitorsMsg);
    return res.json(response);
  },
};

module.exports = {
  data,
  put,
};
