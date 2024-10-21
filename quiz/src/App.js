import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";
import EndPage from "./components/EndPage";
import { useState } from "react";
import { ScoreContext } from "./constants/ScoreContexts";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <ScoreContext.Provider value={{ score, setScore }}>
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/end" element={<EndPage />} />
          </Routes>
        </Router>
      </ScoreContext.Provider>
    </div>
  );
}

export default App;
