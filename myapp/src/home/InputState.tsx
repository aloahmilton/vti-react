import { useState } from 'react';
import { Link } from 'react-router-dom';
import Quiz from './Quiz';
import { useProgress } from './useProgress';
import './style.css';

function InputState() {
    const [inputValue, setInputValue] = useState<string>('');
    const { markAsCompleted } = useProgress();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">✏️ Input State</h1>
                <p className="subtitle">Capture and display text in real-time</p>
            </header>

            {/* Simplified Explanation */}
            <section className="intro">
                <h2 className="sectionTitle">The Concept</h2>
                <p className="description">
                    Input state is how React "remembers" what the user types. We use <strong>onChange</strong> to update it and <strong>value</strong> to show it.
                </p>
                <div className="codeBlock">
                    <code className="code">
                        {`const [text, setText] = useState("");`}
                    </code>
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="demo">
                <h2 className="sectionTitle">Interactive Sandbox</h2>

                <div className="inputGroup">
                    <label className="label">Type something below:</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Your thoughts..."
                        className="input"
                    />
                </div>

                <div className="display">
                    <span className="displayLabel">Real-time Preview:</span>
                    <span className="displayValue">{inputValue || '(waiting...)'}</span>
                </div>
            </section>

            {/* Quiz Section */}
            <Quiz
                question="Which property of the event object 'e' contains the text from an input field?"
                options={["e.value", "e.target.value", "e.input.text", "e.getText()"]}
                correctAnswer={1}
                onComplete={() => markAsCompleted('/input')}
            />

            {/* Navigation */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/number" className="button">← Prev: Number State</Link>
                <Link to="/toggle" className="button buttonPrimary">Next Lesson: Toggle State →</Link>
            </div>
        </div>
    );
}

export default InputState;
