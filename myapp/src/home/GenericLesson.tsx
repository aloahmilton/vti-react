import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
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

    return (
        <div className="container">
            <header className="header">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subject} Course</p>
            </header>

            <section className="intro">
                <h2 className="sectionTitle">Introduction</h2>
                <p className="description">{content}</p>
                <div className="codeBlock">
                    <code className="code">
                        {`// This is a placeholder for ${title} content`}
                    </code>
                </div>
            </section>

            <Quiz
                question={quizQuestion}
                options={quizOptions}
                correctAnswer={quizCorrectAnswer}
                onComplete={() => markAsCompleted(path)}
            />

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/" className="button">← Back to Overview</Link>
                {nextPath && (
                    <Link to={nextPath} className="button buttonPrimary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Next Lesson <ChevronRight size={18} />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default GenericLesson;
