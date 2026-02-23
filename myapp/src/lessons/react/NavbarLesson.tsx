import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Volume2, VolumeX, Menu, X } from 'lucide-react';
import Quiz from '../../components/Quiz';
import { useProgress } from '../../components/useProgress';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../../contexts/SettingsContext';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import '../../home/style.css';
import '../../home/Lesson.css';

// ── Live demo mini-navbar ──
function LiveNavDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('Home');
    const links = ['Home', 'About', 'Lessons', 'Contact'];

    return (
        <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', marginTop: 8 }}>
            {/* Top bar */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 20px', height: 56, background: '#000', color: '#fff'
            }}>
                <span style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>Aloah Academy</span>

                {/* Desktop links */}
                <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="desktop-links">
                    {links.map(l => (
                        <button key={l} onClick={() => setActive(l)} style={{
                            background: 'none', border: 'none', color: active === l ? '#fff' : '#94a3b8',
                            fontWeight: active === l ? 800 : 500, cursor: 'pointer', fontSize: '0.9rem',
                            borderBottom: active === l ? '2px solid #fff' : '2px solid transparent',
                            paddingBottom: 2, transition: 'all 0.2s'
                        }}>{l}</button>
                    ))}
                </div>

                {/* Hamburger */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile drawer */}
            {isOpen && (
                <div style={{ background: '#111827', padding: '8px 0' }}>
                    {links.map(l => (
                        <button key={l} onClick={() => { setActive(l); setIsOpen(false); }} style={{
                            display: 'block', width: '100%', textAlign: 'left', padding: '12px 20px',
                            background: active === l ? '#1f2937' : 'none', border: 'none',
                            color: active === l ? '#fff' : '#94a3b8', fontWeight: active === l ? 700 : 400,
                            cursor: 'pointer', fontSize: '0.95rem'
                        }}>{l}</button>
                    ))}
                </div>
            )}

            {/* Content area */}
            <div style={{ padding: '24px 20px', background: 'var(--surface)' }}>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Active page: <strong style={{ color: 'var(--text-main)' }}>{active}</strong>
                    <span style={{ marginLeft: 12, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        (Click the links or the ☰ icon above)
                    </span>
                </p>
            </div>
        </div>
    );
}

