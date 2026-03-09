import { useState } from 'react';
import Editor from '@monaco-editor/react';
import './CodeEditor.css';

interface CodeEditorProps {
    /** Initial code to show in the editor */
    defaultCode?: string;
    /** Language for syntax highlighting */
    language?: string;
    /** Height of the editor panel */
    height?: string;
    /** Whether to show the live preview panel */
    showPreview?: boolean;
    /** Title shown in the editor header */
    title?: string;
}

/**
 * CodeEditor — Reusable in-browser Monaco editor.
 * Embed it in any lesson: <CodeEditor defaultCode={...} language="typescript" />
 */
export default function CodeEditor({
    defaultCode = '// Start coding here\n',
    language = 'typescript',
    height = '320px',
    showPreview = false,
    title = 'Code Playground',
}: CodeEditorProps) {
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState('');
    const [copied, setCopied] = useState(false);

    const runCode = () => {
        try {
            // eslint-disable-next-line no-new-func
            const result = new Function(code)();
            setOutput(String(result ?? 'Code ran successfully ✓'));
        } catch (err: unknown) {
            setOutput(`Error: ${err instanceof Error ? err.message : String(err)}`);
        }
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    const resetCode = () => setCode(defaultCode);

    return (
        <div className="ce-wrapper">
            {/* Header */}
            <div className="ce-header">
                <div className="ce-header-left">
                    <span className="ce-dot red" />
                    <span className="ce-dot yellow" />
                    <span className="ce-dot green" />
                    <span className="ce-title">{title}</span>
                </div>
                <div className="ce-header-right">
                    <span className="ce-lang-badge">{language}</span>
                    <button className="ce-btn" onClick={copyCode}>
                        {copied ? '✓ Copied' : '⎘ Copy'}
                    </button>
                    <button className="ce-btn" onClick={resetCode}>↺ Reset</button>
                    {language === 'javascript' && (
                        <button className="ce-btn ce-btn-run" onClick={runCode}>▶ Run</button>
                    )}
                </div>
            </div>

            {/* Editor */}
            <div className="ce-editor-pane">
                <Editor
                    height={height}
                    language={language}
                    value={code}
                    onChange={(val) => setCode(val ?? '')}
                    theme="vs-dark"
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        scrollBeyondLastLine: false,
                        wordWrap: 'on',
                        automaticLayout: true,
                        padding: { top: 16, bottom: 16 },
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        fontLigatures: true,
                    }}
                />
            </div>

            {/* Output panel */}
            {(showPreview || output) && (
                <div className="ce-output-pane">
                    <div className="ce-output-label">Output</div>
                    <pre className="ce-output-text">{output || 'Click ▶ Run to see output…'}</pre>
                </div>
            )}
        </div>
    );
}
