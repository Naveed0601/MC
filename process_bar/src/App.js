import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalID);
      }
    }, 100);

    return () => clearInterval(intervalID);
  }, [count]);

  return (
    <div className="container">
      <h1 className="container__title">Process Bar</h1>
      <div className="container__bar">
        <div
          className="container__percentage"
          style={{ width: `${count}%`, backgroundColor: "#00c251" }}
        />
        <div className="container__count">{count}%</div>
      </div>
    </div>
  );
}

export default App;
