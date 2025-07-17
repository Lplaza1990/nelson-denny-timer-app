import React from "react";

function Result({ score, total, section, onRestart }) {
  const getSectionTitle = () => {
    switch (section) {
      case "vocab":
        return "Vocabulary";
      case "comprehension":
        return "Reading Comprehension";
      case "synonyms":
        return "Synonyms & Antonyms";
      default:
        return "";
    }
  };

  const getMessage = () => {
    const percent = (score / total) * 100;
    if (percent >= 80) return "Excellent work!";
    if (percent >= 60) return "Good effort, keep practicing!";
    return "Keep working — you'll get better with practice!";
  };

  return (
    <div className="result-screen">
      <h2>Section Complete: {getSectionTitle()}</h2>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
      <p>{getMessage()}</p>
      <button onClick={onRestart}>Return to Home</button>
    </div>
  );
}

export default Result;
