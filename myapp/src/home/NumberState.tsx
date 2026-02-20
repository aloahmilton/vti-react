import { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import { useProgress } from "./useProgress";
import "./style.css";

function NumberState() {
  const [number, setNumber] = useState<number>(0);
  const { markAsCompleted } = useProgress();

  const increment = () => setNumber(number + 1);
  const decrement = () => number > 0 && setNumber(number - 1);
  const reset = () => setNumber(0);

  return (
    <div className="container">
      {/* Page Header */}
      <header className="header">
        <h1 className="title">🔢 Number State</h1>
        <p className="subtitle">Master numeric variables in React</p>
      </header>

      {/* Simplified Explanation */}
      <section className="intro">
        <h2 className="sectionTitle">The Concept</h2>
        <p className="description">
          Number state is for everything numeric: <strong>counters, prices, scores,</strong> or any data that needs math.
        </p>
        <div className="codeBlock">
          <code className="code">
            {`const [count, setCount] = useState(0);`}
          </code>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="demo">
        <h2 className="sectionTitle">Interactive Sandbox</h2>
        <div className="display">
          <span className="displayLabel">Current Value:</span>
          <span className="displayValue">{number}</span>
        </div>

        <div className="buttonGroup">
          <button onClick={decrement} className="button" disabled={number === 0}>➖ Decrease</button>
          <button onClick={increment} className="button buttonPrimary">➕ Increase</button>
          <button onClick={reset} className="button buttonReset">🔄 Reset</button>
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz
        question="Which function is used to update the 'number' state in this lesson?"
        options={["number = 5", "setNumber(5)", "update(number, 5)", "useState(5)"]}
        correctAnswer={1}
        onComplete={() => markAsCompleted('/number')}
      />

      {/* Navigation */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" className="button">← Back to Overview</Link>
        <Link to="/input" className="button buttonPrimary">Next Lesson: Input State →</Link>
      </div>
    </div>
  );
}

export default NumberState;
