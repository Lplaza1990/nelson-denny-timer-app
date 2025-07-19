// src/questions.js

export const vocabQuestions = [
  {
    question: "Select the best synonym for the word: Arduous",
    options: ["Easy", "Difficult", "Quick", "Unnecessary"],
    answer: "Difficult"
  },
  {
    question: "Select the best synonym for the word: Benevolent",
    options: ["Kind", "Cruel", "Selfish", "Apathetic"],
    answer: "Kind"
  },
  {
    question: "Select the best synonym for the word: Candid",
    options: ["Deceptive", "Honest", "Timid", "Indifferent"],
    answer: "Honest"
  }
  // Add more vocabulary questions here...
];

export const readingQuestions = [
  {
    passage: "Nelson-Denny is a test used to measure reading comprehension and vocabulary.",
    question: "What is the Nelson-Denny test used for?",
    options: [
      "Measuring physical fitness",
      "Measuring reading comprehension and vocabulary",
      "Testing math skills",
      "Assessing personality"
    ],
    answer: "Measuring reading comprehension and vocabulary"
  },
  {
    passage: "Time management is important during standardized testing.",
    question: "What is important during standardized testing?",
    options: [
      "Skipping questions",
      "Time management",
      "Talking to others",
      "Ignoring instructions"
    ],
    answer: "Time management"
  }
  // Add more reading comprehension questions here...
];

export const synAntQuestions = [
  {
    type: "synonym",
    word: "Brisk",
    options: ["Slow", "Quick", "Lazy", "Tired"],
    answer: "Quick"
  },
  {
    type: "antonym",
    word: "Generous",
    options: ["Kind", "Greedy", "Helpful", "Nice"],
    answer: "Greedy"
  },
  {
    type: "synonym",
    word: "Silent",
    options: ["Noisy", "Quiet", "Loud", "Talkative"],
    answer: "Quiet"
  }
  // Add more synonym/antonym questions here...
];
