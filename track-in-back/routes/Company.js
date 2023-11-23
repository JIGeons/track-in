const express = require('express');
const router = express.Router();
const { company } = require('../models/index.js');

router.get("/", async(req,res) => {
    const listOfCompany = await company.findAll({});
    res.json(listOfCompany);
});

router.post("/", async (req, res) => {
    const company = req.body;

    await Company.create(company);
    res.json(company);
});

module.exports = router;