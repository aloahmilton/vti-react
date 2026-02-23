import { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "../../components/Quiz";
import { useProgress } from "../../components/useProgress";
import { useTranslation } from "react-i18next";
import { useSettings } from "../../contexts/SettingsContext";
import { Volume2, VolumeX } from "lucide-react";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import "../../home/style.css";
import "../../home/Lesson.css";

function NumberState() {
  const [number, setNumber] = useState<number>(0);
  const { markAsCompleted } = useProgress();
  const { t } = useTranslation();
  const { voiceAccent, setVoiceAccent, availableVoices } = useSettings();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const increment = () => setNumber(number + 1);
  const decrement = () => number > 0 && setNumber(number - 1);
  const reset = () => setNumber(0);

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToSpeak = `${t('common.overview')}: ${t('common.number_state', { defaultValue: 'Number State' })}. ${t('voice.speak')}`;
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
            <h1 className="title" style={{ fontSize: '3rem', color: 'var(--text-main)', margin: 0 }}>🔢 Number State</h1>
            <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>React Module</p>
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

      {/* Simplified Explanation */}
      <section className="intro">
        <h2 className="sectionTitle">The Concept</h2>
        <p className="description">
          Number state is for everything numeric: <strong>counters, prices, scores,</strong> or any data that needs math.
        </p>
        <div className="codeBlock">
          <code className="code">
            {`const [count, setCount] = useState(0);`}
          </code>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="demo">
        <h2 className="sectionTitle">Interactive Sandbox</h2>
        <div className="display">
          <span className="displayLabel">Current Value:</span>
          <span className="displayValue">{number}</span>
        </div>

        <div className="buttonGroup">
          <button onClick={decrement} className="button" disabled={number === 0}>➖ Decrease</button>
          <button onClick={increment} className="button buttonPrimary">➕ Increase</button>
          <button onClick={reset} className="button buttonReset">🔄 Reset</button>
        </div>
      </section>

      {/* ---- Code Playground ---- */}
      <section className="demo">
        <h2 className="sectionTitle">Try It Yourself</h2>
        <p className="description">Edit and run the counter logic below — it works like the demo above!</p>
        <CodeEditor
          title="number-state.tsx"
          language="javascript"
          height="200px"
          showPreview
          defaultCode={`// Try changing the initial value or increment amount!\nlet count = 0;\nconst increment = () => count + 1;\nconst decrement = () => Math.max(0, count - 1);\n\n// This returns the new count on increment:\nincrement();`}
        />
      </section>

      {/* Quiz Section */}
      <Quiz
        question="Which function is used to update the 'number' state in this lesson?"
        options={["number = 5", "setNumber(5)", "update(number, 5)", "useState(5)"]}
        correctAnswer={1}
        onComplete={() => markAsCompleted('/react/number')}
      />

      {/* Navigation */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/dashboard" className="button">← Back to Dashboard</Link>
        <Link to="/react/input" className="button buttonPrimary">Next Lesson: Input State →</Link>
      </div>
    </div>
  );
}

export default NumberState;
