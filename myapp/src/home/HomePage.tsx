 
import { Link } from 'react-router-dom';
import {
    Github,
    Target,
    Zap,
    Brain,
    Code,
    FileCode,
    Palette,
    SquarePlay,
    ChevronRight,
    type LucideIcon
} from 'lucide-react';
import { useProgress } from './useProgress';
import { courses } from './constants';
import { Carousel } from './Carousel';
import './style.css';

const courseIconMap: Record<string, LucideIcon> = {
    Code,
    FileCode,
    Palette,
    SquarePlay
};

/**
 * HomePage - Redesigned as a Global Learning Dashboard
 */
function HomePage() {
    const { getProgressPercentage } = useProgress();

    const renderCourseIcon = (iconName: string, color: string) => {
        const IconComponent = courseIconMap[iconName] || Brain;
        return <IconComponent style={{ color }} size={32} />;
    };

    return (
        <div className="container">
            {/* Hero Section */}
            <header className="header" style={{ marginBottom: '50px' }}>
                <h1 className="title">Aloah Milton Academy 🎓</h1>
                <p className="subtitle">
                    Your portal to mastering modern web development and beyond.
                </p>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    <button className="button buttonPrimary buttonLarge" style={{ width: 'auto' }}>
                        Browse Courses
                    </button>
                    <a href="https://github.com/aloahmilton" target="_blank" rel="noopener noreferrer" className="button" style={{ background: 'white', color: 'var(--primary)', border: '1px solid var(--border)', padding: '15px 30px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Github size={20} /> Developer Hub
                    </a>
                </div>
            </header>

            <Carousel />

            {/* Course Grid */}
            <section>
                <h2 className="sectionTitle">Explore Courses</h2>
                <div className="cardsContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {courses.map((course) => {
                        const progress = getProgressPercentage(course.pages.length);
                        return (
                            <div key={course.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div className="subjectIcon" style={{ width: '50px', height: '50px' }}>
                                        {renderCourseIcon(course.icon, 'white')}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 className="cardTitle" style={{ margin: 0 }}>{course.name}</h3>
                                        <span className="subjectTag">{course.pages.length} Lessons</span>
                                    </div>
                                </div>
                                <p className="cardDescription">
                                    {course.id === 'react' && 'Master React state, hooks, and modern components.'}
                                    {course.id === 'html' && 'Build the foundation of the web with HTML5.'}
                                    {course.id === 'css' && 'Design beautiful websites with modern CSS techniques.'}
                                    {course.id === 'js' && 'Learn the logic behind the web with JavaScript.'}
                                </p>

                                <div className="progressBarWrapper" style={{ height: '6px' }}>
                                    <div className="progressBar" style={{ width: `${progress}%` }}></div>
                                </div>

                                <Link to={course.pages[0].path} className="cardLink" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: 'auto' }}>
                                    {progress > 0 ? 'Continue' : 'Start Path'} <ChevronRight size={16} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Voice Learning Feature */}
            <section className="explanation" style={{ marginBottom: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ fontSize: '3rem' }}>🎙️</div>
                    <div>
                        <h2 className="sectionTitle" style={{ marginBottom: '10px' }}>Voice-Powered Learning</h2>
                        <p className="description">
                            Introducing **Voice Mode**! Can't read right now? Activate voice mode in any lesson to have the concepts explained to you by our AI instructor. Perfect for learning on the go or for auditory learners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Courses */}
            <section style={{ marginBottom: '50px' }}>
                <h2 className="sectionTitle">Coming Soon</h2>
                <div className="benefitsList">
                    <div className="benefit">
                        <span className="benefitIcon">🐘</span>
                        <h3>PHP Backend</h3>
                        <p>Learn server-side logic and database management.</p>
                    </div>
                    <div className="benefit">
                        <span className="benefitIcon">🎨</span>
                        <h3>UI/UX Design</h3>
                        <p>Master Figma and design principles for developers.</p>
                    </div>
                    <div className="benefit">
                        <span className="benefitIcon">🚀</span>
                        <h3>Next.js</h3>
                        <p>Scale your React apps with modern frameworks.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action or Platform Features */}
            <section className="tips" style={{ background: 'var(--surface)', border: '1px solid var(--border)', marginTop: '40px' }}>
                <h2 className="sectionTitle">✨ Interactive Learning</h2>
                <div className="benefitsList">
                    <div className="benefit" style={{ border: 'none', background: '#f8fafc' }}>
                        <span className="benefitIcon" style={{ color: '#e53e3e' }}><Zap size={24} /></span>
                        <h3>Hands-on</h3>
                        <p>Learn by doing with live code demos.</p>
                    </div>
                    <div className="benefit" style={{ border: 'none', background: '#f8fafc' }}>
                        <span className="benefitIcon" style={{ color: '#4299e1' }}><Brain size={24} /></span>
                        <h3>Quizzes</h3>
                        <p>Validate your knowledge at every step.</p>
                    </div>
                    <div className="benefit" style={{ border: 'none', background: '#f8fafc' }}>
                        <span className="benefitIcon" style={{ color: '#10b981' }}><Target size={24} /></span>
                        <h3>Progress</h3>
                        <p>Track your growth across all subjects.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
