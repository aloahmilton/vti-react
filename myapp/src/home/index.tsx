
/**
 * Home Components Index
 * 
 * This file exports all home page components and provides routing.
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    Home,
    Hash,
    Type,
    ToggleLeft,
    ClipboardList,
    Settings,
    Mail,
    Code,
    Compass,
    Check,
    Menu,
    X,
    FileCode,
    Palette,
    SquarePlay,
    BookOpen,
    Layout,
    Tags,
    Box,
    Grid,
    Zap,
    Variable,
    MousePointer2,
    ChevronDown,
    Search,
    User,
    type LucideIcon
} from 'lucide-react';
import NavbarLesson from '../lessons/react/NavbarLesson';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import CoachingPage from './CoachingPage';
import ProfilePage from './ProfilePage';
import NumberState from '../lessons/react/NumberState';
import InputState from '../lessons/react/InputState';
import ToggleState from '../lessons/react/ToggleState';
import FormState from '../lessons/react/FormState';
import ReactFunctionsGuide from '../lessons/react/ReactFunctionsGuide';
import ReactRouterGuide from '../lessons/react/ReactRouterGuide';
import Services from './Services';
import Contact from './Contact';
import GenericLesson from './GenericLesson';
import { courses, CONTACT_INFO } from './constants';
import { useProgress } from '../components/useProgress';
import { SettingsProvider, useSettings } from '../contexts/SettingsContext';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import './style.css';

// Helper: close sidebar on route change for small screens
function RouteListener({ onRouteChange }: { onRouteChange: () => void }) {
    const location = useLocation();
    useEffect(() => {
        if (window.innerWidth < 1024) onRouteChange();
    }, [location.pathname, onRouteChange]);
    return null;
}

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
    Home, Hash, Type, ToggleLeft, ClipboardList, Settings, Mail, Code, Compass, Menu,
    FileCode, Palette, SquarePlay, BookOpen, Layout, Tags, Box, Grid, Zap,
    Variable, MousePointer2
};

// Protected route — redirects to /login if unauthenticated
function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) navigate('/login', { replace: true });
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? <>{children}</> : null;
}

// Export all components
export {
    HomePage,
    NumberState,
    InputState,
    ToggleState,
    FormState,
    Services,
    Contact,
    ReactFunctionsGuide,
    ReactRouterGuide
};

// Page names for navigation
export type PageName = 'home' | 'number' | 'input' | 'toggle' | 'form' | 'services' | 'contact' | 'react-guide' | 'router-guide';

/**
 * Navigation component - Redesigned with Multi-subject support
 */
