
import React, { useState } from 'react';
import { vocabQuestions } from './questions';
import './App.css';

const Quiz = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentQuestion < vocabQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSubmitted(true);
      onFinish && onFinish(calculateScore());
    }
  };

  const calculateScore = () => {
    let score = 0;
    vocabQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  if (isSubmitted) {
    return (
      <div className="results">
        <h2>Quiz Complete!</h2>
        <p>Your Score: {calculateScore()} / {vocabQuestions.length}</p>
      </div>
    );
  }

  const question = vocabQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      <h2>Vocabulary Section</h2>
      <div className="question-box">
        <p><strong>{currentQuestion + 1}.</strong> {question.question}</p>
        <div className="options-row">
          {question.options.map((option, i) => (
            <label key={i} className="option-label">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={selectedAnswers[currentQuestion] === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>
        {currentQuestion === vocabQuestions.length - 1 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default Quiz;
