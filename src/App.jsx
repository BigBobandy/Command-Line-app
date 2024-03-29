import axios from "axios";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import CommandList from "./components/CommandList";
import MatrixBackground from "./components/MatrixBackground";

function App() {
  // Declaring state variables for input and output
  const [command, setCommand] = useState("");
  // Output state variable is an array which will contain the lines of the command output
  const [output, setOutput] = useState([]);

  // Handle changes to the command input field
  const handleCommandChange = (event) => {
    // Update the command variable with the new input
    setCommand(event.target.value);
  };

  // Handle form submission that so that the command is executed
  const handleCommandSubmit = (event) => {
    // Prevent the page from reloading on submit
    event.preventDefault();

    // Send a POST request to the backend server with the command as the request
    axios
      .post("http://localhost:3001/api/execute", { command: command })
      .then((response) => {
        // Update the output state with the command output received from the backend
        setOutput([...output, response.data.output]);
      })
      .catch((error) => {
        // If there is an error, update the output state with the error message
        setOutput([...output, error.message]);
      });

    // Clear the command input field
    setCommand("");
  };

  return (
    <div className="App-container">
      <MatrixBackground />
      <div className="App-content">
        <About></About>
        <div className="App">
          <h1>
            <code>Command Line Interface</code>
          </h1>
          <form onSubmit={handleCommandSubmit}>
            <input
              type="text"
              placeholder="Enter command"
              value={command}
              onChange={handleCommandChange}
            />
            <button type="submit">Execute</button>
          </form>
          <div className="output">
            {output.map((line, index) => (
              <pre key={index}>{line}</pre>
            ))}
          </div>
        </div>
        <CommandList></CommandList>
      </div>
    </div>
  );
}

export default App;
