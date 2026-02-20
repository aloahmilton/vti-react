/**
 * NumberState Component
 *
 * This component demonstrates how to use React's useState hook with NUMBER values.
 *
 * WHAT IS NUMBER STATE?
 * Number state is used when you need to track:
 * - Counters (increment/decrement)
 * - Quantities
 * - Numeric values
 * - Scores
 * - Prices
 *
 * LEARNING OBJECTIVES:
 * 1. How to initialize state with a number
 * 2. How to update number state
 * 3. How to display numeric values
 * 4. How to perform math operations on state
 *
 * @author Beginner React Developer
 * @description Learn to use useState with numbers
 */

import { useState } from "react";
import "./style.css";

/**
 * NumberState - Demonstrates useState with number values
 *
 * This component shows a simple counter that:
 * - Starts at 0
 * - Increments when you click "+" button
 * - Decrements when you click "-" button
 * - Resets back to 0
 */
function NumberState() {
  // ============================================
  // STATE DECLARATION
  // ============================================
  // useState<number> - This tells TypeScript our state is a number
  // useState(0) - Initial value is 0
  //
  // Returns an array with 2 items:
  // 1. number - The current value (like a variable)
  // 2. setNumber - A function to update the value (like an assignment)
  const [number, setNumber] = useState<number>(0);

  // ============================================
  // EVENT HANDLERS
  // ============================================

  /**
   * increment - Increases the number by 1
   *
   * IMPORTANT: We use setNumber(number + 1) NOT number++
   * Because state should be treated as immutable (can't change directly)
   */
  const increment = () => {
    setNumber(number + 1);
  };

  /**
   * decrement - Decreases the number by 1
   * We check if number > 0 to prevent negative numbers
   */
  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  /**
   * reset - Sets the number back to 0
   */
  const reset = () => {
    setNumber(0);
  };

  /**
   * incrementBy5 - Increases the number by 5
   * Shows you can do math operations in the setter
   */
  const incrementBy5 = () => {
    setNumber(number + 5);
  };

  /**
   * decrementBy5 - Decreases the number by 5
   */
  const decrementBy5 = () => {
    if (number >= 5) {
      setNumber(number - 5);
    }
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div style={styles.container}>
      {/* Page Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>🔢 Number State Example</h1>
        <p style={styles.subtitle}>Learn how to use useState with numbers</p>
      </header>

      {/* Explanation Section */}
      <section style={styles.explanation}>
        <h2 style={styles.sectionTitle}>What is Number State?</h2>
        <p style={styles.text}>
          <strong>Number state</strong> is used to store numeric values in your
          component. It's perfect for counters, quantities, prices, or any value
          that represents a number.
        </p>
        <div style={styles.codeBlock}>
          <code style={styles.code}>
            {`const [number, setNumber] = useState<number>(0);`}
          </code>
        </div>
        <p style={styles.text}>
          The <code style={styles.code}>useState&lt;number&gt;</code> tells
          TypeScript this state will hold a number. The initial value is 0.
        </p>
      </section>

      {/* Interactive Demo */}
      <section style={styles.demo}>
        <h2 style={styles.sectionTitle}>Try It Yourself!</h2>

        {/* Display the current number */}
        <div style={styles.display}>
          <span style={styles.displayLabel}>Current Number:</span>
          <span style={styles.displayValue}>{number}</span>
        </div>

        {/* Counter buttons */}
        <div style={styles.buttonGroup}>
          <button
            onClick={decrement}
            style={styles.button}
            disabled={number === 0}
          >
            ➖ Decrement
          </button>

          <button
            onClick={increment}
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            ➕ Increment
          </button>
        </div>

        <div style={styles.buttonGroup}>
          <button
            onClick={decrementBy5}
            style={styles.button}
            disabled={number < 5}
          >
            ⬇️ -5
          </button>

          <button
            onClick={incrementBy5}
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            ⬆️ +5
          </button>

          <button
            onClick={reset}
            style={{ ...styles.button, ...styles.buttonReset }}
          >
            🔄 Reset
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How It Works</h2>

        <div style={styles.step}>
          <h3 style={styles.stepTitle}>Step 1: Declare State</h3>
          <pre style={styles.pre}>
            {`const [number, setNumber] = useState<number>(0);`}
          </pre>
          <p style={styles.text}>
            This creates a "variable" called{" "}
            <code style={styles.code}>number</code>
            that starts at 0, and a "setter" called{" "}
            <code style={styles.code}>setNumber</code>
            to change it.
          </p>
        </div>

        <div style={styles.step}>
          <h3 style={styles.stepTitle}>Step 2: Update State</h3>
          <pre style={styles.pre}>
            {`// To increase by 1:
setNumber(number + 1);

// To decrease by 1:
setNumber(number - 1);

// To set a specific value:
setNumber(100);`}
          </pre>
          <p style={styles.text}>
            Always use the setter function (
            <code style={styles.code}>setNumber</code>) to update state. Never
            try to modify <code style={styles.code}>number</code> directly!
          </p>
        </div>

        <div style={styles.step}>
          <h3 style={styles.stepTitle}>Step 3: Display State</h3>
          <pre style={styles.pre}>
            {`// Simply use the variable in JSX:
<p>Number: {` +
              `{number}` +
              `}</p>`}
          </pre>
          <p style={styles.text}>
            You can use <code style={styles.code}>{`{number}`}</code> anywhere
            in your JSX to display the current value.
          </p>
        </div>
      </section>

      {/* Key Points */}
      <section style={styles.keyPoints}>
        <h2 style={styles.sectionTitle}>📝 Key Points to Remember</h2>
        <ul style={styles.list}>
          <li>
            Use <code style={styles.code}>useState&lt;number&gt;</code> for
            numeric values
          </li>
          <li>Initial value can be any number (0, 1, 100, -5, etc.)</li>
          <li>Always use the setter function to update state</li>
          <li>State updates trigger a re-render of the component</li>
          <li>
            You can perform calculations in the setter:{" "}
            <code style={styles.code}>setNumber(number + 5)</code>
          </li>
        </ul>
      </section>
    </div>
  );
}

