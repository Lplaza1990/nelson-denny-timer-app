// src/Quiz.js
import React from "react";
import "./App.css";

function Quiz({ section, question, selectedAnswer, onAnswer, onNext }) {
  if (!question) return null;

  const { number, question: text, options } = question;

  return (
    <div className="quiz-container">
      <h2>{section} Section</h2>
      <div className="question-block">
        <p><strong>{number}.</strong> {text}</p>
        <div className="options-row">
          {options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                name={`question-${number}`}
                value={option}
                checked={selectedAnswer === option}
                onChange={() => onAnswer(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <button onClick={onNext} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
}

export default Quiz;
