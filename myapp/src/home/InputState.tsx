/**
 * InputState Component
 * 
 * This component demonstrates how to use React's useState hook with STRING values.
 * 
 * WHAT IS INPUT STATE?
 * Input state is used when you need to track:
 * - Text input values
 * - Form field values
 * - User names
 * - Search queries
 * - Any text data
 * 
 * LEARNING OBJECTIVES:
 * 1. How to initialize state with a string
 * 2. How to handle input changes
 * 3. How to display string values
 * 4. How to controlled components work
 * 
 * @author Beginner React Developer
 * @description Learn to use useState with strings
 */

import { useState } from 'react';
import './style.css';

/**
 * InputState - Demonstrates useState with string values
 * 
 * This component shows:
 * - A text input field
 * - Real-time display of input value
 * - Multiple input examples
 */
function InputState() {
    // ============================================
    // STATE DECLARATION
    // ============================================
    // useState<string> - This tells TypeScript our state is a string
    // useState('') - Initial value is an empty string
    const [inputValue, setInputValue] = useState<string>('');
    const [userName, setUserName] = useState<string>('Guest');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // ============================================
    // EVENT HANDLERS
    // ============================================
    
    /**
     * handleInputChange - Updates state when input changes
     * 
     * IMPORTANT: We use e.target.value to get the input value
     * This is the standard way to handle input in React
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    /**
     * handleNameChange - Updates username state
     */
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    /**
     * handleSearchChange - Updates search query
     */
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    /**
     * resetAll - Resets all inputs to initial values
     */
    const resetAll = () => {
        setInputValue('');
        setUserName('Guest');
        setSearchQuery('');
    };

    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">✏️ Input State Example</h1>
                <p className="subtitle">
                    Learn how to use useState with strings
                </p>
            </header>

            {/* Explanation Section */}
            <section className="explanation">
                <h2 className="sectionTitle">What is Input State?</h2>
                <p className="text">
                    <strong>Input state</strong> is used to store text values in your component.
                    It's perfect for form inputs, text fields, search boxes, or any user text entry.
                </p>
                <div className="codeBlock">
                    <code className="code">
                        {`const [inputValue, setInputValue] = useState<string>('');`}
                    </code>
                </div>
                <p className="text">
                    The <code className="code">useState&lt;string&gt;</code> tells TypeScript 
                    this state will hold a string. The initial value is an empty string.
                </p>
            </section>

            {/* Interactive Demo */}
            <section className="demo">
                <h2 className="sectionTitle">Try It Yourself!</h2>
                
                {/* Example 1: Basic Input */}
                <div className="inputGroup">
                    <label className="label">Basic Input:</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type something..."
                        className="input"
                    />
                </div>

                {/* Display the current input value */}
                <div className="display">
                    <span className="displayLabel">You typed:</span>
                    <span className="displayValue">{inputValue || '(empty)'}</span>
                </div>

                {/* Example 2: Username Input */}
                <div className="inputGroup">
                    <label className="label">Enter your name:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                        placeholder="Your name"
                        className="input"
                    />
                </div>

                <div className="display">
                    <span className="displayLabel">Hello,</span>
                    <span className="displayValue">{userName}!</span>
                </div>

                {/* Example 3: Search Input */}
                <div className="inputGroup">
                    <label className="label">Search:</label>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="input"
                    />
                </div>

                <div className="display">
                    <span className="displayLabel">Searching for:</span>
                    <span className="displayValue">{searchQuery || '(nothing)'}</span>
                </div>

                {/* Reset Button */}
                <div className="buttonGroup">
                    <button onClick={resetAll} className="button buttonReset">
                        🔄 Reset All
                    </button>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="howItWorks">
                <h2 className="sectionTitle">How It Works</h2>
                
                <div className="step">
                    <h3 className="stepTitle">Step 1: Declare State</h3>
                    <pre className="pre">
{`const [inputValue, setInputValue] = useState<string>('');`}
                    </pre>
                    <p className="text">
                        This creates a "variable" called <code className="code">inputValue</code> 
                        that starts empty, and a "setter" called <code className="code">setInputValue</code> 
                        to change it.
                    </p>
                </div>

                <div className="step">
                    <h3 className="stepTitle">Step 2: Handle Input Changes</h3>
                    <pre className="pre">
{`// Create a handler function:
const handleInputChange = (e) => {
    setInputValue(e.target.value);
}

// Use it in the input:
<input 
    value={inputValue} 
    onChange={handleInputChange} 
/>`}
                    </pre>
                    <p className="text">
                        The <code className="code">onChange</code> event fires every time 
                        the user types. We get the value from <code className="code">e.target.value</code>.
                    </p>
                </div>

                <div className="step">
                    <h3 className="stepTitle">Step 3: Display State</h3>
                    <pre className="pre">
{`// Simply use the variable in JSX:
<p>You typed: {inputValue}</p>`}
                    </pre>
                    <p className="text">
                        You can use <code className="code">{'{inputValue}'}</code> anywhere in your 
                        JSX to display the current value.
                    </p>
                </div>
            </section>

            {/* Key Points */}
            <section className="keyPoints">
                <h2 className="sectionTitle">📝 Key Points to Remember</h2>
                <ul className="list">
                    <li>Use <code className="code">useState&lt;string&gt;</code> for text values</li>
                    <li>Initial value is usually an empty string <code className="code">''</code></li>
                    <li>Always use the setter function to update state</li>
                    <li>Use <code className="code">e.target.value</code> to get input text</li>
                    <li>State updates trigger a re-render of the component</li>
                    <li>This pattern creates a "controlled component"</li>
                </ul>
            </section>
        </div>
    );
}

export default InputState;
