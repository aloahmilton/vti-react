import { Link } from 'react-router-dom';
import { Github, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './LandingPage.css';

/**
 * LandingPage - Pre-login entry point with Hero Section.
 * All styles live in LandingPage.css.
 */
function LandingPage() {
    const { t } = useTranslation();

    return (
        <div className="landing-page">
            {/* ---- Hero ---- */}
            <header className="landing-hero">
                <div className="landing-hero-inner">
                    <h1 className="landing-title">{t('landing.title')}</h1>
                    <p className="landing-subtitle">{t('landing.subtitle')}</p>

                    <div className="landing-cta-group">
                        <Link to="/dashboard" className="landing-cta-primary">
                            {t('landing.start_cta')} <ChevronRight size={20} />
                        </Link>
                        <a
                            href="https://github.com/aloahmilton"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="landing-cta-secondary"
                        >
                            <Github size={24} /> {t('landing.repository')}
                        </a>
                    </div>
                </div>
            </header>

            {/* ---- Feature / CTA Section ---- */}
            <section className="landing-features">
                <h2 className="landing-features-title">Ready to Scale Your Skills?</h2>
                <p className="landing-features-text">
                    Join hundreds of developers mastering the craft with Aloah Milton.
                    Professional coaching available 24/7.
                </p>
                <Link to="/coaching" className="landing-coaching-cta">
                    Get Personal Coaching
                </Link>
            </section>
        </div>
    );
}

export default LandingPage;
