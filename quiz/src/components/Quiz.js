import React from "react";
import Questions from "../components/Questions";

const Quiz = () => {
  return (
    <div className="container">
      <h1 className="title">World Quiz</h1>
      <div className="question__container">
        <Questions />
      </div>
    </div>
  );
};

export default Quiz;
