import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { courses } from './constants';
import './style.css';

// Build a searchable index from all courses and pages
interface SearchEntry {
    courseName: string;
    courseId: string;
    lessonName: string;
    path: string;
    /** Keywords to match against */
    tags: string[];
}

const SEARCH_INDEX: SearchEntry[] = [
    // React
    { courseName: 'React', courseId: 'react', lessonName: 'Navbar & Menu Links', path: '/react/navbar', tags: ['navbar', 'nav', 'menu', 'navigation', 'link', 'navlink', 'hamburger', 'header', 'menu bar', 'react router', 'routing', 'how to create a nav', 'how to make a menu', 'how to create navigation'] },
    { courseName: 'React', courseId: 'react', lessonName: 'Number State', path: '/react/number', tags: ['number', 'state', 'counter', 'usestate', 'increment', 'decrement', 'count', 'how to count'] },
    { courseName: 'React', courseId: 'react', lessonName: 'Input State', path: '/react/input', tags: ['input', 'state', 'text', 'typing', 'controlled', 'onchange', 'value', 'form input', 'how to get input', 'text field'] },
    { courseName: 'React', courseId: 'react', lessonName: 'Toggle State', path: '/react/toggle', tags: ['toggle', 'boolean', 'switch', 'on off', 'show hide', 'dark mode', 'modal', 'visible', 'how to toggle'] },
    { courseName: 'React', courseId: 'react', lessonName: 'Form State', path: '/react/form', tags: ['form', 'list', 'array', 'todo', 'add item', 'remove item', 'spread', 'filter', 'map', 'how to manage list', 'how to add to array'] },
    { courseName: 'React', courseId: 'react', lessonName: 'React Guide', path: '/react/guide', tags: ['react', 'guide', 'functions', 'hooks', 'components', 'props', 'how to', 'basics'] },
    { courseName: 'React', courseId: 'react', lessonName: 'Router Guide', path: '/react/router', tags: ['router', 'routing', 'react router', 'pages', 'navigate', 'redirect', 'how to navigate'] },

    // GitHub
    { courseName: 'GitHub', courseId: 'github', lessonName: 'Git Basics', path: '/github/basics', tags: ['git', 'commit', 'staging', 'version control', 'init', 'how to git', 'how to commit'] },
    { courseName: 'GitHub', courseId: 'github', lessonName: 'Repositories', path: '/github/repos', tags: ['repository', 'repo', 'remote', 'github', 'clone', 'push', 'pull', 'origin', 'how to create repo'] },
    { courseName: 'GitHub', courseId: 'github', lessonName: 'Collaboration', path: '/github/collab', tags: ['collaboration', 'pull request', 'pr', 'fork', 'merge', 'team', 'review', 'how to collaborate'] },

    // HTML
    { courseName: 'HTML', courseId: 'html', lessonName: 'HTML Structure', path: '/html/structure', tags: ['html', 'structure', 'page', 'dom', 'tags', 'body', 'head', 'html5', 'how to structure html'] },
    { courseName: 'HTML', courseId: 'html', lessonName: 'HTML Forms', path: '/html/forms', tags: ['form', 'input', 'html form', 'submit', 'fieldset', 'label', 'textarea', 'how to create a form', 'html input'] },
    { courseName: 'HTML', courseId: 'html', lessonName: 'Semantic HTML', path: '/html/semantic', tags: ['semantic', 'seo', 'nav', 'article', 'section', 'header', 'footer', 'accessibility', 'how to use semantic html'] },

    // CSS
    { courseName: 'CSS', courseId: 'css', lessonName: 'CSS Flexbox', path: '/css/flexbox', tags: ['flexbox', 'flex', 'align', 'center', 'layout', 'row', 'column', 'justify', 'how to center', 'how to align'] },
    { courseName: 'CSS', courseId: 'css', lessonName: 'CSS Grid', path: '/css/grid', tags: ['grid', 'css grid', 'columns', 'rows', 'layout', 'gap', 'two dimensional', 'how to make grid', 'dashboard layout'] },
    { courseName: 'CSS', courseId: 'css', lessonName: 'CSS Animations', path: '/css/animations', tags: ['animation', 'keyframe', 'transition', 'fade', 'spin', 'motion', 'how to animate', 'css animation'] },

    // JavaScript
    { courseName: 'JavaScript', courseId: 'js', lessonName: 'JS Variables', path: '/js/variables', tags: ['variables', 'const', 'let', 'var', 'declare', 'javascript', 'how to declare variable', 'js basics'] },
    { courseName: 'JavaScript', courseId: 'js', lessonName: 'JS Functions', path: '/js/functions', tags: ['function', 'arrow function', 'map', 'filter', 'reduce', 'callback', 'how to write a function', 'js function'] },
    { courseName: 'JavaScript', courseId: 'js', lessonName: 'DOM Manipulation', path: '/js/dom', tags: ['dom', 'getelementbyid', 'queryselector', 'addeventlistener', 'click', 'javascript dom', 'how to manipulate dom', 'how to change html with javascript'] },
];

