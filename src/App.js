import React, { useState } from "react";
import "./App.css";
import Quiz from "./Quiz";
import Result from "./Result";
import { questions } from "./questions";

function App() {
  const [section, setSection] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartSection = (selectedSection) => {
    setSection(selectedSection);
    setQuizComplete(false);
    setScore(0);
  };

  const handleFinishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizComplete(true);
  };

  const handleRestart = () => {
    setSection(null);
    setQuizComplete(false);
    setScore(0);
  };

  return (
    <div className="App">
      {!section && (
        <div className="welcome-screen">
          <h1>Nelson-Denny Reading Test Practice</h1>
          <p>Select a section to begin:</p>
          <button onClick={() => handleStartSection("vocabulary")}>Vocabulary</button>
          <button onClick={() => handleStartSection("reading")}>Reading Comprehension</button>
          <button onClick={() => handleStartSection("synonyms")}>Synonyms & Antonyms</button>
        </div>
      )}

      {section && !quizComplete && (
        <Quiz
          section={section}
          onFinish={handleFinishQuiz}
        />
      )}

      {section && quizComplete && (
        <Result
          score={score}
          total={questions[section].length}
          onRestart={handleRestart}
          section={section}
        />
      )}
    </div>
  );
}

export default App;
