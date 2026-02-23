import { Link } from 'react-router-dom';
import {
    Github,
    Target,
    Brain,
    Code,
    FileCode,
    Palette,
    SquarePlay,
    ChevronRight,
    Box,
    type LucideIcon
} from 'lucide-react';
import { useProgress } from '../components/useProgress';
import { courses } from './constants';
import { Carousel } from '../components/Carousel';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../contexts/SettingsContext';
import './Dashboard.css';

const courseIconMap: Record<string, LucideIcon> = {
    Github, Code, FileCode, Palette, SquarePlay, Target, Box
};

const courseDescriptions: Record<string, { en: string; fr: string }> = {
    github: {
        en: 'Master version control, branches, and collaboration on GitHub.',
        fr: 'Maîtrisez le contrôle de version, les branches et la collaboration sur GitHub.',
    },
    react: {
        en: 'Build dynamic user interfaces with state, hooks, and components.',
        fr: 'Créez des interfaces utilisateur dynamiques avec state, hooks et composants.',
    },
    html: {
        en: 'Complete guide to semantic HTML5 and modern web structure.',
        fr: 'Guide complet du HTML5 sémantique et de la structure web moderne.',
    },
    css: {
        en: 'Advanced layouts with Flexbox, Grid, and performance-tuned CSS.',
        fr: 'Mises en page avancées avec Flexbox, Grid et CSS optimisé.',
    },
    js: {
        en: 'Core JS concepts, DOM manipulation, and functional patterns.',
        fr: 'Concepts JS fondamentaux, manipulation du DOM et patterns fonctionnels.',
    },
};

/**
 * HomePage — Post-Login Dashboard.
 * All layout styles live in Dashboard.css.
 */
function HomePage() {
    const { getProgressPercentage } = useProgress();
    const { t } = useTranslation();
    const { language } = useSettings();

    const lang = (language as 'en' | 'fr') || 'en';

    const sortedCourses = [...courses].sort((a) => (a.id === 'github' ? -1 : 1));

    return (
        <div className="dashboard-page">
            {/* ---- Header ---- */}
            <header className="dashboard-header">
                <h1>{t('dashboard.title')}</h1>
                <p>{t('dashboard.welcome')}</p>
            </header>

            {/* ---- Announcements (Carousel) ---- */}
            <section className="dashboard-announcements">
                <div className="dashboard-section-header">
                    <h2>{t('dashboard.announcements')}</h2>
                </div>
                <Carousel />
            </section>

            {/* ---- Course Grid ---- */}
            <section className="dashboard-courses">
                <div className="dashboard-courses-meta">
                    <div>
                        <h2>{t('dashboard.my_courses')}</h2>
                        <p>{t('dashboard.courses_subtitle')}</p>
                    </div>
                </div>

                <div className="dashboard-grid">
                    {sortedCourses.map((course) => {
                        const progress = getProgressPercentage(course.pages.length);
                        const IconCmp = courseIconMap[course.icon] || Brain;
                        const desc = courseDescriptions[course.id]?.[lang] ?? '';

                        return (
                            <div key={course.id} className="course-card">
                                {/* Icon + Name */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: 40, height: 40,
                                        background: '#000',
                                        borderRadius: 8,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <IconCmp size={20} color="white" />
                                    </div>
                                    <div>
                                        <p className="course-card-name">{course.name}</p>
                                        <span className="course-card-lessons">
                                            {t('dashboard.lessons_count', { count: course.pages.length })}
                                        </span>
                                    </div>
                                </div>

                                <p className="course-card-desc">{desc}</p>

                                {/* Progress */}
                                <div className="course-card-progress-wrap">
                                    <div className="course-card-progress-label">
                                        <span>{t('dashboard.progress')}</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="course-card-bar">
                                        <div className="course-card-bar-fill" style={{ width: `${progress}%` }} />
                                    </div>
                                </div>

                                {/* Start / Continue */}
                                <Link
                                    to={course.pages[0].path}
                                    className="course-card"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 8,
                                        padding: '10px',
                                        borderRadius: 8,
                                        backgroundColor: progress > 0 ? '#f1f5f9' : '#000',
                                        color: progress > 0 ? '#000' : '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        border: 'none',
                                        marginTop: 'auto',
                                    }}
                                >
                                    {progress > 0 ? t('common.continue').toUpperCase() : t('common.start').toUpperCase()}
                                    <ChevronRight size={16} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default HomePage;
