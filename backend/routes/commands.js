const express = requires("express");
const router = express.Router();
// Using destructuring to directly import the 'exec' function from the 'child_process' module
const { exec } = require("child_process");
const { stdout, stderr } = require("process");

// Defining  a POST request route with the path /execute
// When a POST request is made to this path, the server will know that the request is for running a command
router.post("/execute", (req, res) => {
  // Extracting the command from the request body
  const command = req.body.command;

  // Using the 'exec' function to run the command
  // stdout = standard output and stderr = standard error
  exec(command, (error, stdout, stderr) => {
    // If there is an error executing the command
    if (error) {
      // Send a response with a 500 status code (Internal Server Error) and the error message
      res.status(500).json({ error: error.message });
      // Return early to prevent further execution
      return;
    }
    // If the command is executed successfully, send the output (either from 'stdout' or 'stderr') as a JSON response
    res.json({ output: stdout || stderr });
  });
});

module.exports = router;
