import React, { useState } from 'react';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Mock quiz data (replace with API call in the future)
  const quizData = [
    {
      question: 'What is the output of console.log(typeof [])?',
      options: ['array', 'object', 'undefined', 'null'],
      correctAnswer: 1
    },
    {
      question: 'Which of the following is not a valid JavaScript variable name?',
      options: ['_myVar', '2myVar', 'myVar2', '$myVar'],
      correctAnswer: 1
    },
    {
      question: 'What does the "===" operator do in JavaScript?',
      options: ['Assigns a value', 'Compares values', 'Compares values and types', 'Logical AND'],
      correctAnswer: 2
    }
  ];

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Programming Quiz</h1>
      {showScore ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">Your score: {score} out of {quizData.length}</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {quizData.length}
          </h2>
          <p className="mb-4">{quizData[currentQuestion].question}</p>
          <div className="space-y-2">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left p-2 rounded border hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;