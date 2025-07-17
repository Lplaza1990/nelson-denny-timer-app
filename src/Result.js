import React from "react";

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed</h2>
      <p>You answered {score} out of {total} questions correctly.</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
