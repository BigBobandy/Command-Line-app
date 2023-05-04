// Importing the required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const commandsRoute = require("./routes/commands");

// Create a new express application
const app = express();

// Middleware
// Enable CORS (Cross-Origin Resource Sharing) for the server
app.use(cors());
// Use the bodyParser middleware to parse JSON payloads in incoming requests
app.use(bodyParser.json());

// Set the server's listening port, using the enviroments variable PORT if available, or defualting to 3001
const PORT = process.env.PORT || 3001;

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to the console to indicate that the server has started successfully
  console.log(`Server is running on port ${PORT}`);
});

// Telling the express aplication to use commandsRoute for requests with the path prefix '/api'
app.use("/api", commandsRoute);
