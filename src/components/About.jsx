import React from "react";
import "./styles/About.css";

function About() {
  return (
    <div className="About">
      <h2>About this site</h2>
      <p>
        This website allows you to execute command-line commands through a
        simple web interface. It communicates with a RESTful API running on a
        server, which executes the commands and returns the output.
      </p>
    </div>
  );
}

export default About;
