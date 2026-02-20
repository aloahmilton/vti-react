import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import Quiz from './Quiz';
import { useProgress } from './useProgress';
import './style.css';

interface GenericLessonProps {
    title: string;
    subject: string;
    content: string;
    path: string;
    nextPath?: string;
    quizQuestion: string;
    quizOptions: string[];
    quizCorrectAnswer: number;
}

function GenericLesson({
    title,
    subject,
    content,
    path,
    nextPath,
    quizQuestion,
    quizOptions,
    quizCorrectAnswer
}: GenericLessonProps) {
    const { markAsCompleted } = useProgress();
    const [isSpeaking, setIsSpeaking] = useState(false);

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const textToSpeak = `Lesson: ${title}. ${content}. Let's test your knowledge with a quiz. ${quizQuestion}`;
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    // Stop speaking when navigating away
    useEffect(() => {
        return () => window.speechSynthesis.cancel();
    }, []);

    return (
        <div className="container">
            <header className="header" style={{ padding: '0 0 40px 0', borderBottom: '1px solid var(--border)', background: 'transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 className="title" style={{ fontSize: '3rem', color: 'var(--text-main)' }}>{title}</h1>
                        <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>{subject} Module</p>
                    </div>
                    <button
                        className={`voiceButton ${isSpeaking ? 'active' : ''}`}
                        onClick={toggleSpeech}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '14px 28px',
                            borderRadius: '14px',
                            backgroundColor: isSpeaking ? '#ef4444' : 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            fontWeight: '700',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            transition: 'var(--transition)',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                    >
                        {isSpeaking ? <VolumeX size={22} /> : <Volume2 size={22} />}
                        {isSpeaking ? 'Stop Voice' : 'Voice Mode'}
                    </button>
                </div>
            </header>

            <section className="intro" style={{ background: 'transparent', padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                    <BookOpen color="var(--primary)" size={32} />
                    <h2 className="sectionTitle" style={{ margin: 0, fontSize: '2rem', fontWeight: '800' }}>Introduction</h2>
                </div>
                <p className="description" style={{ fontSize: '1.5rem', lineHeight: '1.8', color: 'var(--text-main)', maxWidth: '900px' }}>{content}</p>
                <div className="codeBlock" style={{ marginTop: '48px', backgroundColor: '#000', borderRadius: '16px' }}>
                    <code className="code" style={{ fontSize: '1.2rem', color: '#10b981' }}>
                        {`// Documentation for ${title} is being prepared.`}
                    </code>
                </div>
            </section>

            <Quiz
                question={quizQuestion}
                options={quizOptions}
                correctAnswer={quizCorrectAnswer}
                onComplete={() => markAsCompleted(path)}
            />

            <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="button" style={{
                    padding: '14px 28px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--text-muted)',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                }}>← Back to Overview</Link>
                {nextPath && (
                    <Link to={nextPath} className="button buttonPrimary" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '18px 40px',
                        borderRadius: '16px',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: '800',
                        fontSize: '1.2rem',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        Next Lesson <ChevronRight size={24} />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default GenericLesson;