function Navigation({
    isOpen,
    toggleSidebar,
    currentSubject,
    setSubject
}: {
    isOpen: boolean,
    toggleSidebar: () => void,
    currentSubject: string,
    setSubject: (id: string) => void
}) {
    const location = useLocation();
    const navigate = useNavigate();
    const { isCompleted, getProgressPercentage } = useProgress();
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    const activeCourse = courses.find(c => c.id === currentSubject) || courses[0];
    const progress = getProgressPercentage(activeCourse.pages.length);

    const renderIcon = (iconName: string, size = 18) => {
        const IconComponent = iconMap[iconName] || Code;
        return <IconComponent size={size} />;
    };

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebarHeader">
                <div className="subjectSelectorWrapper">
                    <button
                        className="subjectSelector"
                        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
                    >
                        <span className="subjectIcon">{renderIcon(activeCourse.icon, 24)}</span>
                        <div className="subjectInfo">
                            <span className="subjectTitle">{activeCourse.name}</span>
                            <span className="subjectTag">Course</span>
                        </div>
                        <ChevronDown size={16} className={`chevron ${isSelectorOpen ? 'rotated' : ''}`} />
                    </button>

                    {isSelectorOpen && (
                        <div className="subjectDropdown">
                            {courses.map(course => (
                                <button
                                    key={course.id}
                                    className={`dropdownItem ${currentSubject === course.id ? 'active' : ''}`}
                                    onClick={() => {
                                        // debug: log selection, set subject and navigate to that course overview
                                        console.log('select course', course.id);
                                        setSubject(course.id);
                                        setIsSelectorOpen(false);
                                        // navigate to first page of selected course for immediate feedback
                                        const target = course.pages && course.pages.length ? course.pages[0].path : '/';
                                        navigate(target);
                                    }}
                                >
                                    {renderIcon(course.icon, 16)}
                                    <span>{course.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <button
                    className="sidebarCollapse"
                    onClick={toggleSidebar}
                    aria-label="Toggle sidebar"
                    style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer'
                    }}
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            <div className="progressContainer">
                <div className="progressBarLabel">
                    <span>{activeCourse.name} Progress</span>
                    <span>{progress}%</span>
                </div>
                <div className="progressBarWrapper">
                    <div className="progressBar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <nav className="tocList">
                <div className="tocSectionLabel">Getting Started</div>
                <div className="tocItem">
                    <Link
                        to="/"
                        className={`tocLink ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                    >
                        <span className="tocIcon"><Home size={18} /></span>
                        <span className="tocText">Overview</span>
                    </Link>
                </div>
                <div className="tocItem">
                    <Link
                        to="/profile"
                        className={`tocLink ${location.pathname === '/profile' ? 'active' : ''}`}
                        onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                    >
                        <span className="tocIcon"><User size={18} /></span>
                        <span className="tocText">My Profile</span>
                    </Link>
                </div>
                <div className="tocItem">
                    <Link
                        to="/search"
                        className={`tocLink ${location.pathname === '/search' ? 'active' : ''}`}
                        onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                    >
                        <span className="tocIcon"><Search size={18} /></span>
                        <span className="tocText">🔍 Search Lessons</span>
                    </Link>
                </div>

                <div className="tocSectionLabel">{activeCourse.name} Lessons</div>
                {activeCourse.pages.map((page) => (
                    <div className="tocItem" key={page.path}>
                        <Link
                            to={page.path}
                            className={`tocLink ${location.pathname === page.path ? 'active' : ''}`}
                            onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                        >
                            <span className="tocIcon">{renderIcon(page.icon)}</span>
                            <span className="tocText">{page.name}</span>
                            {isCompleted(page.path) && <span className="tocCheckmark"><Check size={14} /></span>}
                        </Link>
                    </div>
                ))}

                <div className="tocSectionLabel">Platform</div>
                <div className="tocItem">
                    <Link to="/services" className="tocLink">
                        <span className="tocIcon"><Settings size={18} /></span>
                        <span className="tocText">Services</span>
                    </Link>
                </div>
                <div className="tocItem">
                    <Link to="/coaching" className="tocLink">
                        <span className="tocIcon"><Compass size={18} /></span>
                        <span className="tocText">Personal Coaching</span>
                    </Link>
                </div>
                <div className="tocItem">
                    <Link to="/contact" className="tocLink">
                        <span className="tocIcon"><Mail size={18} /></span>
                        <span className="tocText">Contact</span>
                    </Link>
                </div>
            </nav>
        </aside>
    );
}


/**
 * HomeRoutes - All routes for home pages
 */
function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

            {/* GitHub Course */}
            <Route path="/github/basics" element={<GenericLesson
                title="🔧 Git Basics" subject="GitHub" path="/github/basics"
                nextPath="/github/repos" nextLabel="Repositories"
                content="Git is a distributed version control system. It tracks changes in your code so you can collaborate with others and revisit any version. The three key areas are: Working Directory, Staging Area, and Repository."
                editorLanguage="bash"
                conceptCards={[
                    { icon: '📁', title: 'Working Directory', desc: 'Where you edit files. Changes here are untracked.' },
                    { icon: '🎭', title: 'Staging Area', desc: 'Files staged with git add, ready to be committed.' },
                    { icon: '💾', title: 'Repository', desc: 'Committed history. git commit saves a snapshot.' },
                ]}
                codeExamples={[
                    { label: 'Init & Commit', language: 'bash', code: `# Initialize a new repo\ngit init\n\n# Stage all files\ngit add .\n\n# Commit with a message\ngit commit -m "Initial commit"\n\n# Check status\ngit status` },
                    { label: 'Branching', language: 'bash', code: `# Create a new feature branch\ngit checkout -b feature/login\n\n# List all branches\ngit branch\n\n# Switch back to main\ngit checkout main\n\n# Merge feature branch\ngit merge feature/login` },
                ]}
                quizQuestion="Which command records changes to the repository?"
                quizOptions={["git push", "git save", "git commit", "git record"]}
                quizCorrectAnswer={2}
            />} />
            <Route path="/github/repos" element={<GenericLesson
                title="☁️ Repositories" subject="GitHub" path="/github/repos"
                prevPath="/github/basics" prevLabel="Git Basics"
                nextPath="/github/collab" nextLabel="Collaboration"
                content="A repository (repo) is your project's home — it stores all code and its entire revision history. GitHub hosts remote repos so your team can collaborate from anywhere in the world."
                editorLanguage="bash"
                conceptCards={[
                    { icon: '🏠', title: 'Local Repo', desc: 'Lives on your machine. You commit here first.' },
                    { icon: '☁️', title: 'Remote Repo', desc: 'Hosted on GitHub. Team push/pull from here.' },
                    { icon: '🔃', title: 'Clone', desc: 'git clone downloads a remote repo to your machine.' },
                ]}
                codeExamples={[
                    { label: 'Remote Setup', language: 'bash', code: `# Link local to remote\ngit remote add origin https://github.com/user/repo.git\n\n# Push to GitHub for first time\ngit push -u origin main\n\n# Pull latest changes\ngit pull origin main` },
                    { label: 'Clone', language: 'bash', code: `# Clone a repository\ngit clone https://github.com/user/repo.git\n\n# Clone into a specific folder\ngit clone https://github.com/user/repo.git my-folder\n\n# Check remote info\ngit remote -v` },
                ]}
                quizQuestion="How do you link a local repository to a remote one?"
                quizOptions={["git link remote", "git remote add origin", "git sync", "git connect"]}
                quizCorrectAnswer={1}
            />} />
            <Route path="/github/collab" element={<GenericLesson
                title="🤝 Collaboration" subject="GitHub" path="/github/collab"
                prevPath="/github/repos" prevLabel="Repositories"
                content="GitHub makes team collaboration seamless. You fork repos, work on feature branches, then open Pull Requests for code review before merging into the main branch."
                editorLanguage="bash"
                conceptCards={[
                    { icon: '🍴', title: 'Fork', desc: "Copy someone's repo to your account to experiment freely." },
                    { icon: '🔁', title: 'Pull Request', desc: 'Propose your changes. Team reviews before merging.' },
                    { icon: '🔀', title: 'Merge', desc: 'Git integrates branches by combining their histories.' },
                ]}
                codeExamples={[
                    { label: 'PR Workflow', language: 'bash', code: `# 1. Create feature branch\ngit checkout -b feature/dark-mode\n\n# 2. Make changes, stage, commit\ngit add .\ngit commit -m "Add dark mode toggle"\n\n# 3. Push to GitHub\ngit push origin feature/dark-mode\n\n# 4. Open Pull Request on GitHub\n# 5. After review, merge to main` },
                ]}
                quizQuestion="What do you create to propose changes to a repository?"
                quizOptions={["Push Request", "Commit Suggestion", "Pull Request", "Merge Proposal"]}
                quizCorrectAnswer={2}
            />} />

            {/* React Course */}
            <Route path="/react/number" element={<NumberState />} />
            <Route path="/react/input" element={<InputState />} />
            <Route path="/react/toggle" element={<ToggleState />} />
            <Route path="/react/form" element={<FormState />} />
            <Route path="/react/navbar" element={<NavbarLesson />} />
            <Route path="/react/guide" element={<ReactFunctionsGuide />} />
            <Route path="/react/router" element={<ReactRouterGuide />} />

            {/* HTML Course */}
            <Route path="/html/structure" element={<GenericLesson
                title="🏗️ HTML Structure" subject="HTML" path="/html/structure"
                nextPath="/html/forms" nextLabel="HTML Forms"
                content="HTML defines the skeleton of every web page. Elements are nested in a tree called the DOM. The root is always <html>, containing <head> (metadata) and <body> (visible content)."
                editorLanguage="html"
                conceptCards={[
                    { icon: '🌳', title: 'DOM Tree', desc: 'Nested elements form a tree the browser renders.' },
                    { icon: '🏷️', title: 'Tags', desc: 'HTML uses opening and closing tags like <div></div>.' },
                    { icon: '🎭', title: 'Attributes', desc: 'Extra info on a tag: class, id, src, href, etc.' },
                ]}
                codeExamples={[
                    { label: 'Page Skeleton', language: 'html', code: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n  </head>\n  <body>\n    <header>\n      <h1>Welcome</h1>\n    </header>\n    <main>\n      <p>This is the main content area.</p>\n    </main>\n    <footer>\n      <p>&copy; 2026 Aloah Milton</p>\n    </footer>\n  </body>\n</html>` },
                ]}
                quizQuestion="Which tag is the root element of an HTML page?"
                quizOptions={["<body>", "<html>", "<head>", "<root>"]}
                quizCorrectAnswer={1}
            />} />
            <Route path="/html/forms" element={<GenericLesson
                title="📋 HTML Forms" subject="HTML" path="/html/forms"
                prevPath="/html/structure" prevLabel="HTML Structure"
                nextPath="/html/semantic" nextLabel="Semantic HTML"
                content="Forms are how users send data to your server. Each form element has a name and a value. The action attribute defines where the data goes; method sets GET or POST."
                editorLanguage="html"
                conceptCards={[
                    { icon: '⌨️', title: 'input', desc: 'Captures text, email, password, number, checkbox…' },
                    { icon: '📃', title: 'textarea', desc: 'Multi-line text input for longer messages.' },
                    { icon: '🔽', title: 'select', desc: 'Dropdown menu with <option> children.' },
                ]}
                codeExamples={[
                    { label: 'Contact Form', language: 'html', code: `<form action="/submit" method="POST">\n  <fieldset>\n    <legend>Contact Us</legend>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name" required />\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required />\n    <label for="message">Message:</label>\n    <textarea id="message" name="message" rows="4"></textarea>\n    <button type="submit">Send</button>\n  </fieldset>\n</form>` },
                ]}
                quizQuestion="Which tag groups related form elements?"
                quizOptions={["<fieldset>", "<group>", "<section>", "<div>"]}
                quizCorrectAnswer={0}
            />} />
            <Route path="/html/semantic" element={<GenericLesson
                title="🏷️ Semantic HTML" subject="HTML" path="/html/semantic"
                prevPath="/html/forms" prevLabel="HTML Forms"
                content="Semantic tags describe meaning, not just appearance. They improve SEO and accessibility. Screen readers and search engines understand <article> and <nav> far better than generic <div>s."
                editorLanguage="html"
                conceptCards={[
                    { icon: '📰', title: '<article>', desc: 'Self-contained content like a blog post or news item.' },
                    { icon: '🧭', title: '<nav>', desc: 'Navigation links section of the page.' },
                    { icon: '📦', title: '<section>', desc: 'Thematic grouping with a heading.' },
                ]}
                codeExamples={[
                    { label: 'Semantic Layout', language: 'html', code: `<body>\n  <header>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/about">About</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>Blog Post Title</h2>\n      <p>Article content goes here...</p>\n    </article>\n    <aside>\n      <h3>Related Links</h3>\n    </aside>\n  </main>\n  <footer>\n    <p>Footer content</p>\n  </footer>\n</body>` },
                ]}
                quizQuestion="Which tag is most semantic for the main navigation?"
                quizOptions={["<div id='nav'>", "<ul>", "<nav>", "<menu>"]}
                quizCorrectAnswer={2}
            />} />

            {/* CSS Course */}
            <Route path="/css/flexbox" element={<GenericLesson
                title="📦 CSS Flexbox" subject="CSS" path="/css/flexbox"
                nextPath="/css/grid" nextLabel="CSS Grid"
                content="Flexbox is a one-dimensional layout model. Use it to align and distribute items in a row or column — it handles spacing automatically and adapts to dynamic content sizes."
                editorLanguage="css"
                conceptCards={[
                    { icon: '↔️', title: 'flex-direction', desc: 'Row (default) or column — sets the main axis.' },
                    { icon: '⚖️', title: 'justify-content', desc: 'Aligns items along the main axis.' },
                    { icon: '📏', title: 'align-items', desc: 'Aligns items along the cross axis.' },
                ]}
                codeExamples={[
                    { label: 'Center Anything', language: 'css', code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.child {\n  flex: 1;\n  padding: 16px;\n}` },
                    { label: 'Nav Bar', language: 'css', code: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  height: 64px;\n  gap: 16px;\n}\n\n.nav-links {\n  display: flex;\n  gap: 24px;\n  list-style: none;\n}` },
                ]}
                quizQuestion="Which property defines the main axis in Flexbox?"
                quizOptions={["flex-direction", "justify-content", "align-items", "display"]}
                quizCorrectAnswer={0}
            />} />
            <Route path="/css/grid" element={<GenericLesson
                title="🗂️ CSS Grid" subject="CSS" path="/css/grid"
                prevPath="/css/flexbox" prevLabel="CSS Flexbox"
                nextPath="/css/animations" nextLabel="Animations"
                content="CSS Grid is a two-dimensional layout system. It lets you control rows AND columns simultaneously — perfect for complex page layouts and dashboard UIs."
                editorLanguage="css"
                conceptCards={[
                    { icon: '📐', title: 'grid-template-columns', desc: 'Define column sizes: fr, px, %, auto, repeat().' },
                    { icon: '↕️', title: 'grid-template-rows', desc: 'Define row sizes the same way.' },
                    { icon: '〰️', title: 'gap', desc: 'Space between both rows and columns.' },
                ]}
                codeExamples={[
                    { label: 'Card Grid', language: 'css', code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n\n.three-col {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 16px;\n}` },
                ]}
                quizQuestion="Which property sets the gap between rows and columns?"
                quizOptions={["margin", "padding", "gap", "spacing"]}
                quizCorrectAnswer={2}
            />} />
            <Route path="/css/animations" element={<GenericLesson
                title="✨ CSS Animations" subject="CSS" path="/css/animations"
                prevPath="/css/grid" prevLabel="CSS Grid"
                content="CSS animations let you define transitions between styles at different keyframe points. Use @keyframes to describe states, then apply the animation property to any element."
                editorLanguage="css"
                conceptCards={[
                    { icon: '🎬', title: '@keyframes', desc: 'Defines animation steps from 0% to 100%.' },
                    { icon: '⏱️', title: 'animation-duration', desc: 'How long one cycle of the animation takes.' },
                    { icon: '🔄', title: 'animation-iteration-count', desc: '"infinite" loops forever.' },
                ]}
                codeExamples={[
                    { label: 'Fade In', language: 'css', code: `@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.card {\n  animation: fadeIn 0.4s ease forwards;\n}` },
                    { label: 'Spinner', language: 'css', code: `@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n.loader {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #ccc;\n  border-top-color: #000;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}` },
                ]}
                quizQuestion="Which keyword defines an animation sequence?"
                quizOptions={["@keyframes", "@animate", "@sequence", "@motion"]}
                quizCorrectAnswer={0}
            />} />

            {/* JavaScript Course */}
            <Route path="/js/variables" element={<GenericLesson
                title="📦 JS Variables" subject="JavaScript" path="/js/variables"
                nextPath="/js/functions" nextLabel="JS Functions"
                content="In modern JavaScript there are three ways to declare variables: var (old, avoid), let (block-scoped, can change), and const (block-scoped, cannot be reassigned). Prefer const by default."
                editorLanguage="javascript"
                conceptCards={[
                    { icon: '🔒', title: 'const', desc: "Cannot be reassigned. Best for values that don't change." },
                    { icon: '🔄', title: 'let', desc: 'Block-scoped. Use when the value will change.' },
                    { icon: '⚠️', title: 'var', desc: 'Function-scoped, hoisted — avoid in modern code.' },
                ]}
                codeExamples={[
                    { label: 'const vs let', language: 'javascript', code: `// const — value cannot change\nconst PI = 3.14159;\nconst name = 'Aloah';\n\n// let — can be reassigned\nlet score = 0;\nscore = score + 10;\n\n// Destructuring\nconst { x, y } = { x: 1, y: 2 };\nconst [first, ...rest] = [1, 2, 3, 4];\n\n// Return score:\nscore;` },
                ]}
                quizQuestion="Which keyword declares a variable that cannot be reassigned?"
                quizOptions={["let", "var", "const", "fixed"]}
                quizCorrectAnswer={2}
            />} />
            <Route path="/js/functions" element={<GenericLesson
                title="⚡ JS Functions" subject="JavaScript" path="/js/functions"
                prevPath="/js/variables" prevLabel="JS Variables"
                nextPath="/js/dom" nextLabel="DOM Manipulation"
                content="Functions are reusable blocks of code. Modern JS prefers arrow functions for their concise syntax and lexical this binding. Higher-order functions like map, filter, and reduce make data transformation elegant."
                editorLanguage="javascript"
                conceptCards={[
                    { icon: '➡️', title: 'Arrow Function', desc: 'const fn = () => {}. Concise, lexical this.' },
                    { icon: '🔁', title: '.map()', desc: 'Transforms each item in an array, returns new array.' },
                    { icon: '🔍', title: '.filter()', desc: 'Returns items that pass a test function.' },
                ]}
                codeExamples={[
                    { label: 'Arrow Functions', language: 'javascript', code: `const greet = (name) => \`Hello, \${name}!\`;\nconst double = x => x * 2;\nconst power = (base, exp = 2) => base ** exp;\n\ngreet('Aloah');` },
                    { label: 'Array Methods', language: 'javascript', code: `const nums = [1, 2, 3, 4, 5, 6];\n\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);\nconst total = nums.reduce((acc, n) => acc + n, 0);\n\nJSON.stringify({ doubled, evens, total });` },
                ]}
                quizQuestion="How do you write an arrow function?"
                quizOptions={["function() => {}", "const x = () => {}", "arrow function x()", "x = function =>"]}
                quizCorrectAnswer={1}
            />} />
            <Route path="/js/dom" element={<GenericLesson
                title="🌐 DOM Manipulation" subject="JavaScript" path="/js/dom"
                prevPath="/js/functions" prevLabel="JS Functions"
                content="The DOM (Document Object Model) is a tree of objects representing your HTML. JavaScript can read, modify, add, and remove DOM elements dynamically — making pages interactive without reloads."
                editorLanguage="javascript"
                conceptCards={[
                    { icon: '🔎', title: 'Querying', desc: 'getElementById, querySelector find elements.' },
                    { icon: '✍️', title: 'Modifying', desc: 'Change textContent, innerHTML, style, classList.' },
                    { icon: '👂', title: 'Events', desc: 'addEventListener lets you respond to user actions.' },
                ]}
                codeExamples={[
                    { label: 'Query & Modify', language: 'javascript', code: `const btn = document.getElementById('myBtn');\nconst card = document.querySelector('.card');\n\ncard.textContent = 'Updated!';\ncard.style.background = '#000';\ncard.classList.add('active');\n\nconst el = document.createElement('p');\nel.textContent = 'New paragraph';\ndocument.body.appendChild(el);` },
                    { label: 'Events', language: 'javascript', code: `const button = document.querySelector('button');\n\nbutton.addEventListener('click', (e) => {\n  button.textContent = 'Clicked!';\n});\n\ndocument.addEventListener('keydown', (e) => {\n  console.log('Key:', e.key);\n});` },
                ]}
                quizQuestion="Which method selects an element by its ID?"
                quizOptions={["getElement()", "select('#id')", "getElementById()", "findId()"]}
                quizCorrectAnswer={2}
            />} />

            {/* PHP Course Placeholder */}
            <Route path="/php/*" element={<div className="container"><h1>PHP Course Module</h1><p>Server-side programming content coming soon...</p></div>} />

            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/router-guide" element={<ReactRouterGuide />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/coaching" element={<CoachingPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

/**
 * NotFound - Page for non-existent routes
 */
function NotFound() {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Page Not Found</h2>
            <p className="description" style={{ marginBottom: '40px' }}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="button buttonPrimary" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Return Home
            </Link>
        </div>
    );
}

/**
 * Footer - Global footer with contact info
 */
function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerSection">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Aloah Milton Academy</h3>
                    <p className="footerText">
                        A modern learning platform for developers who want to master the craft of software engineering.
                    </p>
                </div>
                <div className="footerSection">
                    <h3>Contact Us</h3>
                    <div className="contactInfo">
                        <div className="contactItem">
                            <Mail size={18} />
                            <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                {CONTACT_INFO.email}
                            </a>
                        </div>
                        <div className="contactItem">
                            <Settings size={18} />
                            <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
                        </div>
                    </div>
                </div>
                <div className="footerSection">
                    <h3>Platform</h3>
                    <ul className="footerLinks">
                        <li><Link to="/">Courses</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Support</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>&copy; {new Date().getFullYear()} Aloah Milton. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#" className="footerLink">Privacy Policy</a>
                    <a href="#" className="footerLink">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

/**
 * HomeApp - Main component with Router and Navigation
 */
function HomeAppContent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentSubject, setCurrentSubject] = useState('react');
    const location = useLocation();
    const { language, setLanguage } = useSettings();
    const { isAuthenticated, user, logout } = useAuth();

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    // Sidebar should only show on post-login/dashboard and lesson pages
    const hideSidebar = location.pathname === '/';

    return (
        <div className={`homeApp ${hideSidebar ? 'no-sidebar' : ''}`}>
            <RouteListener onRouteChange={() => setIsSidebarOpen(false)} />

            {/* Language Toggle + Auth */}
            <div className="langToggleWrapper">
                <button
                    className={`langBtn ${language === 'en' ? 'active' : ''}`}
                    onClick={() => setLanguage('en')}
                >
                    EN
                </button>
                <button
                    className={`langBtn ${language === 'fr' ? 'active' : ''}`}
                    onClick={() => setLanguage('fr')}
                >
                    FR
                </button>

                {/* ---- Auth status ---- */}
                {isAuthenticated ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Link
                            to="/profile"
                            style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', textDecoration: 'none' }}
                        >
                            {user?.name}
                        </Link>
                        <button
                            onClick={logout}
                            style={{
                                padding: '6px 14px',
                                borderRadius: '8px',
                                border: '1px solid var(--border)',
                                background: 'transparent',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                color: 'var(--text-muted)'
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        style={{
                            padding: '7px 16px',
                            borderRadius: '8px',
                            background: '#000',
                            color: '#fff',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            textDecoration: 'none'
                        }}
                    >
                        Sign In
                    </Link>
                )}
            </div>

            {!hideSidebar && (
                <Navigation
                    isOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    currentSubject={currentSubject}
                    setSubject={setCurrentSubject}
                />
            )}

            {!hideSidebar && (
                <button type="button" className="mobileToggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            )}

            <main className={`pageContent ${hideSidebar ? 'full-width' : ''}`}>
                <HomeRoutes />
                <Footer />
            </main>
        </div>
    );
}

/**
 * HomeApp - Main component with Router
 */
function HomeApp() {
    return (
        <AuthProvider>
            <SettingsProvider>
                <Router>
                    <HomeAppContent />
                </Router>
            </SettingsProvider>
        </AuthProvider>
    );
}

export default HomeApp;
