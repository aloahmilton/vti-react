import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';

/**
 * LoginPage
 * Handles both Login and Register in one view using tabs.
 * After success, navigates to /dashboard or the intended protected page.
 */
export default function LoginPage() {
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const [tab, setTab] = useState<'login' | 'register'>('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            let ok = false;
            if (tab === 'login') {
                ok = await login(email, password);
            } else {
                ok = await register(name, email, password);
            }

            if (ok) {
                navigate('/dashboard');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                {/* Back link */}
                <Link to="/" className="auth-back-link">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                {/* Logo */}
                <div className="auth-logo">
                    <h1>Aloah Milton</h1>
                    <p>
                        {tab === 'login'
                            ? 'Welcome back! Sign in to continue.'
                            : 'Create your free account to get started.'}
                    </p>
                </div>

                {/* Tabs */}
                <div className="auth-tabs">
                    <button
                        className={`auth-tab ${tab === 'login' ? 'active' : ''}`}
                        onClick={() => { setTab('login'); setError(''); }}
                    >
                        Sign In
                    </button>
                    <button
                        className={`auth-tab ${tab === 'register' ? 'active' : ''}`}
                        onClick={() => { setTab('register'); setError(''); }}
                    >
                        Create Account
                    </button>
                </div>

                {/* Form */}
                <form className="auth-form" onSubmit={handleSubmit}>
                    {tab === 'register' && (
                        <div className="auth-field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div className="auth-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>

                    {error && <div className="auth-error">{error}</div>}

                    <button
                        type="submit"
                        className="auth-submit-btn"
                        disabled={loading}
                    >
                        {loading
                            ? 'Please wait…'
                            : tab === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <p className="auth-footer-text">
                    {tab === 'login'
                        ? <>No account? <button className="auth-tab" onClick={() => setTab('register')}>Create one</button></>
                        : <>Already have an account? <button className="auth-tab" onClick={() => setTab('login')}>Sign in</button></>}
                </p>
            </div>
        </div>
    );
}
