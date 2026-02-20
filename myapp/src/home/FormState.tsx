/**
 * FormState Component
 * 
 * This component demonstrates how to use React's useState hook with ARRAY values.
 * 
 * WHAT IS FORM STATE?
 * Form state is used when you need to track:
 * - Multiple form fields
 * - List of items
 * - Todo lists
 * - Shopping carts
 * - User selections
 * 
 * LEARNING OBJECTIVES:
 * 1. How to initialize state with an array
 * 2. How to add items to an array
 * 3. How to remove items from an array
 * 4. How to update array items
 * 
 * @author Beginner React Developer
 * @description Learn to use useState with arrays
 */

import { useState } from 'react';
import './style.css';

/**
 * FormState - Demonstrates useState with array values
 * 
 * This component shows:
 * - A simple todo list
 * - Add/remove/update operations
 */
function FormState() {
    // ============================================
    // STATE DECLARATION
    // ============================================
    // useState<string[]> - This tells TypeScript our state is an array of strings
    // useState([]) - Initial value is an empty array
    
    // Example 1: Todo list
    const [todos, setTodos] = useState<string[]>([
        'Learn React',
        'Build a project',
        'Deploy to production'
    ]);
    
    const [newItem, setNewItem] = useState<string>('');

    // ============================================
    // EVENT HANDLERS - TODO LIST
    // ============================================
    
    /**
     * addTodo - Adds a new item to the todo list
     * 
     * IMPORTANT: We use [...todos, newItem] to create a new array
     * Never modify the array directly like todos.push()
     */
    const addTodo = () => {
        if (newItem.trim()) {
            setTodos([...todos, newItem]);
            setNewItem('');
        }
    };

    /**
     * removeTodo - Removes an item from the todo list
     * We filter out the item at the given index
     */
    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };



    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">📝 Form State Example</h1>
                <p className="subtitle">
                    Learn how to use useState with arrays
                </p>
            </header>

            {/* Explanation Section */}
            <section className="explanation">
                <h2 className="sectionTitle">What is Form State?</h2>
                <p className="text">
                    <strong>Form state</strong> is used to store arrays of data in your component.
                    It's perfect for todo lists, form fields, shopping carts, or any collection of items.
                </p>
                <div className="codeBlock">
                    <code className="code">
                        {`const [todos, setTodos] = useState<string[]>([]);`}
                    </code>
                </div>
                <p className="text">
                    The <code className="code">useState&lt;string[]&gt;</code> tells TypeScript 
                    this state will hold an array of strings.
                </p>
            </section>

            {/* Interactive Demo - Todo List */}
            <section className="demo">
                <h2 className="sectionTitle">Todo List Demo</h2>
                
                {/* Add new todo */}
                <div className="inputGroup">
                    <label className="label">Add a new todo:</label>
                    <div className="inputRow">
                        <input
                            type="text"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            placeholder="Enter todo..."
                            className="input"
                            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                        />
                        <button onClick={addTodo} className="button buttonPrimary">
                            ➕ Add
                        </button>
                    </div>
                </div>

                {/* Display todos */}
                <div className="todoList">
                    <h3 className="listTitle">Your Todos ({todos.length})</h3>
                    {todos.length === 0 ? (
                        <p className="emptyMessage">No todos yet! Add one above.</p>
                    ) : (
                        <ul className="list">
                            {todos.map((todo, index) => (
                                <li key={index} className="listItem">
                                    <span className="todoText">{todo}</span>
                                    <div className="todoActions">
                                        <button 
                                            onClick={() => removeTodo(index)}
                                            className="button buttonSmall buttonDanger"
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="howItWorks">
                <h2 className="sectionTitle">How It Works</h2>
                
                <div className="step">
                    <h3 className="stepTitle">Step 1: Declare State</h3>
                    <pre className="pre">
{`// Empty array
const [items, setItems] = useState<string[]>([]);

// Array with initial values
const [todos, setTodos] = useState<string[]>([
    'Learn React',
    'Build a project'
]);`}
                    </pre>
                    <p className="text">
                        Use <code className="code">useState&lt;string[]&gt;</code> for an array of strings.
                        You can initialize with values or start empty.
                    </p>
                </div>

                <div className="step">
                    <h3 className="stepTitle">Step 2: Add Items</h3>
                    <pre className="pre">
{`// Use spread operator to add to array:
const addItem = (newItem) => {
    setItems([...items, newItem]);
};

// Never do: items.push(newItem) - this mutates state!`}
                    </pre>
                    <p className="text">
                        Always use the spread operator <code className="code">[...array, newItem]</code> 
                        to create a new array. Never modify the array directly!
                    </p>
                </div>

                <div className="step">
                    <h3 className="stepTitle">Step 3: Remove Items</h3>
                    <pre className="pre">
{`// Use filter to remove items:
const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
};`}
                    </pre>
                    <p className="text">
                        The <code className="code">filter</code> method creates a new array 
                        excluding the item at the given index.
                    </p>
                </div>

                <div className="step">
                    <h3 className="stepTitle">Step 4: Update Items</h3>
                    <pre className="pre">
{`// Copy, modify, then set:
const updateItem = (index, newValue) => {
    const updated = [...items];
    updated[index] = newValue;
    setItems(updated);
};`}
                    </pre>
                    <p className="text">
                        Create a copy of the array, modify the specific item, 
                        then use the setter to update state.
                    </p>
                </div>
            </section>

            {/* Key Points */}
            <section className="keyPoints">
                <h2 className="sectionTitle">📝 Key Points to Remember</h2>
                <ul className="list">
                    <li>Use <code className="code">useState&lt;string[]&gt;</code> for arrays</li>
                    <li>Use spread operator <code className="code">[...arr, item]</code> to add</li>
                    <li>Use <code className="code">filter()</code> to remove items</li>
                    <li>Use <code className="code">map()</code> to render lists</li>
                    <li>Always create new arrays, never mutate directly</li>
                    <li>Include a unique <code className="code">key</code> prop when mapping</li>
                </ul>
            </section>
        </div>
    );
}

export default FormState;
