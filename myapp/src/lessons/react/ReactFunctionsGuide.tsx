import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { useSettings } from "../../contexts/SettingsContext";
import "../../home/style.css";

export default function ReactFunctionsGuide() {
  const { t } = useTranslation();
  const { voiceAccent, setVoiceAccent, availableVoices } = useSettings();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToSpeak = `${t('common.overview')}: React Functions and Brackets Guide. This guide covers arrow functions, curly braces, square brackets, and parentheses in React development.`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      if (voiceAccent !== 'default') {
        const selectedVoice = availableVoices.find(v => v.voiceURI === voiceAccent);
        if (selectedVoice) utterance.voice = selectedVoice;
      }
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="container">
      {/* Page Header */}
      <header className="header" style={{ padding: '0 0 40px 0', borderBottom: '1px solid var(--border)', background: 'transparent' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 className="title" style={{ fontSize: '3rem', color: 'var(--text-main)', margin: 0 }}>🧀 React & Brackets</h1>
            <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Pro Guide</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
            <div className="voiceSelector">
              <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>
                {t('voice.select_voice')}
              </label>
              <select
                value={voiceAccent}
                onChange={(e) => setVoiceAccent(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  fontSize: '0.9rem',
                  backgroundColor: '#fff',
                  maxWidth: '200px'
                }}
              >
                <option value="default">{t('voice.nigeria')}</option>
                {availableVoices.map(voice => (
                  <option key={voice.voiceURI} value={voice.voiceURI}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>

            <button
              className={`voiceButton ${isSpeaking ? 'active' : ''}`}
              onClick={toggleSpeech}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                borderRadius: '14px',
                backgroundColor: isSpeaking ? '#ef4444' : 'var(--primary)',
                color: 'white',
                border: 'none',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'var(--transition)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {isSpeaking ? <VolumeX size={22} /> : <Volume2 size={22} />}
              {isSpeaking ? t('voice.stop') : t('voice.speak')}
            </button>
          </div>
        </div>
      </header>

      <section className="section" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '40px' }}>
        <h2 className="sectionTitle" style={{ fontSize: '2rem', fontWeight: '800' }}>📌 React Function Types</h2>

        <div style={styles.card}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>1. Arrow Functions (Recommended) ➡️</h3>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
            {`const MyComponent = () => {
  return <h1>Hello World</h1>;
};`}
          </pre>
          <p><strong>When to use:</strong> Most common in modern React. Use for components, event handlers, and hooks.</p>
          <p><strong>Benefits:</strong> Concise, binds 'this' automatically, easier to read</p>
        </div>

        <div style={styles.card}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>2. Regular Functions</h3>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
            {`function MyComponent() {
  return <h1>Hello World</h1>;
}`}
          </pre>
          <p><strong>When to use:</strong> Can be used, but arrow functions are preferred</p>
          <p><strong>Note:</strong> Requires explicit 'return' statement</p>
        </div>
      </section>

      {/* Navigation */}
      <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/dashboard" className="button" style={{
          padding: '14px 28px',
          borderRadius: '12px',
          textDecoration: 'none',
          color: 'var(--text-muted)',
          fontWeight: '700',
          fontSize: '1.1rem'
        }}>← {t('common.back')} {t('common.dashboard')}</Link>
        <Link to="/react/number" className="button buttonPrimary" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '18px 40px',
          borderRadius: '16px',
          backgroundColor: 'var(--primary)',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '800',
          fontSize: '1.2rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          Next: Number State <BookOpen size={24} />
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  } as React.CSSProperties,
  title: {
    fontSize: '32px',
    color: '#007bff',
    textAlign: 'center' as const,
    marginBottom: '40px',
    borderBottom: '3px solid #007bff',
    paddingBottom: '15px'
  } as React.CSSProperties,
  section: {
    marginBottom: '40px'
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '24px',
    color: '#0056b3',
    marginBottom: '20px',
    borderLeft: '4px solid #0056b3',
    paddingLeft: '15px'
  } as React.CSSProperties,
  card: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '15px'
  } as React.CSSProperties,
  code: {
    backgroundColor: '#2d2d2d',
    color: '#f8f8f2',
    padding: '15px',
    borderRadius: '6px',
    overflow: 'auto' as const,
    fontSize: '13px',
    lineHeight: '1.4',
    fontFamily: 'Courier New, monospace'
  } as React.CSSProperties,
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6'
  } as React.CSSProperties,
  tableHeader: {
    backgroundColor: '#007bff',
    color: 'white'
  } as React.CSSProperties,
  list: {
    backgroundColor: '#f0f7ff',
    padding: '20px 40px',
    borderRadius: '8px',
    borderLeft: '4px solid #007bff'
  } as React.CSSProperties
};
