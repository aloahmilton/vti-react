import { useState } from 'react';
import { Link } from 'react-router-dom';
import Quiz from './Quiz';
import { useProgress } from './useProgress';
import './style.css';

function FormState() {
    const [todos, setTodos] = useState<string[]>([
        'Learn React basics',
        'Master the useState hook'
    ]);
    const [newItem, setNewItem] = useState<string>('');
    const { markAsCompleted } = useProgress();

    const addTodo = () => {
        if (newItem.trim()) {
            setTodos([...todos, newItem]);
            setNewItem('');
        }
    };

    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">📝 Form State</h1>
                <p className="subtitle">Manage lists and collections in React</p>
            </header>

            {/* Simplified Explanation */}
            <section className="intro">
                <h2 className="sectionTitle">The Concept</h2>
                <p className="description">
                    Form state often involves <strong>arrays.</strong> In React, we never mutate arrays directly. We use the <strong>spread operator [...]</strong> to create a new copy.
                </p>
                <div className="codeBlock">
                    <code className="code">
                        {`// Correct way to add an item:
setItems([...items, newItem]);`}
                    </code>
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="demo">
                <h2 className="sectionTitle">Interactive Sandbox</h2>

                <div className="inputGroup">
                    <label className="label">Add to your learning list:</label>
                    <div className="inputRow" style={{ display: 'flex', gap: '10px' }}>
                        <input
                            type="text"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            placeholder="e.g. Hooks, Context API..."
                            className="input"
                            style={{ flex: 1 }}
                            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                        />
                        <button onClick={addTodo} className="button buttonPrimary">Add</button>
                    </div>
                </div>

                <div className="todoList">
                    <h3 className="listTitle">Your Items ({todos.length})</h3>
                    <ul className="list">
                        {todos.map((todo, index) => (
                            <li key={index} className="listItem">
                                <span className="todoText">{todo}</span>
                                <button onClick={() => removeTodo(index)} className="button buttonSmall buttonDanger">🗑️</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Quiz Section */}
            <Quiz
                question="How should you add an item to an array in React state?"
                options={[
                    "items.push(newItem)",
                    "setItems([...items, newItem])",
                    "items[items.length] = newItem",
                    "setItems(items.add(newItem))"
                ]}
                correctAnswer={1}
                onComplete={() => markAsCompleted('/form')}
            />

            {/* Navigation */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/toggle" className="button">← Prev: Toggle State</Link>
                <Link to="/services" className="button buttonPrimary">Next: Services & Pricing →</Link>
            </div>
        </div>
    );
}

export default FormState;
