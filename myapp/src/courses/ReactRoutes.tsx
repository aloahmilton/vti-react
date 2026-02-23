import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';
import NumberState from '../lessons/react/NumberState';
import InputState from '../lessons/react/InputState';
import ToggleState from '../lessons/react/ToggleState';
import FormState from '../lessons/react/FormState';
import NavbarLesson from '../lessons/react/NavbarLesson';
import ReactFunctionsGuide from '../lessons/react/ReactFunctionsGuide';
import ReactRouterGuide from '../lessons/react/ReactRouterGuide';

export const ReactRoutes = () => (
    <>
        <Route path="/react/number" element={<NumberState />} />
        <Route path="/react/input" element={<InputState />} />
        <Route path="/react/toggle" element={<ToggleState />} />
        <Route path="/react/form" element={<FormState />} />
        <Route path="/react/navbar" element={<NavbarLesson />} />

        <Route path="/react/props" element={<GenericLesson
            title="🎁 Props" subject="React" path="/react/props"
            difficulty="Beginner"
            prevPath="/react/navbar" prevLabel="Navbar & Menu Links"
            nextPath="/react/useeffect" nextLabel="useEffect"
            content="Props (properties) pass data from parent to child components. They are read-only — children never modify them. Think of props as function arguments: the parent calls the child with data, and the child renders based on that data."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '📦', title: 'Props', desc: 'Data passed downward from parent to child.' },
                { icon: '🔒', title: 'Read-Only', desc: 'Never mutate props — use state for mutable values.' },
                { icon: '👶', title: 'children prop', desc: 'Content between JSX tags becomes the children prop.' },
            ]}
            codeExamples={[
                { label: 'Basic Props', language: 'javascript', code: '// Parent passes data\nfunction App() {\n  return <UserCard name="Aloah" role="Instructor" />;\n}\n\n// Child reads props\nfunction UserCard({ name, role }) {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>{role}</p>\n    </div>\n  );\n}' },
                { label: 'children prop', language: 'javascript', code: 'function Card({ title, children }) {\n  return (\n    <div style={{ border: "1px solid #ccc", borderRadius: 12, padding: 20 }}>\n      <h2>{title}</h2>\n      {children}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Card title="My Card">\n      <p>This paragraph is the children prop!</p>\n    </Card>\n  );\n}' },
            ]}
            quizQuestion="What are props in React?"
            quizOptions={["Mutable component state", "Data passed from parent to child", "CSS styles", "Event handlers"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/react/useeffect" element={<GenericLesson
            title="⚡ useEffect" subject="React" path="/react/useeffect"
            difficulty="Intermediate"
            prevPath="/react/props" prevLabel="Props"
            nextPath="/react/usestate" nextLabel="useState Deep Dive"
            content="useEffect runs side effects after a component renders — like fetching data, timers, or DOM updates. The dependency array controls when it re-runs: [] means once on mount, [val] means when val changes, omitted means every render."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🔄', title: 'Runs after render', desc: 'useEffect fires after React paints the screen.' },
                { icon: '📋', title: 'Dependency array', desc: '[] = once. [val] = on change. Nothing = every render.' },
                { icon: '🧹', title: 'Cleanup', desc: 'Return a function to clear timers and subscriptions.' },
            ]}
            codeExamples={[
                { label: 'Fetch on Mount', language: 'javascript', code: 'import { useState, useEffect } from "react";\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/users")\n      .then(res => res.json())\n      .then(data => { setUsers(data); setLoading(false); });\n  }, []);  // Empty array = run once on mount\n\n  if (loading) return <p>Loading...</p>;\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}' },
                { label: 'Watch a Value', language: 'javascript', code: 'import { useState, useEffect } from "react";\n\nfunction SearchBox({ query }) {\n  const [results, setResults] = useState([]);\n\n  useEffect(() => {\n    if (!query) return;\n    const timer = setTimeout(() => {\n      // Re-runs every time query changes\n      fetch(`/api/search?q=${query}`)\n        .then(r => r.json()).then(setResults);\n    }, 300);\n    // Cleanup: clear timer if query changes\n    return () => clearTimeout(timer);\n  }, [query]);\n\n  return <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>;\n}' },
                { label: 'Cleanup Timer', language: 'javascript', code: 'import { useState, useEffect } from "react";\n\nfunction Clock() {\n  const [time, setTime] = useState(new Date());\n\n  useEffect(() => {\n    const interval = setInterval(() => setTime(new Date()), 1000);\n    // Cleanup: stop interval when component unmounts\n    return () => clearInterval(interval);\n  }, []);\n\n  return <p>Time: {time.toLocaleTimeString()}</p>;\n}' },
            ]}
            quizQuestion="What does an empty dependency array [] in useEffect mean?"
            quizOptions={["Run on every render", "Never run", "Run once after mount", "Run before render"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/react/usestate" element={<GenericLesson
            title="🧠 useState Deep Dive" subject="React" path="/react/usestate"
            difficulty="Intermediate"
            prevPath="/react/useeffect" prevLabel="useEffect"
            nextPath="/react/guide" nextLabel="React Guide"
            content="useState is React's most fundamental hook. It stores values that change over time. Each setState call triggers a re-render. Key concepts: functional updates (use prev => to be safe), object state (always spread!), and state batching."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '📸', title: 'Snapshot', desc: 'State is frozen per render — reads always return the current value.' },
                { icon: '🔁', title: 'Functional update', desc: 'setState(prev => prev + 1) is safe when relying on previous state.' },
                { icon: '⚛️', title: 'Object state', desc: 'Spread old state to update objects: {...prev, key: val}.' },
            ]}
            codeExamples={[
                { label: 'Functional Update', language: 'javascript', code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  // SAFE: always uses the actual latest value\n  const increment = () => setCount(prev => prev + 1);\n\n  // Triple increment — only works with functional form!\n  const triple = () => {\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>+1</button>\n      <button onClick={triple}>+3</button>\n    </div>\n  );\n}' },
                { label: 'Object State', language: 'javascript', code: 'import { useState } from "react";\n\nfunction ProfileForm() {\n  const [profile, setProfile] = useState({\n    name: "",\n    email: "",\n    role: "student"\n  });\n\n  const update = (field, value) => {\n    // ALWAYS spread old state when updating objects\n    setProfile(prev => ({ ...prev, [field]: value }));\n  };\n\n  return (\n    <>\n      <input value={profile.name} onChange={e => update("name", e.target.value)} />\n      <input value={profile.email} onChange={e => update("email", e.target.value)} />\n      <pre>{JSON.stringify(profile, null, 2)}</pre>\n    </>\n  );\n}' },
            ]}
            quizQuestion="When should you use setState(prev => ...) instead of setState(newValue)?"
            quizOptions={["Always", "When the new state depends on previous state", "Only with arrays", "Never"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/react/guide" element={<ReactFunctionsGuide />} />
        <Route path="/react/router" element={<ReactRouterGuide />} />
    </>
);
