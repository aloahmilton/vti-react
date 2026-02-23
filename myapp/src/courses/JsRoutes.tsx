import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const JsRoutes = () => (
    <>
        <Route path="/js/variables" element={<GenericLesson
            title="📦 Variables" subject="JavaScript" path="/js/variables"
            difficulty="Beginner"
            nextPath="/js/functions" nextLabel="Functions"
            content="In modern JavaScript there are three ways to declare variables: var (old, avoid), let (block-scoped, can change), and const (block-scoped, cannot be reassigned). Prefer const by default."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🔒', title: 'const', desc: "Cannot be reassigned. Best for values that don't change." },
                { icon: '🔄', title: 'let', desc: 'Block-scoped. Use when the value will change.' },
                { icon: '⚠️', title: 'var', desc: 'Function-scoped, hoisted — avoid in modern code.' },
            ]}
            codeExamples={[
                { label: 'const vs let', language: 'javascript', code: `// const — value cannot change\nconst PI = 3.14159;\nconst name = 'Aloah';\n\n// let — can be reassigned\nlet score = 0;\nscore = score + 10;\n\n// Destructuring\nconst { x, y } = { x: 1, y: 2 };\nconst [first, ...rest] = [1, 2, 3, 4];\n\n// Return score:\nscore;` },
            ]}
            quizQuestion="Which keyword declares a variable that cannot be reassigned?"
            quizOptions={["let", "var", "const", "fixed"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/js/functions" element={<GenericLesson
            title="⚡ Functions" subject="JavaScript" path="/js/functions"
            difficulty="Beginner"
            prevPath="/js/variables" prevLabel="Variables"
            nextPath="/js/arrays" nextLabel="Arrays"
            content="Functions are reusable blocks of code. Modern JS prefers arrow functions for their concise syntax and lexical this binding. Higher-order functions like map, filter, and reduce make data transformation elegant."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '➡️', title: 'Arrow Function', desc: 'const fn = () => {}. Concise, lexical this.' },
                { icon: '🔁', title: '.map()', desc: 'Transforms each item in an array, returns new array.' },
                { icon: '🔍', title: '.filter()', desc: 'Returns items that pass a test function.' },
            ]}
            codeExamples={[
                { label: 'Arrow Functions', language: 'javascript', code: `const greet = (name) => \`Hello, \${name}!\`;\nconst double = x => x * 2;\nconst power = (base, exp = 2) => base ** exp;\n\ngreet('Aloah');` },
                { label: 'Array Methods', language: 'javascript', code: `const nums = [1, 2, 3, 4, 5, 6];\n\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);\nconst total = nums.reduce((acc, n) => acc + n, 0);\n\nJSON.stringify({ doubled, evens, total });` },
            ]}
            quizQuestion="How do you write an arrow function?"
            quizOptions={["function() => {}", "const x = () => {}", "arrow function x()", "x = function =>"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/js/arrays" element={<GenericLesson
            title="🗃️ Arrays" subject="JavaScript" path="/js/arrays"
            difficulty="Beginner"
            prevPath="/js/functions" prevLabel="Functions"
            nextPath="/js/objects" nextLabel="Objects"
            content="Arrays store ordered lists of values. JavaScript arrays are dynamic — they can hold any type and grow/shrink at any time. The array methods map, filter, reduce, and find are the most powerful tools in any JS developer's toolkit."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🗃️', title: 'Array', desc: 'Ordered list of values. Access by index: arr[0].' },
                { icon: '🗺️', title: '.map()', desc: 'Transform every item — returns a new array.' },
                { icon: '🔍', title: '.filter()', desc: 'Keep only items matching a condition.' },
            ]}
            codeExamples={[
                { label: 'Core Methods', language: 'javascript', code: 'const scores = [85, 90, 45, 78, 60, 95];\n\n// map — transform every item\nconst grades = scores.map(s => s >= 60 ? "Pass" : "Fail");\n// ["Pass","Pass","Fail","Pass","Pass","Pass"]\n\n// filter — keep matching items\nconst passing = scores.filter(s => s >= 60);\n// [85, 90, 78, 60, 95]\n\n// find — first matching item\nconst firstFail = scores.find(s => s < 60);\n// 45\n\n// reduce — aggregate to single value\nconst total = scores.reduce((sum, s) => sum + s, 0);\nconst avg = total / scores.length;\n// avg = 75.5\n\n// includes\nscores.includes(90); // true' },
                { label: 'Mutation Methods', language: 'javascript', code: 'const fruits = ["apple", "banana"];\n\n// Add / remove\nfruits.push("cherry");    // end: ["apple","banana","cherry"]\nfruits.pop();             // remove last: ["apple","banana"]\nfruits.unshift("mango");  // start: ["mango","apple","banana"]\nfruits.shift();           // remove first: ["apple","banana"]\n\n// Sort\n[3,1,4,1,5].sort((a, b) => a - b); // [1,1,3,4,5]\n\n// Spread\nconst merged = [...fruits, "grape", "kiwi"];\n\n// Destructuring\nconst [first, second, ...rest] = merged;' },
            ]}
            quizQuestion="Which array method transforms every element and returns a new array?"
            quizOptions={[".filter()", ".reduce()", ".map()", ".find()"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/js/objects" element={<GenericLesson
            title="🗂️ Objects" subject="JavaScript" path="/js/objects"
            difficulty="Beginner"
            prevPath="/js/arrays" prevLabel="Arrays"
            nextPath="/js/dom" nextLabel="DOM Manipulation"
            content="Objects are key-value pairs that group related data and behaviour. They are the core data structure in JavaScript — everything from DOM nodes to API responses is an object. Modern JS gives you destructuring, spread, and shorthand syntax."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🗝️', title: 'Properties', desc: 'Named values: obj.key or obj["key"].' },
                { icon: '🔓', title: 'Destructuring', desc: 'const { name, age } = person — pull out specific keys.' },
                { icon: '📋', title: 'Spread', desc: '{ ...obj, newKey: val } — copy and extend an object.' },
            ]}
            codeExamples={[
                { label: 'Object Basics', language: 'javascript', code: '// Creating objects\nconst user = {\n  name: "Aloah Milton",\n  email: "aloahmilton9@gmail.com",\n  role: "instructor",\n  // Method shorthand\n  greet() {\n    return `Hello, I am ${this.name}`;\n  }\n};\n\n// Reading\nconsole.log(user.name);         // dot notation\nconsole.log(user["email"]);     // bracket notation\n\n// Destructuring\nconst { name, role } = user;\n\n// Spread + update\nconst updated = { ...user, role: "admin" };\n\n// Dynamic keys\nconst field = "email";\nconsole.log(user[field]);\n\n// Check if key exists\n"name" in user; // true' },
                { label: 'Object Methods', language: 'javascript', code: 'const user = { name: "Aloah", age: 30, role: "dev" };\n\n// Keys, values, entries\nObject.keys(user);    // ["name","age","role"]\nObject.values(user);  // ["Aloah", 30, "dev"]\nObject.entries(user); // [["name","Aloah"],["age",30],...]\n\n// Merge objects\nconst merged = Object.assign({}, user, { age: 31 });\n// Or: const merged = { ...user, age: 31 };\n\n// Freeze (prevent mutation)\nconst SETTINGS = Object.freeze({ theme: "dark" });' },
            ]}
            quizQuestion="What does destructuring { name, age } = person do?"
            quizOptions={["Creates a new object", "Extracts name and age from person", "Deletes those keys", "Copies the whole object"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/js/dom" element={<GenericLesson
            title="🌐 DOM Manipulation" subject="JavaScript" path="/js/dom"
            difficulty="Intermediate"
            prevPath="/js/objects" prevLabel="Objects"
            nextPath="/js/events" nextLabel="Events"
            content="The DOM (Document Object Model) is a tree of objects representing your HTML. JavaScript can read, modify, add, and remove DOM elements dynamically — making pages interactive without reloads."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🔎', title: 'Querying', desc: 'getElementById, querySelector find elements.' },
                { icon: '✍️', title: 'Modifying', desc: 'Change textContent, innerHTML, style, classList.' },
                { icon: '👂', title: 'Events', desc: 'addEventListener lets you respond to user actions.' },
            ]}
            codeExamples={[
                { label: 'Query & Modify', language: 'javascript', code: `const btn = document.getElementById('myBtn');\nconst card = document.querySelector('.card');\n\ncard.textContent = 'Updated!';\ncard.style.background = '#000';\ncard.classList.add('active');\n\nconst el = document.createElement('p');\nel.textContent = 'New paragraph';\ndocument.body.appendChild(el);` },
                { label: 'Events', language: 'javascript', code: `const button = document.querySelector('button');\n\nbutton.addEventListener('click', (e) => {\n  button.textContent = 'Clicked!';\n});\n\ndocument.addEventListener('keydown', (e) => {\n  console.log('Key:', e.key);\n});` },
            ]}
            quizQuestion="Which method selects an element by its ID?"
            quizOptions={["getElement()", "select('#id')", "getElementById()", "findId()"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/js/events" element={<GenericLesson
            title="⚡ Events" subject="JavaScript" path="/js/events"
            difficulty="Intermediate"
            prevPath="/js/dom" prevLabel="DOM Manipulation"
            nextPath="/js/errors" nextLabel="Error Handling"
            content="Events let JavaScript respond to user actions — clicks, key presses, form submissions, scroll, resize, and more. addEventListener is the modern way to attach event handlers. Event delegation makes handling many elements efficient."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '👆', title: 'addEventListener', desc: 'Attach a handler to any DOM event without overwriting.' },
                { icon: '🎯', title: 'Event object', desc: 'The event argument gives you target, key, coordinates, etc.' },
                { icon: '🔼', title: 'Event delegation', desc: 'Listen on a parent — handle children efficiently.' },
            ]}
            codeExamples={[
                { label: 'Common Events', language: 'javascript', code: 'const btn = document.querySelector("#submit-btn");\n\n// Click\nbtn.addEventListener("click", (e) => {\n  console.log("Clicked!", e.target);\n});\n\n// Keyboard\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") closeModal();\n  if (e.ctrlKey && e.key === "s") saveFile();\n});\n\n// Form submit (prevent reload)\nconst form = document.querySelector("form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const data = new FormData(form);\n  console.log(Object.fromEntries(data));\n});\n\n// Scroll\nwindow.addEventListener("scroll", () => {\n  if (window.scrollY > 100) header.classList.add("sticky");\n});' },
                { label: 'Event Delegation', language: 'javascript', code: '// Instead of attaching to each button...\nconst list = document.querySelector(".todo-list");\n\nlist.addEventListener("click", (e) => {\n  // Check which child was clicked\n  if (e.target.matches(".delete-btn")) {\n    e.target.closest("li").remove();\n  }\n  if (e.target.matches(".complete-btn")) {\n    e.target.closest("li").classList.toggle("done");\n  }\n});' },
            ]}
            quizQuestion="What does e.preventDefault() do in a form submit handler?"
            quizOptions={["Deletes the form", "Stops the page from reloading", "Prevents typing", "Clears the form"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/js/errors" element={<GenericLesson
            title="🚨 Error Handling" subject="JavaScript" path="/js/errors"
            difficulty="Intermediate"
            prevPath="/js/events" prevLabel="Events"
            nextPath="/js/async" nextLabel="Async / Await"
            content="Errors are unavoidable — how you handle them defines your app's reliability. try/catch blocks catch runtime errors. Custom Error classes make errors more informative. Window onerror and Promise rejection handlers catch unhandled errors globally."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🛡️', title: 'try/catch', desc: 'Wraps risky code. catch(e) receives the error object.' },
                { icon: '🏗️', title: 'Custom Errors', desc: 'Extend Error class to create domain-specific error types.' },
                { icon: '🌐', title: 'Global handlers', desc: 'window.onerror and unhandledrejection catch missed errors.' },
            ]}
            codeExamples={[
                { label: 'try/catch/finally', language: 'javascript', code: 'async function fetchUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) {\n      throw new Error(`HTTP ${res.status}: ${res.statusText}`);\n    }\n    return await res.json();\n  } catch (err) {\n    if (err instanceof TypeError) {\n      console.error("Network error:", err.message);\n    } else {\n      console.error("API error:", err.message);\n    }\n    return null;\n  } finally {\n    // Always runs — cleanup, hide loading spinner\n    setLoading(false);\n  }\n}' },
                { label: 'Custom Error', language: 'javascript', code: 'class ValidationError extends Error {\n  constructor(field, message) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\nfunction validateEmail(email) {\n  if (!email.includes("@")) {\n    throw new ValidationError("email", "Invalid email address");\n  }\n}\n\ntry {\n  validateEmail("notanemail");\n} catch (err) {\n  if (err instanceof ValidationError) {\n    console.error(`Field "${err.field}": ${err.message}`);\n  }\n}' },
            ]}
            quizQuestion="What does the 'finally' block in try/catch do?"
            quizOptions={["Only runs on error", "Only runs on success", "Always runs, regardless of outcome", "Re-throws the error"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/js/async" element={<GenericLesson
            title="⏳ Async / Await" subject="JavaScript" path="/js/async"
            difficulty="Advanced"
            prevPath="/js/errors" prevLabel="Error Handling"
            nextPath="/js/fetch" nextLabel="Fetch API"
            content="async/await is the modern way to handle asynchronous operations. It makes Promise-based code readable — like synchronous code. Mark a function async, then await any Promise inside it. Errors are caught with try/catch."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🔮', title: 'async', desc: 'Marks a function as asynchronous — it always returns a Promise.' },
                { icon: '⏸️', title: 'await', desc: 'Pauses execution until a Promise resolves. Only works inside async.' },
                { icon: '🚨', title: 'try/catch', desc: 'Wrap await calls to handle errors without crashing the app.' },
            ]}
            codeExamples={[
                { label: 'async/await basics', language: 'javascript', code: '// Old way — callback chains\nfunction getUser() {\n  return fetch("/api/user")\n    .then(res => res.json())\n    .then(data => console.log(data))\n    .catch(err => console.error(err));\n}\n\n// Modern way — reads top to bottom\nasync function getUser() {\n  try {\n    const res = await fetch("/api/user");\n    const data = await res.json();\n    console.log(data);\n    return data;\n  } catch (err) {\n    console.error("Failed:", err);\n  }\n}' },
                { label: 'Parallel requests', language: 'javascript', code: '// Run multiple requests at the same time\nasync function getDashboardData() {\n  try {\n    // Both fire simultaneously — faster than sequential!\n    const [users, posts] = await Promise.all([\n      fetch("/api/users").then(r => r.json()),\n      fetch("/api/posts").then(r => r.json()),\n    ]);\n    return { users, posts };\n  } catch (err) {\n    console.error("One request failed:", err);\n  }\n}\n\ngetDashboardData().then(console.log);' },
            ]}
            quizQuestion="What does 'await' do inside an async function?"
            quizOptions={["Delays code by 1 second", "Pauses execution until the Promise resolves", "Creates a new Promise", "Runs code in parallel"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/js/fetch" element={<GenericLesson
            title="🌐 Fetch API" subject="JavaScript" path="/js/fetch"
            difficulty="Advanced"
            prevPath="/js/async" prevLabel="Async / Await"
            nextPath="/js/modules" nextLabel="ES6 Modules"
            content="The Fetch API is built into every modern browser for making HTTP requests. It returns Promises, works perfectly with async/await, and replaces old XMLHttpRequest. Combined with useEffect in React, it's the standard way to load data."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '📡', title: 'GET request', desc: 'Default — fetches data from a URL, returns a Promise.' },
                { icon: '📬', title: 'POST request', desc: 'Sends data with method: POST and a JSON body.' },
                { icon: '🔁', title: 'res.json()', desc: 'Always call this to read the response body as JSON.' },
            ]}
            codeExamples={[
                { label: 'GET request', language: 'javascript', code: 'async function getPosts() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/posts");\n\n  if (!res.ok) throw new Error("Request failed");\n\n  const posts = await res.json();\n  console.log(posts[0]);\n  return posts;\n}\n\ngetPosts();' },
                { label: 'POST request', language: 'javascript', code: 'async function createPost(title, body) {\n  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n      "Authorization": "Bearer TOKEN"\n    },\n    body: JSON.stringify({ title, body, userId: 1 })\n  });\n\n  const newPost = await res.json();\n  console.log("Created:", newPost);\n  return newPost;\n}\n\ncreatePost("Hello World", "My first post");' },
                { label: 'In React (useEffect)', language: 'javascript', code: 'import { useState, useEffect } from "react";\n\nfunction Posts() {\n  const [posts, setPosts] = useState([]);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    async function load() {\n      try {\n        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");\n        const data = await res.json();\n        setPosts(data);\n      } catch (err) {\n        setError(err.message);\n      }\n    }\n    load();\n  }, []);\n\n  if (error) return <p>Error: {error}</p>;\n  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;\n}' },
            ]}
            quizQuestion="Why do you call res.json() after fetch()?"
            quizOptions={["To convert XML", "To read the response body as JSON", "To check response status", "To retry the request"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/js/modules" element={<GenericLesson
            title="📦 ES6 Modules" subject="JavaScript" path="/js/modules"
            difficulty="Intermediate"
            prevPath="/js/fetch" prevLabel="Fetch API"
            nextPath="/js/classes" nextLabel="Classes & OOP"
            content="ES6 modules let you split code across multiple files. export makes values available, import pulls them in. Every React component file uses this system — understanding it makes you a better developer."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '📤', title: 'export', desc: 'Makes a value available for other files to import.' },
                { icon: '📥', title: 'import', desc: 'Pulls in a value from another module by file path.' },
                { icon: '⭐', title: 'default export', desc: 'One per file — imported without curly braces.' },
            ]}
            codeExamples={[
                { label: 'Named Exports', language: 'javascript', code: '// math.js\nexport const PI = 3.14159;\nexport function add(a, b) { return a + b; }\nexport function multiply(a, b) { return a * b; }\n\n// app.js\nimport { PI, add, multiply } from "./math.js";\n\nconsole.log(add(2, 3));      // 5\nconsole.log(multiply(4, 5)); // 20' },
                { label: 'Default Export', language: 'javascript', code: '// Button.jsx — one default export per file\nexport default function Button({ label, onClick }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n\n// App.jsx — import without curly braces\nimport Button from "./Button";\nimport MyBtn from "./Button"; // Can rename freely\n\nfunction App() {\n  return <Button label="Click me" onClick={() => alert("Hi!")} />;\n}' },
                { label: 'Barrel File', language: 'javascript', code: '// components/index.js — re-export everything\nexport { default as Button } from "./Button";\nexport { default as Card } from "./Card";\nexport { default as Modal } from "./Modal";\n\n// App.jsx — clean single import\nimport { Button, Card, Modal } from "./components";\n// Instead of:\n// import Button from "./components/Button";\n// import Card from "./components/Card";' },
            ]}
            quizQuestion="How do you import a default export?"
            quizOptions={["import { Button } from './Button'", "import Button from './Button'", "import * from './Button'", "require('./Button')"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/js/classes" element={<GenericLesson
            title="🏛️ Classes & OOP" subject="JavaScript" path="/js/classes"
            difficulty="Advanced"
            prevPath="/js/modules" prevLabel="ES6 Modules"
            content="ES6 Classes provide a clean syntax for object-oriented programming. A class is a blueprint; instances are the objects. Inheritance with extends lets you build on existing classes. JS classes are syntactic sugar over prototypes."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🏛️', title: 'class', desc: 'Blueprint for creating objects with shared properties and methods.' },
                { icon: '🧬', title: 'extends', desc: 'Inheritance — child class gets all parent methods.' },
                { icon: '#', title: 'Private fields', desc: '#field syntax keeps properties truly private.' },
            ]}
            codeExamples={[
                { label: 'Class Basics', language: 'javascript', code: 'class Animal {\n  #sound;  // private field\n\n  constructor(name, sound) {\n    this.name = name;\n    this.#sound = sound;\n  }\n\n  speak() {\n    return `${this.name} says ${this.#sound}!`;\n  }\n\n  static create(name, sound) {\n    return new Animal(name, sound);\n  }\n}\n\nconst dog = new Animal("Rex", "woof");\nconsole.log(dog.speak()); // "Rex says woof!"' },
                { label: 'Inheritance', language: 'javascript', code: 'class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} makes a sound.`; }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);  // call parent constructor\n    this.breed = breed;\n  }\n\n  speak() {\n    return `${this.name} barks!`;\n  }\n\n  fetch() {\n    return `${this.name} fetches the ball!`;\n  }\n}\n\nconst rex = new Dog("Rex", "Labrador");\nrex.speak();   // "Rex barks!"\nrex.fetch();   // "Rex fetches the ball!"\nrex instanceof Animal; // true' },
            ]}
            quizQuestion="What keyword calls the parent class constructor in a child class?"
            quizOptions={["this()", "parent()", "super()", "extend()"]}
            quizCorrectAnswer={2}
        />} />
    </>
);
