import React, { useEffect, useState } from "react";

const SECTION_TIMES = {
  vocab: 15 * 60, // 15 minutes
  comprehension: 20 * 60, // 20 minutes
  synonyms: 10 * 60, // 10 minutes
};

function Quiz({ questions, section, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(SECTION_TIMES[section]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const min = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const sec = (secs % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
    setSelected(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    onFinish(score);
  };

  const current = questions[currentIndex];

  return (
    <div className="quiz-container">
      <h2>
        {currentIndex + 1}. {current.question}
      </h2>
      <div className="options-list">
        {current.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(opt)}
            className={selected === opt ? "selected" : ""}
          >
            {opt}
          </button>
        ))}
      </div>
      <p>Time Remaining: {formatTime(timeLeft)}</p>
      <button onClick={handleNext} disabled={selected === null}>
        {currentIndex + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;
