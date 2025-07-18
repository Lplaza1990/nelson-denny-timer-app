import React from "react";

function Result({ score, total, onRestart, section }) {
  return (
    <div className="results">
      <h2>{section.charAt(0).toUpperCase() + section.slice(1)} Section Complete</h2>
      <p>Your Score: {score} out of {total}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Result;