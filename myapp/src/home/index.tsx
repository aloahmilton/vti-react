/**
 * Home Components Index
 * 
 * This file exports all home page components and provides routing.
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import NumberState from './NumberState';
import InputState from './InputState';
import ToggleState from './ToggleState';
import FormState from './FormState';
import Services from './Services';
import Contact from './Contact';
import ReactFunctionsGuide from './ReactFunctionsGuide';
import ReactRouterGuide from './ReactRouterGuide';
import { pages } from './constants';
import './style.css';

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
 * Navigation component
 */
function Navigation() {
    const location = useLocation();
    
    return (
        <nav className="navBar">
            <div className="navBrand">
                <span className="navLogo">⚛️</span>
                <span className="navTitle">React State Examples</span>
            </div>
            <ul className="navLinks">
                {pages.map((page) => (
                    <li key={page.path}>
                        <Link
                            to={page.path}
                            className={`navLink ${location.pathname === page.path ? 'active' : ''}`}
                        >
                            <span className="navIcon">{page.icon}</span>
                            <span className="navText">{page.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

/**
 * HomeRoutes - All routes for home pages
 */
function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/number" element={<NumberState />} />
            <Route path="/input" element={<InputState />} />
            <Route path="/toggle" element={<ToggleState />} />
            <Route path="/form" element={<FormState />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/react-guide" element={<ReactFunctionsGuide />} />
            <Route path="/router-guide" element={<ReactRouterGuide />} />
        </Routes>
    );
}

/**
 * HomeApp - Main component with Router and Navigation
 */
function HomeApp() {
    return (
        <Router>
            <div className="homeApp">
                <Navigation />
                <main className="pageContent">
                    <HomeRoutes />
                </main>
            </div>
        </Router>
    );
}

export default HomeApp;
