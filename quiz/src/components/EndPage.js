import React, { useContext } from "react";
import { ScoreContext } from "../constants/ScoreContexts";
import { Link } from "react-router-dom";

const EndPage = () => {
  const { score, setScore } = useContext(ScoreContext);

  return (
    <div>
      <h1>total = {score} / 10</h1>
      <Link to="/">
        <button onClick={() => setScore(0)}>Restart</button>
      </Link>
    </div>
  );
};

export default EndPage;
