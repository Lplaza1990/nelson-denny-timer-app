import React from "react";

const Quiz = ({ questions, currentQuestionIndex, onAnswer, showResults, score }) => {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {showResults ? (
        <div className="results">
          <h2>Test Completed!</h2>
          <p>You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <div className="question-block">
          <h3>
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h3>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button onClick={() => onAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
