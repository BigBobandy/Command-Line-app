import { useState } from "react";
import "./App.css";

function App() {
  // Declaring state variables for input and output
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  // Handle changes to the command input field
  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleCommandSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>Command Line Interface</h1>
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
  );
}

export default App;
