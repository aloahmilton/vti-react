import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Quiz from "../../components/Quiz";
import { useProgress } from "../../components/useProgress";
import { useTranslation } from "react-i18next";
import { useSettings } from "../../contexts/SettingsContext";
import { Volume2, VolumeX, ChevronRight } from "lucide-react";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import "../../home/style.css";
import "../../home/Lesson.css";

function InputState() {
    const [inputValue, setInputValue] = useState<string>('');
    const { markAsCompleted } = useProgress();
    const { t } = useTranslation();
    const { voiceAccent, setVoiceAccent, availableVoices } = useSettings();
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const text = `Input State lesson. Input state is how React remembers what a user types. We bind the input value to state using the value prop and update it using onChange. Quiz question: ${t('voice.speak')}`;
            const utterance = new SpeechSynthesisUtterance(text);
            if (voiceAccent !== 'default') {
                const v = availableVoices.find(v => v.voiceURI === voiceAccent);
                if (v) utterance.voice = v;
            }
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    useEffect(() => () => window.speechSynthesis.cancel(), []);

    return (
        <div className="container">
            {/* Breadcrumb */}
            <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dashboard</Link>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-muted)' }}>React</span>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Input State</span>
            </nav>

            {/* Page Header */}
            <header className="lesson-header">
                <div className="lesson-header-inner">
                    <div className="lesson-header-title">
                        <h1>✏️ Input State</h1>
                        <p>React Module · Lesson 2 of 6</p>
                    </div>
                    <div className="lesson-voice-controls">
                        <label className="lesson-voice-select-label">{t('voice.select_voice')}</label>
                        <select
                            className="lesson-voice-select"
                            value={voiceAccent}
                            onChange={(e) => setVoiceAccent(e.target.value)}
                        >
                            <option value="default">{t('voice.nigeria')}</option>
                            {availableVoices.map(voice => (
                                <option key={voice.voiceURI} value={voice.voiceURI}>
                                    {voice.name} ({voice.lang})
                                </option>
                            ))}
                        </select>
                        <button
                            className={`lesson-voice-btn ${isSpeaking ? 'speaking' : 'idle'}`}
                            onClick={toggleSpeech}
                        >
                            {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            {isSpeaking ? t('voice.stop') : t('voice.speak')}
                        </button>
                    </div>
                </div>
            </header>

            {/* Key Concepts */}
            <section className="intro">
                <h2 className="sectionTitle">The Concept</h2>
                <p className="description">
                    Input state is how React <strong>"remembers"</strong> what a user types. We bind the
                    input's <code>value</code> to a state variable and update it with <code>onChange</code>.
                    This creates a <strong>controlled input</strong>.
                </p>
                <div className="codeBlock">
                    <code className="code">{`const [text, setText] = useState("");
// In JSX:
<input value={text} onChange={e => setText(e.target.value)} />`}</code>
                </div>

                {/* Concept cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 32 }}>
                    {[
                        { icon: '🔗', title: 'Controlled Input', desc: 'React is the single source of truth for the value.' },
                        { icon: '🔄', title: 'Uncontrolled Input', desc: 'The DOM manages the value. Avoid in React.' },
                        { icon: '📡', title: 'onChange', desc: 'Fires every keystroke, keeping state in sync.' },
                    ].map(c => (
                        <div key={c.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 16px' }}>
                            <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{c.icon}</div>
                            <strong style={{ display: 'block', marginBottom: 6, color: 'var(--text-main)' }}>{c.title}</strong>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="demo">
                <h2 className="sectionTitle">Interactive Sandbox</h2>
                <div className="inputGroup">
                    <label className="label">Type something — React tracks every character:</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Your thoughts..."
                        className="input"
                    />
                </div>
                <div className="display" style={{ marginTop: 16 }}>
                    <span className="displayLabel">Live Preview:</span>
                    <span className="displayValue">{inputValue || '(start typing…)'}</span>
                </div>
                <p style={{ marginTop: 12, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Characters: <strong>{inputValue.length}</strong> · Words: <strong>{inputValue.trim() === '' ? 0 : inputValue.trim().split(/\s+/).length}</strong>
                </p>
            </section>

            {/* Code Playground */}
            <section className="demo">
                <h2 className="sectionTitle">Try It Yourself</h2>
                <p className="description">Build a live search filter using input state:</p>
                <CodeEditor
                    title="input-state.jsx"
                    language="javascript"
                    height="220px"
                    showPreview
                    defaultCode={`// Controlled input pattern
const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pawpaw'];
let query = '';

// Filter result (simulated):
const filtered = fruits.filter(f => f.toLowerCase().includes(query.toLowerCase()));

// Returns filtered fruits count:
filtered.length;`}
                />
            </section>

            {/* Quiz */}
            <Quiz
                question="Which property of the event object 'e' contains the typed text?"
                options={["e.value", "e.target.value", "e.input.text", "e.getText()"]}
                correctAnswer={1}
                onComplete={() => markAsCompleted('/react/input')}
            />

            {/* Navigation */}
            <nav className="lesson-nav">
                <Link to="/react/number" className="lesson-nav-btn prev">← Number State</Link>
                <Link to="/react/toggle" className="lesson-nav-btn next">Toggle State →</Link>
            </nav>
        </div>
    );
}

export default InputState;
