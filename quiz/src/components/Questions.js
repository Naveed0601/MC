import React, { useContext, useState } from "react";
import data from "../constants/question.json";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../constants/ScoreContexts";

const Questions = () => {
  const navigate = useNavigate();
  const { score, setScore } = useContext(ScoreContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const hanlderNextQuestion = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/end");
    }
  };
  const handlerCheckAnswer = (isCorrect) => {
    // console.log("choice ", isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }

    hanlderNextQuestion();
  };
  const currentQuiz = data[currentQuestion];
  return (
    <div className="start_container">
      <h1>score : {score}</h1>
      <div className="container" key={currentQuiz?.question}>
        <h2 className="questionTitle">
          {currentQuestion + 1} {currentQuiz?.question}
        </h2>
        <div className="options">
          {currentQuiz?.answerOptions.map((opt) => (
            <p key={opt.text} onClick={() => handlerCheckAnswer(opt.isCorrect)}>
              {opt.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
