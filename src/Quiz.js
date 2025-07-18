import { questions } from './questions';

function Quiz({ section }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const sectionQuestions = questions[section]; // ✅ select correct section

  const currentQuestion = sectionQuestions[currentQuestionIndex];

  // ...rest of your quiz logic
}