/**
 * Styles object - CSS-in-JS for styling the component
 */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
  header: {
    textAlign: "center",
    padding: "30px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2rem",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.9,
  },
  explanation: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  sectionTitle: {
    color: "#333",
    marginBottom: "15px",
  },
  text: {
    color: "#666",
    marginBottom: "15px",
  },
  codeBlock: {
    background: "#2d2d2d",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "15px",
  },
  code: {
    color: "#f8f8f2",
    fontFamily: "monospace",
    fontSize: "0.9rem",
  },
  demo: {
    background: "white",
    border: "2px solid #667eea",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
  },
  display: {
    textAlign: "center",
    padding: "30px",
    background: "#f0f0f0",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  displayLabel: {
    fontSize: "1.2rem",
    color: "#666",
    marginRight: "15px",
  },
  displayValue: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#667eea",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "15px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    background: "#6c757d",
    color: "white",
    transition: "all 0.2s",
  },
  buttonPrimary: {
    background: "#28a745",
  },
  buttonReset: {
    background: "#dc3545",
  },
  howItWorks: {
    background: "#e7f3ff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  step: {
    marginBottom: "20px",
  },
  stepTitle: {
    color: "#333",
    fontSize: "1.1rem",
    marginBottom: "10px",
  },
  pre: {
    background: "#2d2d2d",
    color: "#f8f8f2",
    padding: "15px",
    borderRadius: "5px",
    overflow: "auto",
    fontFamily: "monospace",
    fontSize: "0.9rem",
  },
  keyPoints: {
    background: "#fff3cd",
    padding: "20px",
    borderRadius: "10px",
  },
  list: {
    paddingLeft: "20px",
    color: "#666",
  },
};

export default NumberState;
