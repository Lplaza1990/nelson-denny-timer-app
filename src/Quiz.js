import React, { useState } from "react";
import "./App.css";

function Quiz({ questions, onFinish, section }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      onFinish(score + (selectedOption === questions[currentQuestion].answer ? 1 : 0));
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-box">
        <h2>{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
        <div className="options-row">
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                name="quiz-option"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <button className="next-button" onClick={handleNext} disabled={!selectedOption}>
        {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;