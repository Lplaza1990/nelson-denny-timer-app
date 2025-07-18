import React, { useState } from "react";
import "./App.css";
import { questions } from "./questions";

function Quiz({ section, onFinish }) {
  const sectionTitle = {
    vocabulary: "Vocabulary",
    reading: "Reading Comprehension",
    synonyms: "Synonyms & Antonyms",
  };

  const sectionQuestions = questions[section];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const currentQuestion = sectionQuestions[currentQuestionIndex];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < sectionQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      onFinish(score + (selectedOption =
