/**
 * React Router Guide
 * Educational page explaining react-router-dom routing and navigation
 */

export default function ReactRouterGuide() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Router Navigation Guide</h1>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🗺️ What is React Router?</h2>
        <div style={styles.card}>
          <p>React Router is a library that enables navigation between different pages/components in a Single Page Application (SPA) without full page reloads.</p>
          <p><strong>Installation:</strong></p>
          <pre style={styles.code}>
{`npm install react-router-dom`}
          </pre>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🏗️ Basic Setup Structure</h2>
        
        <div style={styles.card}>
          <h3>Step 1: Wrap Your App with Router</h3>
          <p><strong>In main.tsx or index.tsx:</strong></p>
          <pre style={styles.code}>
{`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  &lt;Router&gt;
    &lt;App /&gt;
  &lt;/Router&gt;,
  document.getElementById('root')
);`}
          </pre>
          <p><strong>What it does:</strong> Router enables routing functionality for your entire app</p>
        </div>

        <div style={styles.card}>
          <h3>Step 2: Define Routes</h3>
          <p><strong>Inside your component:</strong></p>
          <pre style={styles.code}>
{`import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    &lt;div&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;HomePage /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;AboutPage /&gt;} /&gt;
        &lt;Route path="/contact" element={&lt;ContactPage /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/div&gt;
  );
}`}
          </pre>
          <p><strong>What it does:</strong></p>
          <ul>
            <li><code>path="/"</code> - The URL path</li>
            <li><code>{`element={<ComponentName />}`}</code> - The component to display</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🔗 Navigation Methods</h2>
        
        <div style={styles.card}>
          <h3>1. Link Component (Recommended for Navigation)</h3>
          <p><strong>Purpose:</strong> Navigate between routes without page reload</p>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
{`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}`}
          </pre>
          <p><strong>When to use:</strong> Regular navigation between pages</p>
          <p><strong>Why Link is better than <code>&lt;a&gt;</code>:</strong></p>
          <ul>
            <li>No page reload - smooth navigation</li>
            <li>Preserves component state</li>
            <li>Faster performance</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>2. useNavigate Hook (Programmatic Navigation)</h3>
          <p><strong>Purpose:</strong> Navigate programmatically (after form submission, button click, etc.)</p>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
{`import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Validate login...
    navigate('/dashboard'); // Go to /dashboard after login
  };
  
  return (
    &lt;button onClick={handleLogin}&gt;
      Login
    &lt;/button&gt;
  );
}`}
          </pre>
          <p><strong>When to use:</strong> After an action (form submit, button click, API call)</p>
          <p><strong>Advanced usage:</strong></p>
          <pre style={styles.code}>
{`// Go back to previous page
navigate(-1);

// Replace history (can't go back to this page)
navigate('/home', { replace: true });

// Pass state between pages
navigate('/details', { state: { data: user } });`}
          </pre>
        </div>

        <div style={styles.card}>
          <h3>3. NavLink Component (Active Styling)</h3>
          <p><strong>Purpose:</strong> Like Link, but automatically adds styles to active route</p>
          <p><strong>Syntax:</strong></p>
          <pre style={styles.code}>
{`import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    &lt;nav&gt;
      &lt;NavLink 
        to="/" 
        className={({ isActive }) =&gt; isActive ? 'link-active' : 'link'}
      &gt;
        Home
      &lt;/NavLink&gt;
      &lt;NavLink 
        to="/about"
        className={({ isActive }) =&gt; isActive ? 'link-active' : 'link'}
      &gt;
        About
      &lt;/NavLink&gt;
    &lt;/nav&gt;
  );
}`}
          </pre>
          <p><strong>CSS Example:</strong></p>
          <pre style={styles.code}>
{`.link {
  color: blue;
  text-decoration: none;
}

.link-active {
  color: red;
  font-weight: bold;
  border-bottom: 2px solid red;
}`}
          </pre>
          <p><strong>When to use:</strong> Navigation menus where you want to highlight the active page</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📍 Dynamic Routes & URL Parameters</h2>
        
        <div style={styles.card}>
          <h3>Route with Parameters</h3>
          <p><strong>Define the route with :paramName</strong></p>
          <pre style={styles.code}>
{`&lt;Routes&gt;
  &lt;Route path="/user/:id" element={&lt;UserProfile /&gt;} /&gt;
  &lt;Route path="/post/:postId/comment/:commentId" element={&lt;Comment /&gt;} /&gt;
&lt;/Routes&gt;`}
          </pre>
          <p><strong>Access parameters with useParams hook:</strong></p>
          <pre style={styles.code}>
{`import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  
  return <div>User ID: {id}</div>;
}`}
          </pre>
          <p><strong>Link to dynamic routes:</strong></p>
          <pre style={styles.code}>
{`&lt;Link to={'/user/123'}&gt;View User 123&lt;/Link&gt;
&lt;Link to={'/user/456'}&gt;View User 456&lt;/Link&gt;`}
          </pre>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📂 Common Routing Patterns</h2>
        
        <div style={styles.card}>
          <h3>Pattern 1: Simple Page Navigation</h3>
          <pre style={styles.code}>
{`function App() {
  return (
    &lt;div&gt;
      &lt;Navigation /&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
        &lt;Route path="/services" element={&lt;Services /&gt;} /&gt;
        &lt;Route path="/contact" element={&lt;Contact /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/div&gt;
  );
}

function Navigation() {
  return (
    &lt;nav style={{ marginBottom: '20px' }}&gt;
      &lt;Link to="/"&gt;Home&lt;/Link&gt; | 
      &lt;Link to="/about"&gt;About&lt;/Link&gt; | 
      &lt;Link to="/services"&gt;Services&lt;/Link&gt; | 
      &lt;Link to="/contact"&gt;Contact&lt;/Link&gt;
    &lt;/nav&gt;
  );
}`}
          </pre>
        </div>

        <div style={styles.card}>
          <h3>Pattern 2: Nested Routes</h3>
          <pre style={styles.code}>
{`&lt;Routes&gt;
  &lt;Route path="/" element={&lt;Layout /&gt;}&gt;
    &lt;Route index element={&lt;Home /&gt;} /&gt;
    &lt;Route path="about" element={&lt;About /&gt;} /&gt;
    &lt;Route path="contact" element={&lt;Contact /&gt;} /&gt;
  &lt;/Route&gt;
&lt;/Routes&gt;

function Layout() {
  return (
    &lt;div&gt;
      &lt;header&gt;Header&lt;/header&gt;
      &lt;Outlet /&gt; {/* Child routes render here */}
      &lt;footer&gt;Footer&lt;/footer&gt;
    &lt;/div&gt;
  );
}`}
          </pre>
        </div>

        <div style={styles.card}>
          <h3>Pattern 3: Conditional Navigation</h3>
          <pre style={styles.code}>
{`function ContactForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit form
    const response = await submitForm({ email });
    
    // Navigate based on result
    if (response.success) {
      navigate('/thank-you', { state: { email } });
    } else {
      alert('Error submitting form');
    }
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input 
        value={email} 
        onChange={(e) =&gt; setEmail(e.target.value)}
        placeholder="Enter email"
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}`}
          </pre>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🛠️ Useful Hooks</h2>
        
        <div style={styles.card}>
          <h3>useLocation - Get Current Route Info</h3>
          <pre style={styles.code}>
{`import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  return (
    <header>
      <p>Current Path: {location.pathname}</p>
      <p>Search: {location.search}</p>
    </header>
  );
}`}
          </pre>
        </div>

        <div style={styles.card}>
          <h3>useSearchParams - Handle Query Parameters</h3>
          <pre style={styles.code}>
{`import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  return (
    <div>
      <p>Searching for: {query}</p>
      {/* /search?q=react */}
    </div>
  );
}`}
          </pre>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📋 Complete Real-World Example</h2>
        
        <div style={styles.card}>
          <pre style={styles.code}>
{`// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Navigation.tsx
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ padding: '15px', backgroundColor: '#f0f0f0' }}>
      <NavLink to="/"  style={({ isActive }) => ({ 
        fontWeight: isActive ? 'bold' : 'normal',
        marginRight: '15px',
        color: isActive ? 'blue' : 'black'
      })}>
        Home
      </NavLink>
      <NavLink to="/product/1" style={({ isActive }) => ({ 
        fontWeight: isActive ? 'bold' : 'normal',
        marginRight: '15px',
        color: isActive ? 'blue' : 'black'
      })}>
        Products
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ 
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'blue' : 'black'
      })}>
        Contact
      </NavLink>
    </nav>
  );
}

// ProductPage.tsx
import { useParams, useNavigate } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => navigate('/')}>Back Home</button>
      <h1>Product #{id}</h1>
      <p>Product details here...</p>
    </div>
  );
}`}
          </pre>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>✅ Best Practices</h2>
        <ul style={styles.list}>
          <li><strong>Use Link for navigation:</strong> Faster, no page reload</li>
          <li><strong>Use useNavigate for programmatic navigation:</strong> After form submission or API calls</li>
          <li><strong>Use NavLink for navigation menus:</strong> Automatically highlights active routes</li>
          <li><strong>Use useParams for dynamic routes:</strong> Extract values from URLs</li>
          <li><strong>Always wrap your app with Router:</strong> Required for routing to work</li>
          <li><strong>Use nested routes for layout:</strong> Share header/footer across pages</li>
          <li><strong>Add a 404 route:</strong> Use path="*" as last route for undefined paths</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🔗 Quick Comparison Chart</h2>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th>Component/Hook</th>
              <th>Purpose</th>
              <th>When to Use</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;Link&gt;</td>
              <td>Navigate between routes</td>
              <td>Menu links, page navigation</td>
              <td>{`<Link to="/about">About</Link>`}</td>
            </tr>
            <tr>
              <td>&lt;NavLink&gt;</td>
              <td>Link with active styling</td>
              <td>Navigation menus</td>
              <td>{`<NavLink to="/">Home</NavLink>`}</td>
            </tr>
            <tr>
              <td>useNavigate()</td>
              <td>Programmatic navigation</td>
              <td>After form submit, button click</td>
              <td>{`navigate('/dashboard')`}</td>
            </tr>
            <tr>
              <td>useParams()</td>
              <td>Get URL parameters</td>
              <td>Dynamic routes</td>
              <td>{`const { id } = useParams()`}</td>
            </tr>
            <tr>
              <td>useLocation()</td>
              <td>Get current route info</td>
              <td>Analytics, conditional rendering</td>
              <td>{`const location = useLocation()`}</td>
            </tr>
          </tbody>
        </table>
      </section>
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
    color: '#28a745',
    textAlign: 'center' as const,
    marginBottom: '40px',
    borderBottom: '3px solid #28a745',
    paddingBottom: '15px'
  } as React.CSSProperties,
  section: {
    marginBottom: '40px'
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '24px',
    color: '#1e7e34',
    marginBottom: '20px',
    borderLeft: '4px solid #28a745',
    paddingLeft: '15px'
  } as React.CSSProperties,
  card: {
    backgroundColor: '#f0f8f4',
    border: '1px solid #c3e6cb',
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
    backgroundColor: '#f0f8f4',
    border: '1px solid #c3e6cb'
  } as React.CSSProperties,
  tableHeader: {
    backgroundColor: '#28a745',
    color: 'white'
  } as React.CSSProperties,
  list: {
    backgroundColor: '#f0f8f4',
    padding: '20px 40px',
    borderRadius: '8px',
    borderLeft: '4px solid #28a745'
  } as React.CSSProperties
};