// Get unique course badges
const COURSE_COLORS: Record<string, string> = {
    React: '#61dafb',
    GitHub: '#24292e',
    HTML: '#e44d26',
    CSS: '#264de4',
    JavaScript: '#f7df1e',
};

const COURSE_TEXT: Record<string, string> = {
    React: '#000',
    GitHub: '#fff',
    HTML: '#fff',
    CSS: '#fff',
    JavaScript: '#000',
};

// Popular how-to topics
const POPULAR = [
    'how to create a navbar',
    'how to toggle dark mode',
    'how to add to array',
    'how to get input value',
    'how to navigate between pages',
    'how to animate',
    'how to center with flexbox',
    'git commit',
];

export default function SearchPage() {
    const [query, setQuery] = useState('');

    const results = useMemo(() => {
        if (!query.trim()) return [];
        const q = query.toLowerCase();
        return SEARCH_INDEX.filter(entry =>
            entry.lessonName.toLowerCase().includes(q) ||
            entry.courseName.toLowerCase().includes(q) ||
            entry.tags.some(tag => tag.includes(q) || q.includes(tag))
        );
    }, [query]);

    return (
        <div className="container" style={{ maxWidth: 780 }}>
            {/* Breadcrumb */}
            <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 24, display: 'flex', gap: 6, alignItems: 'center' }}>
                <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dashboard</Link>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Search Lessons</span>
            </nav>

            {/* Title */}
            <div style={{ marginBottom: 40 }}>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', margin: '0 0 8px' }}>
                    🔍 How-To Search
                </h1>
                <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1rem' }}>
                    Ask a question or search for any topic across all courses
                </p>
            </div>

            {/* Search bar */}
            <div style={{ position: 'relative', marginBottom: 32 }}>
                <Search
                    size={20}
                    style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }}
                />
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder='Try "how to create a navbar in react" or "flexbox center"…'
                    autoFocus
                    style={{
                        width: '100%', boxSizing: 'border-box',
                        padding: '16px 20px 16px 50px',
                        fontSize: '1.05rem', borderRadius: 14,
                        border: '2px solid var(--border)', background: 'var(--surface)',
                        color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = '#000'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                {query && (
                    <button
                        onClick={() => setQuery('')}
                        style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '1.1rem' }}
                    >×</button>
                )}
            </div>

            {/* Results */}
            {query.trim() && (
                <section style={{ marginBottom: 48 }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                        {results.length === 0 ? 'No lessons matched your search.' : `${results.length} lesson${results.length > 1 ? 's' : ''} found`}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {results.map(r => (
                            <Link
                                key={r.path}
                                to={r.path}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div style={{
                                    padding: '18px 20px', background: 'var(--surface)', border: '1px solid var(--border)',
                                    borderRadius: 14, display: 'flex', alignItems: 'center', gap: 16, transition: 'transform 0.15s, box-shadow 0.15s'
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
                                >
                                    <BookOpen size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>{r.lessonName}</div>
                                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{r.courseName} course</div>
                                    </div>
                                    <span style={{
                                        padding: '3px 10px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 800,
                                        background: COURSE_COLORS[r.courseName] ?? '#eee',
                                        color: COURSE_TEXT[r.courseName] ?? '#000',
                                    }}>
                                        {r.courseName}
                                    </span>
                                    <ArrowRight size={16} color="var(--text-muted)" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Popular topics (shown when no query) */}
            {!query.trim() && (
                <section>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: 16 }}>💡 Popular How-To Topics</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
                        {POPULAR.map(p => (
                            <button key={p} onClick={() => setQuery(p)} style={{
                                padding: '8px 16px', borderRadius: 99, border: '1px solid var(--border)',
                                background: 'var(--surface)', color: 'var(--text-muted)',
                                cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.15s'
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#000'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'; }}
                            >
                                {p}
                            </button>
                        ))}
                    </div>

                    <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: 16 }}>📚 Browse All Courses</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                        {courses.map(course => (
                            <div key={course.id} style={{ padding: '18px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14 }}>
                                <h3 style={{ fontWeight: 800, margin: '0 0 12px', fontSize: '1rem', color: 'var(--text-main)' }}>{course.name}</h3>
                                {course.pages.map(p => (
                                    <Link key={p.path} to={p.path} style={{
                                        display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0',
                                        color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem',
                                        borderBottom: '1px solid var(--border)'
                                    }}>
                                        <ArrowRight size={12} />
                                        {p.name}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
