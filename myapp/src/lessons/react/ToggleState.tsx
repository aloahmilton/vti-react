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

function ToggleState() {
    const [isOn, setIsOn] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);
    const { markAsCompleted } = useProgress();
    const { t } = useTranslation();
    const { voiceAccent, setVoiceAccent, availableVoices } = useSettings();
    const [isSpeaking, setIsSpeaking] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const text = `Toggle State lesson. Toggle state is used for binary logic: on or off, show or hide, light or dark. We use the NOT operator to flip a boolean value between true and false.`;
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
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Toggle State</span>
            </nav>

            {/* Header */}
            <header className="lesson-header">
                <div className="lesson-header-inner">
                    <div className="lesson-header-title">
                        <h1>✅ Toggle State</h1>
                        <p>React Module · Lesson 3 of 6</p>
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

            {/* The Concept */}
            <section className="intro">
                <h2 className="sectionTitle">The Concept</h2>
                <p className="description">
                    Toggle state is for <strong>binary logic</strong>: on/off, show/hide, dark/light mode.
                    We use the <code>!</code> (NOT) operator to flip a boolean between <code>true</code> and <code>false</code>.
                </p>
                <div className="codeBlock">
                    <code className="code">{`const [isOn, setIsOn] = useState(false);

const toggle = () => setIsOn(!isOn); // Flip the value`}</code>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
                    {[
                        { icon: '💡', title: 'Lights / Dark Mode', desc: 'Toggle theme or visibility of UI elements.' },
                        { icon: '🪟', title: 'Modals & Drawers', desc: 'Show or hide overlays based on a boolean.' },
                        { icon: '🔐', title: 'Auth Gating', desc: 'Show protected content only if isLoggedIn is true.' },
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

                {/* Switch demo */}
                <div className="toggleExample" style={{
                    background: isOn ? '#f0fdf4' : 'var(--surface)',
                    border: `2px solid ${isOn ? '#16a34a' : 'var(--border)'}`,
                    borderRadius: 16, padding: 28, marginBottom: 24,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16
                }}>
                    <div>
                        <h3 style={{ margin: '0 0 4px', color: 'var(--text-main)' }}>System Status</h3>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Currently: <strong style={{ color: isOn ? '#16a34a' : '#ef4444' }}>{isOn ? 'ONLINE ✓' : 'OFFLINE ✗'}</strong>
                        </p>
                    </div>
                    <button
                        onClick={toggleSwitch}
                        className={`toggleButton ${isOn ? 'toggleOn' : 'toggleOff'}`}
                        style={{
                            padding: '12px 28px', borderRadius: 99, border: 'none', fontWeight: 700,
                            cursor: 'pointer', fontSize: '1rem',
                            background: isOn ? '#16a34a' : '#64748b', color: 'white', transition: 'all 0.2s'
                        }}
                    >
                        {isOn ? '● Turn Off' : '○ Turn On'}
                    </button>
                </div>

                {/* Dark mode preview */}
                <div style={{
                    background: isDark ? '#0f172a' : '#f8fafc',
                    border: '1px solid var(--border)',
                    borderRadius: 16, padding: 24, transition: 'background 0.4s'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <strong style={{ color: isDark ? '#f1f5f9' : '#0f172a' }}>Dark Mode Preview</strong>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            style={{
                                padding: '8px 20px', borderRadius: 99, border: 'none', cursor: 'pointer',
                                background: isDark ? '#f1f5f9' : '#0f172a',
                                color: isDark ? '#0f172a' : '#f1f5f9', fontWeight: 700
                            }}
                        >
                            {isDark ? '☀️ Light' : '🌙 Dark'}
                        </button>
                    </div>
                    <p style={{ color: isDark ? '#94a3b8' : '#64748b', margin: 0, fontSize: '0.9rem' }}>
                        This preview panel switches between themes using a single <code>boolean</code> toggle.
                    </p>
                </div>
            </section>

            {/* Code Playground */}
            <section className="demo">
                <h2 className="sectionTitle">Try It Yourself</h2>
                <CodeEditor
                    title="toggle-state.js"
                    language="javascript"
                    height="180px"
                    showPreview
                    defaultCode={`// Toggle logic — returns opposite value each time
let isVisible = false;

const toggle = () => !isVisible;

// Call toggle twice:
isVisible = toggle(); // true
isVisible = toggle(); // false

// Current value:
isVisible;`}
                />
            </section>

            {/* Quiz */}
            <Quiz
                question="Which operator is used to 'flip' a boolean value in JavaScript?"
                options={["&", "!", "||", "++"]}
                correctAnswer={1}
                onComplete={() => markAsCompleted('/react/toggle')}
            />

            {/* Navigation */}
            <nav className="lesson-nav">
                <Link to="/react/input" className="lesson-nav-btn prev">← Input State</Link>
                <Link to="/react/form" className="lesson-nav-btn next">Form State →</Link>
            </nav>
        </div>
    );
}

export default ToggleState;
