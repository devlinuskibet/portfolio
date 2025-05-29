import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Student",
          "Angular Developer(Freelancer)",
          "MERN Stack Enthusiast",
          "AI & Blockchain Explorer",
          "Open Source Contributor(Fedora)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
