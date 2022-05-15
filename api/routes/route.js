var express = require("express");
var router =  express.Router();

// Get a note
router.get("/", function(req, res, next){
    res.send("here is the notes");
})

// Create a new note
router.post("/", function(req, res, next){

})

// Update an existing note
router.put("/", function(req, res, next){
})

module.exports = router;