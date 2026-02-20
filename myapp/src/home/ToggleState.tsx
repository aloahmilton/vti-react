/**
 * ToggleState Component
 * 
 * This component demonstrates how to use React's useState hook with BOOLEAN values.
 * 
 * WHAT IS TOGGLE STATE?
 * Toggle state is used when you need to track:
 * - On/off switches
 * - Boolean flags
 * - Modal open/close
 * - Dark mode toggle
 * - Enable/disable features
 * 
 * LEARNING OBJECTIVES:
 * 1. How to initialize state with a boolean
 * 2. How to toggle boolean state
 * 3. How to use boolean state for conditional rendering
 * 4. How to create toggle switches
 * 
 * @author Beginner React Developer
 * @description Learn to use useState with booleans
 */

import { useState } from 'react';
import './style.css';

/**
 * ToggleState - Demonstrates useState with boolean values
 * 
 * This component shows:
 * - Simple toggle switches
 * - Dark mode toggle
 * - Multiple toggle examples
 */
function ToggleState() {
    // ============================================
    // STATE DECLARATION
    // ============================================
    // useState<boolean> - This tells TypeScript our state is a boolean
    // useState(false) - Initial value is false (off)
    const [isOn, setIsOn] = useState<boolean>(false);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // ============================================
    // EVENT HANDLERS
    // ============================================
    
    /**
     * toggleSwitch - Flips the boolean value
     * 
     * IMPORTANT: We can use setIsOn(!isOn) to toggle
     * The ! operator flips true to false and vice versa
     */
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    /**
     * toggleDarkMode - Toggles dark mode on/off
     */
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    /**
     * toggleNotifications - Toggles notifications
     */
    const toggleNotifications = () => {
        setIsNotificationsEnabled(!isNotificationsEnabled);
    };

    /**
     * toggleLogin - Toggles login state
     */
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">✅ Toggle State Example</h1>
                <p className="subtitle">
                    Learn how to use useState with booleans
                </p>
            </header>

            {/* Explanation Section */}
            <section className="explanation">
                <h2 className="sectionTitle">What is Toggle State?</h2>
                <p className="text">
                    <strong>Toggle state</strong> is used to store true/false values in your component.
                    It's perfect for switches, toggles, on/off functionality, or any binary state.
                </p>
                <div className="codeBlock">
                    <code className="code">
                        {`const [isOn, setIsOn] = useState<boolean>(false);`}
                    </code>
                </div>
                <p className="text">
                    The <code className="code">useState&lt;boolean&gt;</code> tells TypeScript 
                    this state will hold a boolean. The initial value is <code className="code">false</code>.
                </p>
            </section>

            {/* Interactive Demo */}
            <section className="demo">
                <h2 className="sectionTitle">Try It Yourself!</h2>
                
                {/* Example 1: Basic Toggle */}
                <div className="toggleExample">
                    <div className="toggleInfo">
                        <h3 className="toggleTitle">Basic Toggle</h3>
                        <p className="toggleStatus">
                            Status: <strong>{isOn ? 'ON' : 'OFF'}</strong>
                        </p>
                    </div>
                    <button 
                        onClick={toggleSwitch} 
                        className={`toggleButton ${isOn ? 'toggleOn' : 'toggleOff'}`}
                    >
                        {isOn ? 'ON' : 'OFF'}
                    </button>
                </div>

                {/* Example 2: Dark Mode */}
                <div className={`toggleExample ${isDarkMode ? 'darkMode' : ''}`}>
                    <div className="toggleInfo">
                        <h3 className="toggleTitle">🌙 Dark Mode</h3>
                        <p className="toggleStatus">
                            Mode: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong>
                        </p>
                    </div>
                    <button 
                        onClick={toggleDarkMode} 
                        className={`toggleButton ${isDarkMode ? 'toggleOn' : 'toggleOff'}`}
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                </div>

                {/* Example 3: Notifications */}
                <div className="toggleExample">
                    <div className="toggleInfo">
                        <h3 className="toggleTitle">🔔 Notifications</h3>
                        <p className="toggleStatus">
                            Status: <strong>{isNotificationsEnabled ? 'Enabled' : 'Disabled'}</strong>
                        </p>
                    </div>
                    <button 
                        onClick={toggleNotifications} 
                        className={`toggleButton ${isNotificationsEnabled ? 'toggleOn' : 'toggleOff'}`}
                    >
                        {isNotificationsEnabled ? 'ON' : 'OFF'}
                    </button>
                </div>

                {/* Example 4: Login State */}
                <div className="toggleExample">
                    <div className="toggleInfo">
                        <h3 className="toggleTitle">🔐 Login Status</h3>
                        <p className="toggleStatus">
                            Status: <strong>{isLoggedIn ? 'Logged In' : 'Logged Out'}</strong>
                        </p>
                    </div>
                    <button 
                        onClick={toggleLogin} 
                        className={`toggleButton ${isLoggedIn ? 'toggleOn' : 'toggleOff'}`}
                    >
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </div>

                {/* Conditional Message */}
                {isLoggedIn && (
                    <div className="welcomeMessage">
                        🎉 Welcome back! You're now logged in.
                    </div>
                )}
            </section>

            {/* How It Works Section */}
            <section className="howItWorks">
                <h2 className="sectionTitle">How It Works</h2>
                
                <div className="step">
                    <h3 className="stepTitle">Step 1: Declare State</h3>
                    <pre className="pre">
{`const [isOn, setIsOn] = useState<boolean>(false);`}
                    </pre>
                    <p className="text">
                        This creates a "variable" called <code className="code">isOn</code> 
                        that starts at <code className="code">false</code>, and a "setter" called 
                        <code className="code">setIsOn</code> to change it.
                    </p>
                </div>

                <div className="step">
                    <h3 className="stepTitle">Step 2: Toggle State</h3>
                    <pre className="pre">
{`// Use the ! operator to flip the value:
const toggleSwitch = () => {
    setIsOn(!isOn);  // false becomes true, true becomes false
};

// Or use a conditional:
setIsOn(isOn ? false : true);`}
                    </pre>
                    <p className="text">
                        The <code className="code">!</code> (NOT) operator flips 
                        <code className="code">true</code> to <code className="code">false</code> 
                        and vice versa.
                    </p>
                </div>

                <div className="step">
                    <h3 className="stepTitle">Step 3: Conditional Rendering</h3>
                    <pre className="pre">
{`// Show something based on state:
{isOn && <p>It is ON!</p>}

// Or use ternary operator:
{isOn ? 'ON' : 'OFF'}

// Or use if-else in JSX:
{isLoggedIn ? (
    <p>Welcome back!</p>
) : (
    <p>Please log in</p>
)}`}
                    </pre>
                    <p className="text">
                        Boolean state is commonly used to conditionally show/hide elements
                        using the <code className="code">&&</code> operator or ternary operator.
                    </p>
                </div>
            </section>

            {/* Key Points */}
            <section className="keyPoints">
                <h2 className="sectionTitle">📝 Key Points to Remember</h2>
                <ul className="list">
                    <li>Use <code className="code">useState&lt;boolean&gt;</code> for true/false values</li>
                    <li>Initial value is usually <code className="code">false</code> or <code className="code">true</code></li>
                    <li>Use <code className="code">!variableName</code> to toggle the value</li>
                    <li>Use <code className="code">&&</code> for conditional rendering</li>
                    <li>Common prefixes: <code className="code">is</code>, <code className="code">has</code>, <code className="code">can</code></li>
                    <li>State updates trigger a re-render of the component</li>
                </ul>
            </section>
        </div>
    );
}

export default ToggleState;
