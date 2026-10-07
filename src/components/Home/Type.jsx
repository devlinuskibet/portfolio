import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Software Engineer",
          "Full-Stack Developer",
          "LLM & RAG Application Developer",
          "React Native Mobile Developer",
          "Technical Trainer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
