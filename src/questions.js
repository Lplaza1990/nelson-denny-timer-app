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

export const comprehensionQuestions = [
  {
    passage: "The Industrial Revolution began in the late 18th century...",
    question: "What was a major cause of the Industrial Revolution?",
    options: ["The rise of agriculture", "Technological innovations", "Collapse of empires", "New religions"],
    answer: "Technological innovations"
  },
  {
    passage: "Photosynthesis is a process used by plants to convert light energy...",
    question: "What do plants produce during photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    passage: "In Shakespeare's plays, characters often speak in iambic pentameter...",
    question: "What is iambic pentameter?",
    options: ["A poetic theme", "A meter with five beats per line", "A form of rhyme", "A character's role"],
    answer: "A meter with five beats per line"
  }
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
