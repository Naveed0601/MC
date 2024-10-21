import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start-container">
      <Link to="/quiz" className="start">
        <button className="start-button">Start Quiz</button>
      </Link>
    </div>
  );
};

export default StartPage;
