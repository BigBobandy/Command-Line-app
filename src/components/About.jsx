import React from "react";
import "./styles/About.css";

function About() {
  return (
    <div className="About">
      <h2>
        <code>About this site</code>
      </h2>
      <code>
        This website allows you to execute command-line commands through a
        simple web interface. It communicates with a RESTful API running on a
        server, which executes the commands and returns the output.
      </code>
    </div>
  );
}

export default About;
