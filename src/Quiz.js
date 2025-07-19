import React, { useState, useEffect } from 'react';
import { questions } from './questions';
import Result from './Result';

const sectionDurations = {
  vocabulary: 15 * 60, // 15 minutes
  reading: 20 * 60,    // 20 minutes
  synonyms: 10 * 60    // 10 minutes
};

const Quiz = ({ section }) => {
  const quizData = questions[section];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sectionDurations[section]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowResult(true); // Auto-submit on timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [section]);

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions({ ...selectedOptions, [questionIndex]: option });
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  if (showResult) {
    return (
      <Result
        selectedOptions={selectedOptions}
        quizData={quizData}
        section={section}
      />
    );
  }

  return (
    <div className="quiz-container">
      <h2>{section.toUpperCase()} SECTION</h2>
      <div className="timer">Time Left: {formatTime(timeLeft)}</div>
      <div className="question">
        <p>{currentQuestion + 1}. {quizData[currentQuestion].question}</p>
        <div className="options">
          {quizData[currentQuestion].options.map((option, i) => (
            <label key={i} style={{ display: 'inline-block', marginRight: '1rem' }}>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={selectedOptions[currentQuestion] === option}
                onChange={() => handleOptionSelect(currentQuestion, option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="navigation">
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion(prev => prev - 1)}>Previous</button>
        )}
        {currentQuestion < quizData.length - 1 ? (
          <button onClick={() => setCurrentQuestion(prev => prev + 1)}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
