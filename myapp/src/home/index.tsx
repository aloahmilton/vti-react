
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
    Server,
    Database,
    AlertTriangle,
    Filter,
    Edit,
    Monitor,
    Move,
    Square,
    AlignCenter,
    Link2,
    List,
    Eye,
    Table,
    Layers,
    Share2,
    Repeat,
    Timer,
    Globe,
    Package,
    type LucideIcon
} from 'lucide-react';
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
import { courses, CONTACT_INFO } from './constants';
import { htmlRoutes } from '../courses/HtmlRoutes';
import { cssRoutes } from '../courses/CssRoutes';
import { jsRoutes } from '../courses/JsRoutes';
import { reactRoutes } from '../courses/ReactRoutes';
import { phpRoutes } from '../courses/PhpRoutes';
import { mysqlRoutes } from '../courses/MysqlRoutes';
import { githubRoutes } from '../courses/GithubRoutes';
import { useProgress } from '../components/useProgress';
import { SettingsProvider } from '../contexts/SettingsContext';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import TopHeader from './TopHeader';
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
    Variable, MousePointer2, Server, Database, AlertTriangle, Filter, Edit,
    Monitor, Move, Square, AlignCenter, Link2, List, Eye, Table, Layers,
    Share2, Repeat, Timer, Globe, Package, Search, User, Check
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

            {/* Modular Course Routes */}
            {htmlRoutes}
            {cssRoutes}
            {jsRoutes}
            {reactRoutes}
            {phpRoutes}
            {mysqlRoutes}
            {githubRoutes}

            <Route path="/search" element={<SearchPage />} />
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

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    // Sidebar should only show on post-login/dashboard and lesson pages
    const hideSidebar = location.pathname === '/';

    return (
        <div className={`homeApp ${hideSidebar ? 'no-sidebar' : ''}`}>
            <RouteListener onRouteChange={() => setIsSidebarOpen(false)} />

            {!hideSidebar && <TopHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}

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
