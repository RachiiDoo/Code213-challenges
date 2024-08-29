import React, { useState } from "react";

const App = () => {
  const questions = [
    {
      questionText: "What is the capital of Algeria?",
      answerOptions: [
        { answerText: "New York", isTrue: false },
        { answerText: "London", isTrue: false },
        { answerText: "Annaba", isTrue: false },
        { answerText: "Algiers", isTrue: true },
      ],
    },
    {
      questionText: "Is Cyber Security a useless field to work in?",
      answerOptions: [
        { answerText: "Maybe", isTrue: false },
        { answerText: "No", isTrue: true },
        { answerText: "I don't know", isTrue: true },
        { answerText: "For sure", isTrue: false },
      ],
    },
    {
      questionText: "What is the best city to leave in as a software engineer?",
      answerOptions: [
        { answerText: "New York", isTrue: true },
        { answerText: "Tokyo", isTrue: false },
        { answerText: "Montreal", isTrue: false },
        { answerText: "Cairo", isTrue: false },
      ],
    },
    {
      questionText: "What's the best programming youtube channel?",
      answerOptions: [
        { answerText: "Elzero web school", isTrue: true },
        { answerText: "Traversy media", isTrue: true },
        { answerText: "Web dev simplified", isTrue: true },
        { answerText: "JavaScript Mastery", isTrue: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const handleAnswerButton = (isTrue) => {
    if (isTrue) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const [showScore, setShowScore] = useState(false);

  const handleRestartButton = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] w-full">
      <div className="flex gap-8 p-8 w-4/5 h-fit text-white rounded-xl shadow-lg bg-containerColor absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        {!showScore ? (
          <>
            <div className="flex flex-col gap-4 w-1/2">
              <h1 className="text-4xl font-semibold">
                Question {currentQuestion + 1} / {questions.length}
              </h1>
              <h1 className="text-xl">
                {" "}
                {questions[currentQuestion].questionText}{" "}
              </h1>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerButton(answerOption.isTrue)}
                    className="border-2 border-borderButtonColor rounded-lg px-4 py-1"
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full flex-col gap-8 items-center h-[100%] justify-center">
              <h1 className="text-5xl">
                You scored {score} of {questions.length}
              </h1>
              <button
                onClick={handleRestartButton}
                className="border-2 border-white rounded-lg px-4 py-2 text-4xl hover:bg-white hover:text-containerColor"
              >
                Restart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
