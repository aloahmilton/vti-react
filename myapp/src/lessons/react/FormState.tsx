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

function FormState() {
    const [todos, setTodos] = useState<{ text: string; done: boolean }[]>([
        { text: 'Learn React basics', done: true },
        { text: 'Master the useState hook', done: false },
    ]);
    const [newItem, setNewItem] = useState<string>('');
    const { markAsCompleted } = useProgress();
    const { t } = useTranslation();
    const { voiceAccent, setVoiceAccent, availableVoices } = useSettings();
    const [isSpeaking, setIsSpeaking] = useState(false);

    const addTodo = () => {
        if (newItem.trim()) {
            setTodos([...todos, { text: newItem.trim(), done: false }]);
            setNewItem('');
        }
    };

    const removeTodo = (index: number) => setTodos(todos.filter((_, i) => i !== index));
    const toggleTodo = (index: number) =>
        setTodos(todos.map((t, i) => i === index ? { ...t, done: !t.done } : t));

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const text = `Form State lesson. When managing lists and collections in React, we never mutate arrays directly. Instead we use the spread operator to create new array copies when adding items, and filter when removing them.`;
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

    const completed = todos.filter(t => t.done).length;

    return (
        <div className="container">
            {/* Breadcrumb */}
            <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dashboard</Link>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-muted)' }}>React</span>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Form State</span>
            </nav>

            <header className="lesson-header">
                <div className="lesson-header-inner">
                    <div className="lesson-header-title">
                        <h1>📝 Form State</h1>
                        <p>React Module · Lesson 4 of 6</p>
                    </div>
                    <div className="lesson-voice-controls">
                        <label className="lesson-voice-select-label">{t('voice.select_voice')}</label>
                        <select className="lesson-voice-select" value={voiceAccent} onChange={(e) => setVoiceAccent(e.target.value)}>
                            <option value="default">{t('voice.nigeria')}</option>
                            {availableVoices.map(voice => (
                                <option key={voice.voiceURI} value={voice.voiceURI}>{voice.name} ({voice.lang})</option>
                            ))}
                        </select>
                        <button className={`lesson-voice-btn ${isSpeaking ? 'speaking' : 'idle'}`} onClick={toggleSpeech}>
                            {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            {isSpeaking ? t('voice.stop') : t('voice.speak')}
                        </button>
                    </div>
                </div>
            </header>

            <section className="intro">
                <h2 className="sectionTitle">The Concept</h2>
                <p className="description">
                    When managing <strong>lists and collections</strong>, React requires you to treat state as
                    <strong> immutable</strong>. Never push, pop, or directly mutate. Always return a new array.
                </p>
                <div className="codeBlock">
                    <code className="code">{`// ✅ Correct — create a new array
setItems([...items, newItem]);

// ✅ Correct — remove by filtering
setItems(items.filter((_, i) => i !== indexToRemove));

// ❌ Wrong — mutates state directly
items.push(newItem);`}</code>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
                    {[
                        { icon: '📋', title: 'Spread [...items]', desc: 'Creates a new array with existing + new items.' },
                        { icon: '🔍', title: '.filter()', desc: 'Returns new array excluding removed items.' },
                        { icon: '🔄', title: '.map()', desc: 'Transforms each item and returns a new array.' },
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

                {/* Progress bar */}
                <div style={{ marginBottom: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>
                        <span>Completion</span><span>{completed}/{todos.length}</span>
                    </div>
                    <div style={{ height: 6, background: 'var(--border)', borderRadius: 99 }}>
                        <div style={{ height: '100%', width: `${todos.length ? (completed / todos.length) * 100 : 0}%`, background: '#16a34a', borderRadius: 99, transition: 'width 0.3s' }} />
                    </div>
                </div>

                <div className="inputGroup">
                    <label className="label">Add a learning goal:</label>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <input
                            type="text"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            placeholder="e.g. useEffect, Context API..."
                            className="input"
                            style={{ flex: 1 }}
                            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                        />
                        <button onClick={addTodo} className="button buttonPrimary">Add</button>
                    </div>
                </div>

                <ul className="list" style={{ marginTop: 16, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {todos.map((todo, index) => (
                        <li key={index} className="listItem" style={{
                            display: 'flex', alignItems: 'center', gap: 12,
                            padding: '12px 16px', background: 'var(--surface)', border: '1px solid var(--border)',
                            borderRadius: 10
                        }}>
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={() => toggleTodo(index)}
                                style={{ width: 18, height: 18, cursor: 'pointer', accentColor: '#16a34a' }}
                            />
                            <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? 'var(--text-muted)' : 'var(--text-main)' }}>
                                {todo.text}
                            </span>
                            <button onClick={() => removeTodo(index)} className="button buttonSmall" style={{ padding: '4px 10px', borderRadius: 6, fontSize: '0.8rem' }}>✕</button>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Code Playground */}
            <section className="demo">
                <h2 className="sectionTitle">Try It Yourself</h2>
                <CodeEditor
                    title="form-state.js"
                    language="javascript"
                    height="220px"
                    showPreview
                    defaultCode={`// Array state patterns in JavaScript
let items = ['React', 'TypeScript'];

// Add item (spread):
const withNew = [...items, 'Next.js'];

// Remove item at index 0 (filter):
const withoutFirst = items.filter((_, i) => i !== 0);

// Update item at index 1:
const updated = items.map((item, i) => i === 1 ? 'Node.js' : item);

// Return all three:
JSON.stringify({ withNew, withoutFirst, updated });`}
                />
            </section>

            <Quiz
                question="How should you add an item to an array in React state?"
                options={["items.push(newItem)", "setItems([...items, newItem])", "items[items.length] = newItem", "setItems(items.add(newItem))"]}
                correctAnswer={1}
                onComplete={() => markAsCompleted('/react/form')}
            />

            <nav className="lesson-nav">
                <Link to="/react/toggle" className="lesson-nav-btn prev">← Toggle State</Link>
                <Link to="/react/guide" className="lesson-nav-btn next">React Guide →</Link>
            </nav>
        </div>
    );
}

export default FormState;
