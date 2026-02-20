import { useState } from 'react';
import { Link } from 'react-router-dom';
import Quiz from './Quiz';
import { useProgress } from './useProgress';
import './style.css';

function ToggleState() {
    const [isOn, setIsOn] = useState<boolean>(false);
    const { markAsCompleted } = useProgress();

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">✅ Toggle State</h1>
                <p className="subtitle">Master true/false logic in React</p>
            </header>

            {/* Simplified Explanation */}
            <section className="intro">
                <h2 className="sectionTitle">The Concept</h2>
                <p className="description">
                    Toggle state is for binary logic: <strong>on/off switches, modals,</strong> or <strong>dark mode.</strong> We use the <strong>!</strong> operator to flip the value.
                </p>
                <div className="codeBlock">
                    <code className="code">
                        {`const [isOn, setIsOn] = useState(false);
setIsOn(!isOn); // Toggle logic`}
                    </code>
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="demo">
                <h2 className="sectionTitle">Interactive Sandbox</h2>

                <div className="toggleExample" style={{ background: isOn ? 'var(--surface)' : '#f1f5f9', border: '2px solid' + (isOn ? 'var(--primary)' : 'var(--border)') }}>
                    <div className="toggleInfo">
                        <h3 className="toggleTitle">System Status</h3>
                        <p className="toggleStatus">
                            The system is currently: <strong>{isOn ? 'ONLINE' : 'OFFLINE'}</strong>
                        </p>
                    </div>
                    <button
                        onClick={toggleSwitch}
                        className={`toggleButton ${isOn ? 'toggleOn' : 'toggleOff'}`}
                    >
                        {isOn ? 'Turn Off' : 'Turn On'}
                    </button>
                </div>
            </section>

            {/* Quiz Section */}
            <Quiz
                question="Which operator is used to 'flip' a boolean value in JavaScript?"
                options={["&", "!", "||", "++"]}
                correctAnswer={1}
                onComplete={() => markAsCompleted('/toggle')}
            />

            {/* Navigation */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/input" className="button">← Prev: Input State</Link>
                <Link to="/form" className="button buttonPrimary">Next Lesson: Form State →</Link>
            </div>
        </div>
    );
}

export default ToggleState;
