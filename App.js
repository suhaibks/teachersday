import React, { useEffect, useState } from "react";
import "./App.css";

const lines = [
  "[ SYSTEM BOOTING... ]",
  "Loading Mentor Database...",
  "Loading Knowledge Engine...",
  "Loading Inspiration Module...",
  "",
  "ACCESS GRANTED",
  "",
  "NITHIN SIR",
  "Teacher • Mentor • Guide",
  "",
  "Thank you for debugging our mistakes,",
  "upgrading our knowledge,",
  "and helping us build a better future.",
  "",
  "HAPPY TEACHERS' DAY 2026"
];

function App() {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      if (current < lines.length) {
        setDisplayedLines(prev => [...prev, lines[current]]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="terminal-window">

        <div className="topbar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">mentor_system.exe</span>
        </div>

        <div className="terminal">

          {displayedLines.map((line, index) => {

            if (line === "NITHIN SIR") {
              return (
                <h1 key={index} className="name">
                  {line}
                </h1>
              );
            }

            if (line === "Teacher • Mentor • Guide") {
              return (
                <div key={index} className="role">
                  {line}
                </div>
              );
            }

            if (line === "ACCESS GRANTED") {
              return (
                <div key={index} className="success">
                  {line}
                </div>
              );
            }

            if (line === "HAPPY TEACHERS' DAY 2026") {
              return (
                <div key={index} className="footer">
                  {line}
                </div>
              );
            }

            return (
              <div key={index} className="line">
                {line}
              </div>
            );
          })}

          <span className="cursor">█</span>

        </div>
      </div>
    </div>
  );
}

export default App;
