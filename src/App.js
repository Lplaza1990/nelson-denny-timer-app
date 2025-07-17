import { useState, useEffect } from "react";
import "./App.css";

const questions = {
  vocabulary: [
    {
      question: "What is the meaning of the word *benevolent*?",
      options: ["Angry", "Generous", "Lazy", "Hostile"],
      answer: "Generous",
    },
    {
      question: "Choose the synonym for *rapid*.",
      options: ["Slow", "Fast", "Still", "Calm"],
      answer: "Fast",
    },
  ],
  comprehension: [
    {
      question: "The sun rises in the east. What does this mean?",
      options: [
        "The sun sets in the east",
        "The sun never moves",
        "The sun appears in the eastern sky each morning",
        "The sun moves from north to south",
      ],
      answer: "The sun appears in the eastern sky each morning",
    },
  ],
  synonyms: [
    {
      question: "Choose the synonym for *happy*.",
      options: ["Sad", "Angry", "Joyful", "Tired"],
      answer: "Joyful",
    },
    {
      question: "Choose the antonym for *honest*.",
      options: ["Truthful", "Deceitful", "Kind", "Loyal"],
      answer: "Deceitful",
    },
  ],
};

function App() {
  const sections = ["vocabulary", "comprehension", "synonyms"];
  const [sectionIndex, setSectionIn]()
