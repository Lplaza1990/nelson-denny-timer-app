// src/Quiz.js
import React, { useState } from 'react';
import { vocabQuestions } from './questions';
import Result from './Result';
import './App.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === vocabQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion + 1 < vocabQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <Result score={score} total={vocabQuestions.length} />;
  }

  const question = vocabQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      <h2>Vocabulary Section</h2>
      <div className="question-block">
        <p>
          <strong>{currentQuestion + 1}.</strong> {question.question}
        </p>
        <form>
          {question.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio
