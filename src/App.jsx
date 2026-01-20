import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Assessment</h1>

      <h2>Counter Value: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "10px", padding: "10px" }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ padding: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;