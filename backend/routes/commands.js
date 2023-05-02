const express = requires("express");
const router = express.Router();

// Defining  a POST request route with the path /execute
// When a POST request is made to this path, the server will know that the request is for running a command
router.post("/execute", (req, res) => {
  // Command execution logic
});

module.exports = router;
