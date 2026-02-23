import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import Quiz from '../components/Quiz';
import { useProgress } from '../components/useProgress';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../contexts/SettingsContext';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import './style.css';
import './Lesson.css';

import type { Difficulty } from './constants';

interface CodeExample {
    label: string;
    code: string;
    language?: string;
}

interface ConceptCard {
    icon: string;
    title: string;
    desc: string;
}

interface GenericLessonProps {
    title: string;
    subject: string;
    content: string;
    path: string;
    difficulty?: Difficulty;
    prevPath?: string;
    nextPath?: string;
    nextLabel?: string;
    prevLabel?: string;
    quizQuestion: string;
    quizOptions: string[];
    quizCorrectAnswer: number;
    /** Code examples shown in the editor — first one is the default */
    codeExamples?: CodeExample[];
    /** Concept cards shown below the intro paragraph */
    conceptCards?: ConceptCard[];
    /** Language for the editor */
    editorLanguage?: string;
}

function GenericLesson({
    title,
    subject,
    content,
    path,
    difficulty = 'Beginner',
    prevPath,
    nextPath,
    nextLabel = 'Next',
    prevLabel = 'Previous',
    quizQuestion,
    quizOptions,
    quizCorrectAnswer,
    codeExamples,
    conceptCards,
    editorLanguage = 'bash',
}: GenericLessonProps) {
    const { markAsCompleted } = useProgress();
    const { t } = useTranslation();
    const { voiceAccent, setVoiceAccent, availableVoices } = useSettings();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [activeExample, setActiveExample] = useState(0);

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(`${title} lesson. ${content}. Quiz: ${quizQuestion}`);
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
            <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dashboard</Link>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-muted)' }}>{subject}</span>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{title}</span>
            </nav>

            {/* Header */}
            <header className="lesson-header">
                <div className="lesson-header-inner">
                    <div className="lesson-header-title">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <h1>{title}</h1>
                            <span className={`difficulty-badge ${difficulty.toLowerCase()}`}>
                                {difficulty}
                            </span>
                        </div>
                        <p>{subject} Module</p>
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

            {/* Introduction */}
            <section className="intro">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <BookOpen color="var(--primary)" size={28} />
                    <h2 className="sectionTitle" style={{ margin: 0 }}>Introduction</h2>
                </div>
                <p className="description">{content}</p>

                {/* Concept cards */}
                {conceptCards && conceptCards.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
                        {conceptCards.map(c => (
                            <div key={c.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 16px' }}>
                                <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{c.icon}</div>
                                <strong style={{ display: 'block', marginBottom: 6, color: 'var(--text-main)' }}>{c.title}</strong>
                                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Code Examples */}
            {codeExamples && codeExamples.length > 0 && (
                <section className="demo">
                    <h2 className="sectionTitle">Code Examples</h2>

                    {/* Tab bar */}
                    {codeExamples.length > 1 && (
                        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                            {codeExamples.map((ex, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveExample(i)}
                                    style={{
                                        padding: '6px 16px', borderRadius: 8, border: '1px solid var(--border)',
                                        background: activeExample === i ? '#000' : 'transparent',
                                        color: activeExample === i ? '#fff' : 'var(--text-muted)',
                                        fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer'
                                    }}
                                >
                                    {ex.label}
                                </button>
                            ))}
                        </div>
                    )}

                    <CodeEditor
                        title={codeExamples[activeExample].label}
                        language={codeExamples[activeExample].language ?? editorLanguage}
                        height="260px"
                        showPreview={editorLanguage === 'javascript'}
                        defaultCode={codeExamples[activeExample].code}
                        key={activeExample} // remount on tab change
                    />
                </section>
            )}

            <Quiz
                question={quizQuestion}
                options={quizOptions}
                correctAnswer={quizCorrectAnswer}
                onComplete={() => markAsCompleted(path)}
            />

            <nav className="lesson-nav">
                {prevPath
                    ? <Link to={prevPath} className="lesson-nav-btn prev">← {prevLabel}</Link>
                    : <Link to="/dashboard" className="lesson-nav-btn prev">← Dashboard</Link>
                }
                {nextPath && <Link to={nextPath} className="lesson-nav-btn next">{nextLabel} →</Link>}
            </nav>
        </div>
    );
}

export default GenericLesson;
