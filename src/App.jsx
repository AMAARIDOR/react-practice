import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore((s) => s + 1);
  }

  return (
    <div>
      <div>{score}</div>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +1
      </button>
    </div>
  );
}

export default App;
