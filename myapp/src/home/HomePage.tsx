/**
 * HomePage Component
 * 
 * This is the main landing page of the React State Examples application.
 * It serves as the entry point and navigation hub for the entire application.
 * 
 * WHAT YOU'LL LEARN:
 * - How to create a landing page in React
 * - How to use React Router links for navigation
 * - How to structure a user-friendly homepage
 * 
 * CONCEPTS COVERED IN THIS APP:
 * 1. Number State - Using useState with numbers (counter)
 * 2. Input State - Using useState with strings (text input)
 * 3. Toggle State - Using useState with booleans (on/off)
 * 4. Form State - Using useState with arrays (form fields)
 * 5. Menu - Hamburger menu with multiple state types
 * 
 * @author Beginner React Developer
 * @description Main entry point showing all available tutorials
 */

import { Link } from 'react-router-dom';
import './style.css';

/**
 * HomePage - The main landing page component
 * 
 * This component displays:
 * - Welcome message and app description
 * - Card-based navigation to each tutorial section
 * - Quick overview of what each section teaches
 */
function HomePage() {
    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <h1 style={styles.title}>Welcome to React State Examples! 🚀</h1>
                <p style={styles.subtitle}>
                    Learn React useState hook through interactive examples
                </p>
            </header>

            {/* Introduction Section */}
            <section style={styles.intro}>
                <h2 style={styles.sectionTitle}>What is React State?</h2>
                <p style={styles.description}>
                    State is like a component's memory. It allows components to 
                    <strong> remember things</strong> - like user input, toggle states, 
                    or any data that changes over time.
                </p>
                <p style={styles.description}>
                    The <code style={styles.code}>useState</code> hook is the most common 
                    way to add state to functional components in React.
                </p>
            </section>

            {/* Navigation Cards Section */}
            <section style={styles.cardsContainer}>
                <h2 style={styles.sectionTitle}>Start Learning</h2>
                <p style={styles.description}>
                    Click on any card below to explore that topic in detail
                </p>

                {/* Card 1: Number State */}
                <div style={styles.card}>
                    <div style={styles.cardIcon}>🔢</div>
                    <h3 style={styles.cardTitle}>1. Number State</h3>
                    <p style={styles.cardDescription}>
                        Learn how to use useState with numbers to create counters, 
                        quantities, and numeric displays.
                    </p>
                    <Link to="/number" style={styles.cardLink}>
                        Explore Number State →
                    </Link>
                </div>

                {/* Card 2: Input State */}
                <div style={styles.card}>
                    <div style={styles.cardIcon}>✏️</div>
                    <h3 style={styles.cardTitle}>2. Input State</h3>
                    <p style={styles.cardDescription}>
                        Learn how to use useState with strings to handle text input, 
                        form fields, and user names.
                    </p>
                    <Link to="/input" style={styles.cardLink}>
                        Explore Input State →
                    </Link>
                </div>

                {/* Card 3: Toggle State */}
                <div style={styles.card}>
                    <div style={styles.cardIcon}>✅</div>
                    <h3 style={styles.cardTitle}>3. Toggle State</h3>
                    <p style={styles.cardDescription}>
                        Learn how to use useState with booleans to create switches, 
                        toggles, and on/off functionality.
                    </p>
                    <Link to="/toggle" style={styles.cardLink}>
                        Explore Toggle State →
                    </Link>
                </div>

                {/* Card 4: Form State */}
                <div style={styles.card}>
                    <div style={styles.cardIcon}>📝</div>
                    <h3 style={styles.cardTitle}>4. Form State</h3>
                    <p style={styles.cardDescription}>
                        Learn how to use useState with arrays to manage multiple 
                        form fields and data collection.
                    </p>
                    <Link to="/form" style={styles.cardLink}>
                        Explore Form State →
                    </Link>
                </div>

                {/* Card 5: Menu Demo */}
                <div style={styles.card}>
                    <div style={styles.cardIcon}>🍔</div>
                    <h3 style={styles.cardTitle}>5. Hamburger Menu</h3>
                    <p style={styles.cardDescription}>
                        See all 4 state types working together in a real-world 
                        hamburger menu component!
                    </p>
                    <Link to="/menu" style={styles.cardLink}>
                        Explore Menu Demo →
                    </Link>
                </div>

                {/* Card 6: Services */}
                <div style={styles.card}>
                    <div style={styles.cardIcon}>🛠️</div>
                    <h3 style={styles.cardTitle}>6. Services</h3>
                    <p style={styles.cardDescription}>
                        Learn about the services we offer and how React can be 
                        used to build service-based applications.
                    </p>
                    <Link to="/services" style={styles.cardLink}>
                        View Services →
                    </Link>
                </div>

                {/* Card 7: Contact */}
                <div style={styles.card}>
                    <div style={styles.cardIcon}>📧</div>
                    <h3 style={styles.cardTitle}>7. Contact</h3>
                    <p style={styles.cardDescription}>
                        Get in touch with us! This page demonstrates a contact 
                        form using React state management.
                    </p>
                    <Link to="/contact" style={styles.cardLink}>
                        Contact Us →
                    </Link>
                </div>
            </section>

            {/* Quick Tips Section */}
            <section style={styles.tips}>
                <h2 style={styles.sectionTitle}>💡 Quick Tips for Beginners</h2>
                <ul style={styles.tipsList}>
                    <li><strong>State</strong> is data that changes over time in your app</li>
                    <li><strong>useState</strong> is a function that lets you add state to components</li>
                    <li>State changes cause React to <strong>re-render</strong> the component</li>
                    <li>Each state variable holds <strong>one piece of data</strong></li>
                    <li>Use the <strong>setter function</strong> to update state, never modify it directly</li>
                </ul>
            </section>
        </div>
    );
}

/**
 * Styles object - Contains all CSS-in-JS styles for the component
 * This makes the component self-contained and easy to copy-paste
 */
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
    },
    header: {
        textAlign: 'center',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '10px',
        marginBottom: '30px',
    },
    title: {
        fontSize: '2.5rem',
        margin: '0 0 10px 0',
    },
    subtitle: {
        fontSize: '1.2rem',
        opacity: 0.9,
    },
    intro: {
        background: '#f8f9fa',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '30px',
    },
    sectionTitle: {
        color: '#333',
        marginBottom: '15px',
    },
    description: {
        color: '#666',
        marginBottom: '15px',
        fontSize: '1rem',
    },
    code: {
        background: '#e9ecef',
        padding: '2px 6px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        color: '#d63384',
    },
    cardsContainer: {
        marginBottom: '30px',
    },
    card: {
        background: 'white',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '15px',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
    },
    cardIcon: {
        fontSize: '2rem',
        marginBottom: '10px',
    },
    cardTitle: {
        margin: '0 0 10px 0',
        color: '#333',
    },
    cardDescription: {
        color: '#666',
        marginBottom: '15px',
    },
    cardLink: {
        display: 'inline-block',
        padding: '10px 20px',
        background: '#667eea',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
    },
    tips: {
        background: '#fff3cd',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '30px',
    },
    tipsList: {
        paddingLeft: '20px',
        color: '#666',
    },
};

export default HomePage;
