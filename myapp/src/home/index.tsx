/**
 * Home Components Index
 * 
 * This file exports all home page components and provides routing.
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
    type LucideIcon
} from 'lucide-react';
import HomePage from './HomePage';
import NumberState from './NumberState';
import InputState from './InputState';
import ToggleState from './ToggleState';
import FormState from './FormState';
import Services from './Services';
import Contact from './Contact';
import ReactFunctionsGuide from './ReactFunctionsGuide';
import ReactRouterGuide from './ReactRouterGuide';
import GenericLesson from './GenericLesson';
import { courses } from './constants';
import { useProgress } from './useProgress';
import './style.css';

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
    Home, Hash, Type, ToggleLeft, ClipboardList, Settings, Mail, Code, Compass,
    FileCode, Palette, SquarePlay, BookOpen, Layout, Tags, Box, Grid, Zap,
    Variable, MousePointer2
};

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
                                        setSubject(course.id);
                                        setIsSelectorOpen(false);
                                    }}
                                >
                                    {renderIcon(course.icon, 16)}
                                    <span>{course.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
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
            <Route path="/" element={<HomePage />} />
            {/* React Course */}
            <Route path="/number" element={<NumberState />} />
            <Route path="/input" element={<InputState />} />
            <Route path="/toggle" element={<ToggleState />} />
            <Route path="/form" element={<FormState />} />
            <Route path="/react-guide" element={<ReactFunctionsGuide />} />

            {/* HTML Course */}
            <Route path="/html/structure" element={<GenericLesson
                title="HTML Structure" subject="HTML" path="/html/structure" nextPath="/html/forms"
                content="Learn how to structure your web pages using standard HTML5 tags."
                quizQuestion="Which tag is the root element of an HTML page?"
                quizOptions={["<body>", "<html>", "<head>", "<root>"]}
                quizCorrectAnswer={1}
            />} />
            <Route path="/html/forms" element={<GenericLesson
                title="HTML Forms" subject="HTML" path="/html/forms" nextPath="/html/semantic"
                content="Master user input with HTML forms and various input types."
                quizQuestion="Which attribute is used to group related elements in a form?"
                quizOptions={["<fieldset>", "<group>", "<section>", "<div>"]}
                quizCorrectAnswer={0}
            />} />
            <Route path="/html/semantic" element={<GenericLesson
                title="Semantic HTML" subject="HTML" path="/html/semantic"
                content="Improve SEO and accessibility with semantic tags like <header>, <nav>, and <article>."
                quizQuestion="Which tag is more semantic for the main navigation?"
                quizOptions={["<div id='nav'>", "<ul>", "<nav>", "<menu>"]}
                quizCorrectAnswer={2}
            />} />

            {/* CSS Course */}
            <Route path="/css/flexbox" element={<GenericLesson
                title="CSS Flexbox" subject="CSS" path="/css/flexbox" nextPath="/css/grid"
                content="Align elements easily with the Flexbox layout model."
                quizQuestion="Which property defines the main axis in Flexbox?"
                quizOptions={["flex-direction", "justify-content", "align-items", "display"]}
                quizCorrectAnswer={0}
            />} />
            <Route path="/css/grid" element={<GenericLesson
                title="CSS Grid" subject="CSS" path="/css/grid" nextPath="/css/animations"
                content="Build complex two-dimensional layouts with Grid."
                quizQuestion="Which property sets the size of the gaps between rows and columns?"
                quizOptions={["margin", "padding", "gap", "spacing"]}
                quizCorrectAnswer={2}
            />} />
            <Route path="/css/animations" element={<GenericLesson
                title="CSS Animations" subject="CSS" path="/css/animations"
                content="Bring your site to life with CSS transitions and keyframe animations."
                quizQuestion="Which keyword is used to define an animation sequence?"
                quizOptions={["@keyframes", "@animate", "@sequence", "@motion"]}
                quizCorrectAnswer={0}
            />} />

            {/* JavaScript Course */}
            <Route path="/js/variables" element={<GenericLesson
                title="JS Variables" subject="JavaScript" path="/js/variables" nextPath="/js/functions"
                content="Learn the difference between let, const, and var."
                quizQuestion="Which keyword is used to declare a variable that cannot be reassigned?"
                quizOptions={["let", "var", "const", "fixed"]}
                quizCorrectAnswer={2}
            />} />
            <Route path="/js/functions" element={<GenericLesson
                title="JS Functions" subject="JavaScript" path="/js/functions" nextPath="/js/dom"
                content="Master arrow functions and standard function declarations."
                quizQuestion="How do you write an arrow function?"
                quizOptions={["function() => {}", "const x = () => {}", "arrow function x()", "x = function =>"]}
                quizCorrectAnswer={1}
            />} />
            <Route path="/js/dom" element={<GenericLesson
                title="DOM Manipulation" subject="JavaScript" path="/js/dom"
                content="Interact with the web page structure using the Document Object Model."
                quizQuestion="Which method is used to select an element by its ID?"
                quizOptions={["getElement()", "select('#id')", "getElementById()", "findId()"]}
                quizCorrectAnswer={2}
            />} />

            {/* PHP Course Placeholder */}
            <Route path="/php/*" element={<div className="container"><h1>PHP Course Module</h1><p>Server-side programming content coming soon...</p></div>} />

            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/router-guide" element={<ReactRouterGuide />} />
        </Routes>
    );
}

/**
 * HomeApp - Main component with Router and Navigation
 */
function HomeApp() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentSubject, setCurrentSubject] = useState('react');

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <Router>
            <div className="homeApp">
                <Navigation
                    isOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    currentSubject={currentSubject}
                    setSubject={setCurrentSubject}
                />

                <button className="mobileToggle" onClick={toggleSidebar}>
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <main className="pageContent">
                    <HomeRoutes />
                </main>
            </div>
        </Router>
    );
}

export default HomeApp;