function NavbarLesson() {
    const { markAsCompleted } = useProgress();
    const { t } = useTranslation();
    const { voiceAccent, setVoiceAccent, availableVoices } = useSettings();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [tab, setTab] = useState(0);

    const codeExamples = [
        {
            label: 'Basic NavLink',
            code: `// 1. Install React Router first:
//    npm install react-router-dom

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 24, padding: '16px 32px', background: '#000' }}>
      {/* NavLink automatically adds an "active" class */}
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? '#fff' : '#94a3b8',
          fontWeight: isActive ? 700 : 400,
          textDecoration: 'none',
        })}
      >
        Home
      </NavLink>

      <NavLink to="/lessons" style={({ isActive }) => ({
        color: isActive ? '#fff' : '#94a3b8',
        textDecoration: 'none',
        fontWeight: isActive ? 700 : 400,
      })}>
        Lessons
      </NavLink>
    </nav>
  );
}

export default Navbar;`
        },
        {
            label: 'Hamburger Mobile Menu',
            code: `import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Lessons', to: '/lessons' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', height: 60, background: '#000' }}>
        <span style={{ color: '#fff', fontWeight: 800 }}>My App</span>
        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div style={{ background: '#111', display: 'flex', flexDirection: 'column' }}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              style={{ color: '#fff', padding: '14px 24px', textDecoration: 'none' }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;`
        },
        {
            label: 'Dynamic Links Array',
            code: `// Best Practice: store links in an array
// This makes it easy to add/remove links in one place

import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',     path: '/',        icon: '🏠' },
  { label: 'Lessons',  path: '/lessons', icon: '📚' },
  { label: 'Profile',  path: '/profile', icon: '👤' },
  { label: 'Contact',  path: '/contact', icon: '✉️' },
];

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 8, padding: '12px 24px', background: '#000' }}>
      {NAV_LINKS.map(({ label, path, icon }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: isActive ? 700 : 400,
            background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: isActive ? '#fff' : '#94a3b8',
          })}
        >
          <span>{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;`
        }
    ];

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const text = `Navbar and Menu Links lesson. In React, we create navigation using NavLink from react-router-dom. NavLink automatically detects if it's the active route and lets you apply styles conditionally using the isActive callback. For mobile menus, we use a boolean state controlled by a hamburger button.`;
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
            <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 24, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dashboard</Link>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-muted)' }}>React</span>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Navbar &amp; Menu Links</span>
            </nav>

            {/* Header */}
            <header className="lesson-header">
                <div className="lesson-header-inner">
                    <div className="lesson-header-title">
                        <h1>🧭 Navbar &amp; Menu Links</h1>
                        <p>React Module · Lesson 5 of 7</p>
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

            {/* Concept */}
            <section className="intro">
                <h2 className="sectionTitle">The Concept</h2>
                <p className="description">
                    In React, navigation is handled by <strong>React Router</strong>. Instead of <code>&lt;a href&gt;</code> tags (which reload the page),
                    we use <code>NavLink</code> or <code>Link</code> components that navigate <strong>without a full page refresh</strong>.
                    The <code>NavLink</code> component is special — it knows if the current URL matches its <code>to</code> prop and lets you
                    apply <strong>active styles</strong> automatically.
                </p>
                <div className="codeBlock">
                    <code className="code">{`// ❌ Old HTML way — full page reload
<a href="/about">About</a>

// ✅ React Router way — instant, no reload
import { NavLink } from 'react-router-dom';
<NavLink to="/about">About</NavLink>`}</code>
                </div>

                {/* Concept cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
                    {[
                        { icon: '🔗', title: 'NavLink', desc: 'Like Link, but adds isActive — perfect for navbars.' },
                        { icon: '📍', title: 'to=""', desc: 'The route path to navigate to. Supports relative paths.' },
                        { icon: '🎨', title: 'isActive style', desc: 'A function that returns styles based on whether the link is current.' },
                        { icon: '☰', title: 'Hamburger Menu', desc: 'Boolean state controls open/close of mobile menu drawer.' },
                    ].map(c => (
                        <div key={c.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 16px' }}>
                            <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{c.icon}</div>
                            <strong style={{ display: 'block', marginBottom: 6, color: 'var(--text-main)' }}>{c.title}</strong>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Live Demo */}
            <section className="demo">
                <h2 className="sectionTitle">Live Demo — Interactive Navbar</h2>
                <p className="description">Click the links and the ☰ icon to interact with this real navbar:</p>
                <LiveNavDemo />
            </section>

            {/* Step by step */}
            <section className="demo">
                <h2 className="sectionTitle">Step-by-Step: Build a Navbar</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
                    {[
                        { step: '1', title: 'Install React Router', desc: 'Run this in your project folder:', code: 'npm install react-router-dom' },
                        { step: '2', title: 'Wrap your app in <BrowserRouter>', desc: 'In index.tsx or App.tsx:', code: `import { BrowserRouter } from 'react-router-dom';\n<BrowserRouter><App /></BrowserRouter>` },
                        { step: '3', title: 'Create your Navbar component', desc: 'Use NavLink for automatic active-state detection:', code: `import { NavLink } from 'react-router-dom';\n<NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#fff' : '#aaa' })}>About</NavLink>` },
                        { step: '4', title: 'Add hamburger for mobile', desc: 'Use useState to toggle the mobile menu open/closed:', code: `const [isOpen, setIsOpen] = useState(false);\n<button onClick={() => setIsOpen(!isOpen)}>☰</button>\n{isOpen && <MobileMenu />}` },
                    ].map(s => (
                        <div key={s.step} style={{ padding: '20px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, display: 'flex', gap: 20 }}>
                            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>{s.step}</div>
                            <div style={{ flex: 1 }}>
                                <strong style={{ display: 'block', marginBottom: 4, color: 'var(--text-main)' }}>{s.title}</strong>
                                <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>{s.desc}</p>
                                <div className="codeBlock" style={{ margin: 0 }}>
                                    <code className="code" style={{ fontSize: '0.82rem' }}>{s.code}</code>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Code Playground */}
            <section className="demo">
                <h2 className="sectionTitle">Code Playground</h2>
                <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    {codeExamples.map((ex, i) => (
                        <button key={i} onClick={() => setTab(i)} style={{
                            padding: '6px 16px', borderRadius: 8, border: '1px solid var(--border)',
                            background: tab === i ? '#000' : 'transparent',
                            color: tab === i ? '#fff' : 'var(--text-muted)',
                            fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer'
                        }}>
                            {ex.label}
                        </button>
                    ))}
                </div>
                <CodeEditor
                    key={tab}
                    title={codeExamples[tab].label + '.jsx'}
                    language="javascript"
                    height="360px"
                    defaultCode={codeExamples[tab].code}
                />
            </section>

            {/* Common Mistakes */}
            <section className="demo">
                <h2 className="sectionTitle">⚠️ Common Mistakes</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                    {[
                        { bad: 'Using <a href="..."> for internal links', fix: 'Use <NavLink to="..."> — no page reload' },
                        { bad: 'Forgetting to wrap in <BrowserRouter>', fix: 'Wrap your root component in BrowserRouter' },
                        { bad: 'Not handling the mobile menu close on click', fix: 'Call setIsOpen(false) inside the NavLink onClick' },
                    ].map(m => (
                        <div key={m.bad} style={{ padding: '16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12 }}>
                            <p style={{ margin: '0 0 8px', fontSize: '0.85rem', color: '#ef4444' }}>❌ {m.bad}</p>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#16a34a' }}>✅ {m.fix}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Quiz
                question="Which React Router component automatically applies active styles to the current route?"
                options={["<a>", "<Link>", "<NavLink>", "<Route>"]}
                correctAnswer={2}
                onComplete={() => markAsCompleted('/react/navbar')}
            />

            <nav className="lesson-nav">
                <Link to="/react/form" className="lesson-nav-btn prev">← Form State</Link>
                <Link to="/react/guide" className="lesson-nav-btn next">React Guide →</Link>
            </nav>
        </div>
    );
}

export default NavbarLesson;
