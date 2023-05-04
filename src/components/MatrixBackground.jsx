import React, { useEffect, useRef } from "react";
import "./styles/MatrixBackground.css";

// Define the MatrixBackground component
const MatrixBackground = () => {
  // Create a ref to store the canvas element
  const canvasRef = useRef(null);

  // Set up a side effect that will run only once when the component mounts
  useEffect(() => {
    // Get the 2D rendering context for the canvas
    const ctx = canvasRef.current.getContext("2d");

    // Set the canvas height and width to match the window dimensions
    canvasRef.current.height = window.innerHeight;
    canvasRef.current.width = window.innerWidth;

    // Define the characters that will be used in the matrix
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    // Set the font size for the characters
    const fontSize = 16;

    // Calculate the number of columns based on canvas width and font size
    const columns = canvasRef.current.width / fontSize;

    // Initialize an array to store the y-position of each drop
    const drops = [];

    // Set the initial y-position of each drop
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Define the draw function to update the canvas
    function draw() {
      // Set the fill style to create a fading effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";

      // Fill the entire canvas with the fill style
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // Set the fill style for the characters and the font
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      // Loop through each drop and update its position
      for (let i = 0; i < drops.length; i++) {
        // Choose a random character from the characters string
        const character =
          characters[Math.floor(Math.random() * characters.length)];

        // Draw the character on the canvas
        ctx.fillText(character, i * fontSize, drops[i] * fontSize);

        // Reset the y-position if the drop reaches the bottom or randomly
        if (
          drops[i] * fontSize > canvasRef.current.height ||
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        // Increment the y-position of the drop
        drops[i]++;
      }
    }

    // Set an interval to continuously update the canvas by calling the draw function
    const interval = setInterval(draw, 33);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Render the canvas element with the ref and className
  return (
    <div>
      <canvas ref={canvasRef} className="MatrixBackground"></canvas>
    </div>
  );
};

export default MatrixBackground;
