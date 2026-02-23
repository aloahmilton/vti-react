import { Link } from 'react-router-dom';
import { Lock, Star, Video, MessageCircle, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Coaching.css';

/**
 * CoachingPage
 * Shows coaching details publicly but gates the "Book a Session" action behind auth.
 */
export default function CoachingPage() {
    const { isAuthenticated, user } = useAuth();

    const plans = [
        {
            id: 'starter',
            name: 'Starter',
            price: '$49',
            period: '/ session',
            features: ['1 hr session', 'Code review', 'Q&A', 'Recording'],
            icon: '🌱',
            highlight: false,
        },
        {
            id: 'pro',
            name: 'Pro Coaching',
            price: '$149',
            period: '/ month',
            features: ['4 sessions/mo', 'Priority support', 'Project mentorship', 'Career advice', 'Private Discord'],
            icon: '⚡',
            highlight: true,
        },
        {
            id: 'team',
            name: 'Team',
            price: '$399',
            period: '/ month',
            features: ['Up to 5 members', '8 sessions/mo', 'Group workshops', 'Custom roadmaps'],
            icon: '🏢',
            highlight: false,
        },
    ];

    return (
        <div className="coaching-page container">
            {/* Hero */}
            <header className="coaching-hero">
                <div className="coaching-badge">
                    <Star size={14} /> Personal Coaching
                </div>
                <h1 className="coaching-title">Level up with 1-on-1 mentorship</h1>
                <p className="coaching-subtitle">
                    Work directly with an experienced engineer and fast-track your career growth.
                </p>
            </header>

            {/* Features */}
            <section className="coaching-features">
                {[
                    { icon: <Video size={24} />, title: 'Live Sessions', desc: 'Real-time screen share and coding sessions.' },
                    { icon: <MessageCircle size={24} />, title: 'Async Support', desc: 'Get answers via chat between sessions.' },
                    { icon: <Star size={24} />, title: 'Personalized Plan', desc: 'Custom learning roadmap for your goals.' },
                ].map(f => (
                    <div className="coaching-feature-card" key={f.title}>
                        <div className="coaching-feature-icon">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </section>

            {/* Pricing */}
            <section className="coaching-pricing">
                <h2>Choose Your Plan</h2>
                <div className="coaching-plans">
                    {plans.map(plan => (
                        <div key={plan.id} className={`coaching-plan-card ${plan.highlight ? 'highlighted' : ''}`}>
                            {plan.highlight && <div className="coaching-plan-badge">Most Popular</div>}
                            <div className="coaching-plan-icon">{plan.icon}</div>
                            <h3 className="coaching-plan-name">{plan.name}</h3>
                            <div className="coaching-plan-price">
                                <span className="price-amount">{plan.price}</span>
                                <span className="price-period">{plan.period}</span>
                            </div>
                            <ul className="coaching-plan-features">
                                {plan.features.map(f => (
                                    <li key={f}><ChevronRight size={14} /> {f}</li>
                                ))}
                            </ul>

                            {/* CTA — gated behind auth */}
                            {isAuthenticated ? (
                                <Link
                                    to={`/contact?plan=${plan.id}&user=${user?.email}`}
                                    className="coaching-plan-btn"
                                >
                                    Book Now
                                </Link>
                            ) : (
                                <Link to="/login" className="coaching-plan-btn locked">
                                    <Lock size={14} /> Sign in to Book
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
