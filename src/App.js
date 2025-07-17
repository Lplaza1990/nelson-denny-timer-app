import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {
    question: "What is the synonym of 'abundant'?",
    options: ["Rare", "Plentiful", "Scarce", "Empty"],
    answer: "Plentiful",
  },
  {
    question: "What is the antonym of 'benevolent'?",
    options: ["Kind", "Cruel", "Generous", "Friendly"],
    answer: "Cruel",
  },
  {
    question: "Choose the correct synonym for 'elated':",
    options: ["Sad", "Joyful", "Tired", "Angry"],
    answer: "Joyful",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(15); // seconds
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (finished) return;

    if (timer === 0) {
      handleNext();
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, finished]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
      setSelectedAnswer(null);
      setTimer(15);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="App">
      <h1>Nelson-Denny Practice Quiz</h1>

      {!finished ? (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((opt) => (
              <li
                key={opt}
                onClick={() => handleAnswerClick(opt)}
                style={{
                  backgroundColor:
                    selectedAnswer === opt ? '#ccc' : 'transparent',
                  cursor: 'pointer',
                  padding: '8px',
                  margin: '4px 0',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              >
                {opt}
              </li>
            ))}
          </ul>

          <p>Time Left: {timer}s</p>
          <button onClick={handleNext} disabled={!selectedAnswer}>
            Next
          </button>
        </>
      ) : (
        <>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </>
      )}
    </div>
  );
}

export default App;
