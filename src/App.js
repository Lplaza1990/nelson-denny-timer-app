import React, { useState } from "react";
import "./App.css";
import Quiz from "./Quiz";
import Result from "./Result";

// Placeholder question data for now – you'll replace this later
import { vocabQuestions, comprehensionQuestions, synonymAntonymQuestions } from "./questions";

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

  const getQuestionsForSection = () => {
    switch (section) {
      case "vocab":
        return vocabQuestions;
      case "comprehension":
        return comprehensionQuestions;
      case "synonyms":
        return synonymAntonymQuestions;
      default:
        return [];
    }
  };

  return (
    <div className="App">
      {!section && (
        <div className="welcome-screen">
          <h1>Nelson-Denny Reading Test Practice</h1>
          <p>Select a section to begin:</p>
          <button onClick={() => handleStartSection("vocab")}>Vocabulary</button>
          <button onClick={() => handleStartSection("comprehension")}>Reading Comprehension</button>
          <button onClick={() => handleStartSection("synonyms")}>Synonyms & Antonyms</button>
        </div>
      )}

      {section && !quizComplete && (
        <Quiz
          questions={getQuestionsForSection()}
          section={section}
          onFinish={handleFinishQuiz}
        />
      )}

      {section && quizComplete && (
        <Result
          score={score}
          total={getQuestionsForSection().length}
          onRestart={handleRestart}
          section={section}
        />
      )}
    </div>
  );
}

export default App;
