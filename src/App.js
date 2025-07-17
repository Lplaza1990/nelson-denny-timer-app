import { useEffect, useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does 'abundant' mean?",
    options: ["Scarce", "Plentiful", "Rare", "Empty"],
    answer: 1
  },
  {
    question: "What is the synonym for 'brief'?",
    options: ["Long", "Short", "Slow", "Thick"],
    answer: 1
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setFinished(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (index) => {
    if (questions[current].answer === index) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="App">
        <h1>Quiz Finished</h1>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Nelson-Denny Timer App</h1>
      <p><strong>Time Left:</strong> {timeLeft}s</p>
      <h2>{questions[current].question}</h2>
      {questions[current].options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(i)} style={{ margin: "5px" }}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default App;
