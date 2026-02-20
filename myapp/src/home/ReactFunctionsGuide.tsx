/**
 * React Functions & Brackets Guide
 * Educational page explaining React syntax, functions, and bracket usage
 */

export default function ReactFunctionsGuide() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Functions & Brackets Guide</h1>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📌 React Function Types</h2>
        
        <div style={styles.card}>
          <h3>1. Arrow Functions (Recommended) ➡️</h3>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
{`const MyComponent = () => {
  return <h1>Hello World</h1>;
};`}
          </pre>
          <p><strong>When to use:</strong> Most common in modern React. Use for components, event handlers, and hooks.</p>
          <p><strong>Benefits:</strong> Concise, binds 'this' automatically, easier to read</p>
        </div>

        <div style={styles.card}>
          <h3>2. Regular Functions</h3>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
{`function MyComponent() {
  return <h1>Hello World</h1>;
}`}
          </pre>
          <p><strong>When to use:</strong> Can be used, but arrow functions are preferred</p>
          <p><strong>Note:</strong> Requires explicit 'return' statement</p>
        </div>

        <div style={styles.card}>
          <h3>3. Single Parameter Arrow Functions (No Parentheses)</h3>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
{`const handleClick = event => {
  console.log(event);
};`}
          </pre>
          <p><strong>When to use:</strong> When function has exactly one parameter</p>
          <p><strong>Note:</strong> Parentheses optional when 1 parameter, required for 0 or 2+ parameters</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🧀 Understanding Brackets in React</h2>
        
        <div style={styles.card}>
          <h3>1. Curly Braces {} - JavaScript Expressions</h3>
          <p><strong>Purpose:</strong> Insert dynamic JavaScript values into JSX</p>
          <p><strong>Where to use:</strong></p>
          <ul>
            <li>Inside JSX to display variables: <code>{`<h1>{name}</h1>`}</code></li>
            <li>In function bodies for code logic</li>
            <li>For object properties: <code>{`{key: 'value'}`}</code></li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre style={styles.code}>
{`const name = "React";
const age = 10;

return (
  <div>
    <h1>Hello {name}</h1>
    <p>Age: {age}</p>
  </div>
);`}
          </pre>
        </div>

        <div style={styles.card}>
          <h3>2. Square Brackets [] - Arrays & Array Destructuring</h3>
          <p><strong>Purpose:</strong> Store multiple values, or extract specific array elements</p>
          <p><strong>Where to use:</strong></p>
          <ul>
            <li>Creating arrays: <code>{`const items = [1, 2, 3];`}</code></li>
            <li>Array destructuring: <code>{`const [first, second] = array;`}</code></li>
            <li>In React hooks: <code>{`const [count, setCount] = useState(0);`}</code></li>
            <li>Accessing array elements: <code>{`array[0]`}</code></li>
          </ul>
          <p><strong>Example - React Hooks:</strong></p>
          <pre style={styles.code}>
{`import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  //     ^     ^
  //   state setter function
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`}
          </pre>
        </div>

        <div style={styles.card}>
          <h3>3. Parentheses () - Function Calls & Grouping</h3>
          <p><strong>Purpose:</strong> Call functions, group expressions, define parameters</p>
          <p><strong>Where to use:</strong></p>
          <ul>
            <li>Calling functions: <code>{`handleClick()`}</code></li>
            <li>Function parameters: <code>{`const add = (a, b) => a + b;`}</code></li>
            <li>Implicit return in arrow functions: <code>{`const add = (a, b) => (a + b);`}</code></li>
            <li>Event handlers: <code>{`onClick={() => doSomething()}`}</code></li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre style={styles.code}>
{`// Function definition with parameters
const greet = (firstName, lastName) => {
  return \`Hello \${firstName} \${lastName}\`;
};

// Function call
const message = greet("John", "Doe");

// Event handler with parentheses
<button onClick={() => handleClick(123)}>Click Me</button>`}
          </pre>
        </div>

        <div style={styles.card}>
          <h3>4. Object Braces {} - Objects & Destructuring</h3>
          <p><strong>Purpose:</strong> Create objects, destructure object properties</p>
          <p><strong>Where to use:</strong></p>
          <ul>
            <li>Creating objects: <code>{`{ name: 'John', age: 30 }`}</code></li>
            <li>Object destructuring: <code>{`const { name, age } = person;`}</code></li>
            <li>Inline styles: <code>{`style={{ color: 'red' }}`}</code></li>
            <li>Component props: <code>{`{ prop1: 'value1' }`}</code></li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre style={styles.code}>
{`// Object creation
const user = {
  name: "Alice",
  email: "alice@example.com"
};

// Object destructuring
const { name, email } = user;

// In components with styles
return (
  <div style={{ color: 'blue', fontSize: '16px' }}>
    Hello {name}
  </div>
);`}
          </pre>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Common Bracket Combinations</h2>
        
        <div style={styles.card}>
          <p><strong>Arrow function with destructuring:</strong></p>
          <pre style={styles.code}>
{`const MyComponent = ({ name, age }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div style={{ padding: '10px' }}>
      {name} - {age}
    </div>
  );
};`}
          </pre>
        </div>

        <div style={styles.card}>
          <p><strong>useState with object state:</strong></p>
          <pre style={styles.code}>
{`const [user, setUser] = useState({
  name: "John",
  age: 30
});

const updateUser = (newData) => {
  setUser({ ...user, ...newData });
};`}
          </pre>
        </div>

        <div style={styles.card}>
          <p><strong>Array map with JSX:</strong></p>
          <pre style={styles.code}>
{`const items = [1, 2, 3];

return (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);`}
          </pre>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>💡 Quick Reference Table</h2>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th>Bracket Type</th>
              <th>Symbol</th>
              <th>Primary Use</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Curly Braces</td>
              <td>{`{}`}</td>
              <td>JavaScript in JSX / Objects</td>
              <td>{`<div>{variable}</div>`}</td>
            </tr>
            <tr>
              <td>Square Brackets</td>
              <td>[]</td>
              <td>Arrays / Destructuring</td>
              <td>{`const [state, setState] = useState()`}</td>
            </tr>
            <tr>
              <td>Parentheses</td>
              <td>()</td>
              <td>Functions / Calls</td>
              <td>{`const add = (a, b) => a + b`}</td>
            </tr>
            <tr>
              <td>Angle Brackets</td>
              <td>{`<>`}</td>
              <td>JSX Components</td>
              <td>{`<MyComponent prop="value" />`}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>✅ Best Practices</h2>
        <ul style={styles.list}>
          <li>Use arrow functions for components and callbacks</li>
          <li>Always destructure parameters when possible for cleaner code</li>
          <li>Use curly braces in JSX to embed dynamic values</li>
          <li>Use array destructuring with useState for cleaner state management</li>
          <li>Always add 'key' prop when rendering lists with .map()</li>
          <li>Use inline objects cautiously (they recreate on every render)</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  } as React.CSSProperties,
  title: {
    fontSize: '32px',
    color: '#007bff',
    textAlign: 'center' as const,
    marginBottom: '40px',
    borderBottom: '3px solid #007bff',
    paddingBottom: '15px'
  } as React.CSSProperties,
  section: {
    marginBottom: '40px'
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '24px',
    color: '#0056b3',
    marginBottom: '20px',
    borderLeft: '4px solid #0056b3',
    paddingLeft: '15px'
  } as React.CSSProperties,
  card: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '15px'
  } as React.CSSProperties,
  code: {
    backgroundColor: '#2d2d2d',
    color: '#f8f8f2',
    padding: '15px',
    borderRadius: '6px',
    overflow: 'auto' as const,
    fontSize: '13px',
    lineHeight: '1.4',
    fontFamily: 'Courier New, monospace'
  } as React.CSSProperties,
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6'
  } as React.CSSProperties,
  tableHeader: {
    backgroundColor: '#007bff',
    color: 'white'
  } as React.CSSProperties,
  list: {
    backgroundColor: '#f0f7ff',
    padding: '20px 40px',
    borderRadius: '8px',
    borderLeft: '4px solid #007bff'
  } as React.CSSProperties
};
