"use strict";

const getVisitors = require("../models/getVisitors");

const data = {
  visitors: async (req, res) => {
    const visitorsData = await getVisitors;
    console.log(`controller : ${visitorsData}`);
    return res.json(visitorsData);
  },
};

module.exports = {
  data,
};
