import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../components/useProgress';
import { courses } from './constants';
import { ChevronRight, LogOut, User, BookOpen, Award } from 'lucide-react';
import './style.css';

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const { completedLessons, getProgressPercentage } = useProgress();

    const totalLessons = courses.reduce((sum, c) => sum + c.pages.length, 0);
    const overallPct = Math.round((completedLessons.length / totalLessons) * 100);

    return (
        <div className="container" style={{ maxWidth: 760 }}>
            {/* Breadcrumb */}
            <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 24, display: 'flex', gap: 6, alignItems: 'center' }}>
                <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dashboard</Link>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>My Profile</span>
            </nav>

            {/* Avatar + Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40, padding: '32px 28px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20 }}>
                <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: '#000', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                    <User size={40} />
                </div>
                <div style={{ flex: 1 }}>
                    <h1 style={{ margin: '0 0 4px', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        {user?.name ?? 'Guest'}
                    </h1>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>{user?.email ?? '—'}</p>
                </div>
                <button
                    onClick={logout}
                    style={{
                        display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
                        borderRadius: 10, border: '1px solid var(--border)', background: 'transparent',
                        cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)'
                    }}
                >
                    <LogOut size={16} /> Sign Out
                </button>
            </div>

            {/* XP / Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 40 }}>
                {[
                    { icon: <BookOpen size={22} />, label: 'Completed', value: completedLessons.length },
                    { icon: <Award size={22} />, label: 'Total Lessons', value: totalLessons },
                    { icon: <span style={{ fontSize: '1.3rem' }}>🏆</span>, label: 'Overall', value: `${overallPct}%` },
                ].map(s => (
                    <div key={s.label} style={{ padding: '20px 18px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ color: 'var(--text-muted)' }}>{s.icon}</div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Per-course progress */}
            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: 20 }}>Course Progress</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {courses.map(course => {
                        const pct = getProgressPercentage(course.pages.length);
                        return (
                            <div key={course.id} style={{ padding: '16px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
                                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{course.name}</span>
                                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>{pct}%</span>
                                </div>
                                <div style={{ height: 6, background: 'var(--border)', borderRadius: 99 }}>
                                    <div style={{ height: '100%', width: `${pct}%`, background: pct === 100 ? '#16a34a' : '#000', borderRadius: 99, transition: 'width 0.4s' }} />
                                </div>
                                {pct === 100 && <p style={{ marginTop: 8, fontSize: '0.8rem', color: '#16a34a', fontWeight: 700 }}>✓ Completed!</p>}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
