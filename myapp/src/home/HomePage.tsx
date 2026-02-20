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
    Box,
    type LucideIcon
} from 'lucide-react';
import { useProgress } from './useProgress';
import { courses } from './constants';
import { Carousel } from './Carousel';
import './style.css';

const courseIconMap: Record<string, LucideIcon> = {
    Github,
    Code,
    FileCode,
    Palette,
    SquarePlay,
    Target,
    Box
};

/**
 * HomePage - Redesigned as a Premium Global Learning Dashboard
 */
function HomePage() {
    const { getProgressPercentage } = useProgress();

    const renderCourseIcon = (iconName: string, color: string) => {
        const IconComponent = courseIconMap[iconName] || Brain;
        return <IconComponent style={{ color }} size={32} />;
    };

    // Prioritize GitHub as requested
    const sortedCourses = [...courses].sort((a) => (a.id === 'github' ? -1 : 1));

    return (
        <div className="container" style={{ maxWidth: '1200px' }}>
            {/* Hero Section */}
            <header className="header" style={{
                textAlign: 'left',
                padding: 'clamp(40px, 10vw, 100px) 0',
                background: 'transparent',
                color: 'var(--text-main)',
                borderBottom: '1px solid var(--border)',
                marginBottom: 'clamp(40px, 6vw, 80px)',
                borderRadius: 0,
                display: 'block'
            }}>
                <div style={{ maxWidth: '900px' }}>
                    <h1 className="title" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: '900', letterSpacing: '-0.05em' }}>
                        Aloah Milton Academy
                    </h1>
                    <p className="subtitle" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', fontWeight: '500', lineHeight: '1.4', marginTop: '24px' }}>
                        High-performance engineering education. Master the tools that power the modern web.
                    </p>
                    <div style={{ marginTop: '48px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/github/basics" className="button buttonPrimary" style={{
                            padding: 'clamp(12px, 3vw, 18px) clamp(20px, 4vw, 36px)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
                            fontWeight: '700',
                            backgroundColor: '#000',
                            color: '#fff',
                            borderRadius: '12px',
                            textDecoration: 'none'
                        }}>
                            Start GitHub Mastery
                        </Link>
                        <a href="https://github.com/aloahmilton" target="_blank" rel="noopener noreferrer" className="button" style={{
                            padding: 'clamp(12px, 3vw, 18px) clamp(20px, 4vw, 36px)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
                            fontWeight: '700',
                            border: '1px solid #000',
                            color: '#000',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            textDecoration: 'none'
                        }}>
                            <Github size={24} /> Repository
                        </a>
                    </div>
                </div>
            </header>

            {/* Featured Section (Carousel) */}
            <section style={{ marginBottom: '100px' }}>
                <Carousel />
            </section>

            {/* Course Grid */}
            <section style={{ marginBottom: '100px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <h2 className="sectionTitle" style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0 }}>Courses</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '8px' }}>Explore our curriculum of professional-grade modules.</p>
                    </div>
                </div>

                <div className="cardsContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {sortedCourses.map((course) => {
                        const progress = getProgressPercentage(course.pages.length);
                        return (
                            <div key={course.id} className="card" style={{
                                padding: '12px',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                transition: 'var(--transition)',
                                background: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        backgroundColor: '#000',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {renderCourseIcon(course.icon, 'white')}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>{course.name}</h3>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>{course.pages.length} LESSONS</span>
                                    </div>
                                </div>

                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                                    {course.id === 'github' && 'Master version control, branches, and collaboration on GitHub.'}
                                    {course.id === 'react' && 'Build dynamic user interfaces with state, hooks, and components.'}
                                    {course.id === 'html' && 'Complete guide to semantic HTML5 and modern web structure.'}
                                    {course.id === 'css' && 'Advanced layouts with Flexbox, Grid, and performance-tuned CSS.'}
                                    {course.id === 'js' && 'Core JS concepts, DOM manipulation, and functional patterns.'}
                                </p>

                                <div style={{ marginTop: 'auto' }}>
                                    <div className="progressBarLabel" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px' }}>
                                        <span>PROGRESS</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="progressBarWrapper" style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px' }}>
                                        <div className="progressBar" style={{ width: `${progress}%`, backgroundColor: '#000', height: '100%', borderRadius: '4px' }}></div>
                                    </div>
                                </div>

                                <Link to={course.pages[0].path} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    padding: 'clamp(10px, 2.5vw, 16px)',
                                    borderRadius: '12px',
                                    backgroundColor: progress > 0 ? '#f1f5f9' : '#000',
                                    color: progress > 0 ? '#000' : '#fff',
                                    textDecoration: 'none',
                                    fontWeight: '800',
                                    transition: 'var(--transition)'
                                }}>
                                    {progress > 0 ? 'CONTINUE LEARNING' : 'START MODULE'} <ChevronRight size={18} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Voice Learning Feature */}
            <section style={{
                padding: '80px',
                backgroundColor: '#f8fafc',
                borderRadius: '32px',
                marginBottom: '100px'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '24px', letterSpacing: '-0.02em' }}>Voice-Powered Learning</h2>
                        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '40px' }}>
                            Education adjusted for your lifestyle. High-fidelity AI explanations for every lesson. Learn while you commute, exercise, or rest.
                        </p>
                        <div style={{ display: 'flex', gap: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                    <Zap size={24} color="#000" />
                                </div>
                                <span style={{ fontWeight: '700' }}>Fast Learning</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                    <Brain size={24} color="#000" />
                                </div>
                                <span style={{ fontWeight: '700' }}>AI Instructor</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        aspectRatio: '1',
                        backgroundColor: '#000',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '8rem'
                    }}>
                        🎙️
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section style={{ textAlign: 'center', paddingBottom: '100px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px' }}>Ready to Scale Your Skills?</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                    Join hundreds of developers mastering the craft with Aloah Milton. Professional support available 24/7.
                </p>
                <Link to="/contact" className="button buttonPrimary" style={{
                    padding: '20px 48px',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: '16px',
                    textDecoration: 'none'
                }}>
                    Get Personal Coaching
                </Link>
            </section>
        </div>
    );
}

export default HomePage;
