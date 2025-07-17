// src/Quiz.js
import React, { useState } from "react";
import { vocabQuestions } from "./questions";
import Result from "./Result";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (choice) => {
    const updatedAnswers = [...answers, choice];
    setAnswers(updatedAnswers);

    if (choice === vocabQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < vocabQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return <Result score={score} total={vocabQuestions.length} />;
  }

  const question = vocabQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      <h2>{`${currentQuestion + 1}. ${question.question}`}</h2>
      <form>
        {question.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                onChange={() => handleAnswer(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Quiz;
