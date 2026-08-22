const express = require("express");
const { getJobsByCompany } = require("../controllers/jobController");

const router = express.Router();

router.get("/company/:companyName", getJobsByCompany);

module.exports = router;
