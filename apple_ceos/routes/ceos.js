const express = require("express"),
    router = express.Router(),
    ceoModel = require("../models/ceoModel");

/* GET home page. */
router.get("/", async function(req, res, next) {
  // Request to our model. This is the controller accessing the model.  
  const executiveData = await ceoModel.getAll();
  
  // JSON API
  res.status(200).json(executiveData)
  
});

module.exports = router;
