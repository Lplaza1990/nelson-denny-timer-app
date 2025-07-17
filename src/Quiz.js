// Quiz.js

import React, { useState } from "react";
import { vocabQuestions } from "./questions";
import "./App.css";

const Quiz = ({ questions = vocabQuestions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = questions[currentIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion.question,
        selected: selectedOption,
        correct: currentQuestion.answer,
        isCorrect,
      },
    ]);

    setSelectedOption("");

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption("");
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  return (
    <div className="quiz-container">
      <h2>Nelson-Denny Vocabulary Practice</h2>

      {showResults ? (
        <div className="results">
          <h3>Your Score: {score} / {questions.length}</h3>
          {userAnswers.map((ans, idx) => (
            <div key={idx} className={`result-item ${ans.isCorrect ? "correct" : "incorrect"}`}>
              <p><strong>{ans
