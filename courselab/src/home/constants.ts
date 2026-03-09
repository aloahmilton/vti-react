/**
 * Navigation constants — Full Curriculum Platform
 */

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface PageInfo {
    name: string;
    path: string;
    icon: string;
    difficulty: Difficulty;
}

export interface Course {
    id: string;
    name: string;
    icon: string;
    pages: PageInfo[];
}

export const CONTACT_INFO = {
    whatsapp: '675405180',
    email: 'aloahmilton9@gmail.com'
};

export const courses: Course[] = [
    {
        id: 'github',
        name: 'GitHub',
        icon: 'Github',
        pages: [
            { name: 'Git Basics', path: '/github/basics', icon: 'Settings', difficulty: 'Beginner' },
            { name: 'Repositories', path: '/github/repos', icon: 'Globe', difficulty: 'Beginner' },
            { name: 'Commits & History', path: '/github/commits', icon: 'History', difficulty: 'Beginner' },
            { name: 'Branch Management', path: '/github/branches', icon: 'GitBranch', difficulty: 'Intermediate' },
            { name: 'Professional Workflow', path: '/github/workflow', icon: 'Shuffle', difficulty: 'Intermediate' },
            { name: 'Pull Requests', path: '/github/pr', icon: 'GitPullRequest', difficulty: 'Intermediate' },
            { name: 'Collaboration', path: '/github/collab', icon: 'Users', difficulty: 'Intermediate' },
            { name: 'GitHub Actions (CI/CD)', path: '/github/actions', icon: 'Zap', difficulty: 'Advanced' },
            { name: 'GitHub Pages', path: '/github/pages', icon: 'Monitor', difficulty: 'Intermediate' },
            { name: 'Advanced Workflows', path: '/github/workflows', icon: 'Layers', difficulty: 'Advanced' },
            { name: 'Security & Best Practices', path: '/github/security', icon: 'ShieldCheck', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'html',
        name: 'HTML',
        icon: 'FileCode',
        pages: [
            { name: 'Structure', path: '/html/structure', icon: 'Layout', difficulty: 'Beginner' },
            { name: 'Text & Headings', path: '/html/text', icon: 'Type', difficulty: 'Beginner' },
            { name: 'Links & Images', path: '/html/links', icon: 'Link', difficulty: 'Beginner' },
            { name: 'Lists', path: '/html/lists', icon: 'List', difficulty: 'Beginner' },
            { name: 'Tables', path: '/html/tables', icon: 'Table', difficulty: 'Intermediate' },
            { name: 'Forms', path: '/html/forms', icon: 'ClipboardList', difficulty: 'Intermediate' },
            { name: 'Semantic HTML', path: '/html/semantic', icon: 'Tags', difficulty: 'Intermediate' },
            { name: 'Meta & SEO', path: '/html/meta', icon: 'Search', difficulty: 'Advanced' },
            { name: 'Accessibility', path: '/html/accessibility', icon: 'Eye', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'css',
        name: 'CSS',
        icon: 'Palette',
        pages: [
            { name: 'Selectors', path: '/css/selectors', icon: 'Target', difficulty: 'Beginner' },
            { name: 'Box Model', path: '/css/boxmodel', icon: 'Square', difficulty: 'Beginner' },
            { name: 'Colors & Gradients', path: '/css/colors', icon: 'Palette', difficulty: 'Beginner' },
            { name: 'Typography', path: '/css/typography', icon: 'Type', difficulty: 'Beginner' },
            { name: 'Positioning', path: '/css/positioning', icon: 'Move', difficulty: 'Intermediate' },
            { name: 'Flexbox', path: '/css/flexbox', icon: 'AlignCenter', difficulty: 'Intermediate' },
            { name: 'Grid', path: '/css/grid', icon: 'Grid', difficulty: 'Intermediate' },
            { name: 'Animations', path: '/css/animations', icon: 'Zap', difficulty: 'Advanced' },
            { name: 'Responsive Design', path: '/css/responsive', icon: 'Monitor', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'js',
        name: 'JavaScript',
        icon: 'SquarePlay',
        pages: [
            { name: 'Variables & Types', path: '/js/variables', icon: 'Variable', difficulty: 'Beginner' },
            { name: 'Functions', path: '/js/functions', icon: 'FunctionSquare', difficulty: 'Beginner' },
            { name: 'Arrays', path: '/js/arrays', icon: 'List', difficulty: 'Beginner' },
            { name: 'Objects', path: '/js/objects', icon: 'Box', difficulty: 'Beginner' },
            { name: 'DOM Manipulation', path: '/js/dom', icon: 'MousePointer2', difficulty: 'Intermediate' },
            { name: 'Events', path: '/js/events', icon: 'Zap', difficulty: 'Intermediate' },
            { name: 'Error Handling', path: '/js/errors', icon: 'AlertTriangle', difficulty: 'Intermediate' },
            { name: 'Async / Await', path: '/js/async', icon: 'Timer', difficulty: 'Advanced' },
            { name: 'Fetch API', path: '/js/fetch', icon: 'Globe', difficulty: 'Advanced' },
            { name: 'ES6 Modules', path: '/js/modules', icon: 'Package', difficulty: 'Intermediate' },
            { name: 'Classes & OOP', path: '/js/classes', icon: 'Layers', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'react',
        name: 'React',
        icon: 'Code',
        pages: [
            { name: 'React Guide', path: '/react/guide', icon: 'BookOpen', difficulty: 'Beginner' },
            { name: 'Number State', path: '/react/number', icon: 'Hash', difficulty: 'Beginner' },
            { name: 'Input State', path: '/react/input', icon: 'Type', difficulty: 'Beginner' },
            { name: 'Toggle State', path: '/react/toggle', icon: 'ToggleLeft', difficulty: 'Beginner' },
            { name: 'Form State', path: '/react/form', icon: 'ClipboardList', difficulty: 'Intermediate' },
            { name: 'Navbar & Menu Links', path: '/react/navbar', icon: 'Menu', difficulty: 'Intermediate' },
            { name: 'Props', path: '/react/props', icon: 'Share2', difficulty: 'Beginner' },
            { name: 'useEffect', path: '/react/useeffect', icon: 'Repeat', difficulty: 'Intermediate' },
            { name: 'useState Deep Dive', path: '/react/usestate', icon: 'Layers', difficulty: 'Intermediate' },
            { name: 'Router Guide', path: '/react/router', icon: 'Compass', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'php',
        name: 'PHP',
        icon: 'Server',
        pages: [
            { name: 'PHP Basics', path: '/php/basics', icon: 'Code', difficulty: 'Beginner' },
            { name: 'Variables & Types', path: '/php/variables', icon: 'Variable', difficulty: 'Beginner' },
            { name: 'Arrays', path: '/php/arrays', icon: 'List', difficulty: 'Beginner' },
            { name: 'Functions', path: '/php/functions', icon: 'FunctionSquare', difficulty: 'Beginner' },
            { name: 'OOP & Classes', path: '/php/oop', icon: 'Layers', difficulty: 'Intermediate' },
            { name: 'Forms & POST', path: '/php/forms', icon: 'ClipboardList', difficulty: 'Intermediate' },
            { name: 'Sessions & Cookies', path: '/php/sessions', icon: 'Cookie', difficulty: 'Intermediate' },
            { name: 'File Handling', path: '/php/files', icon: 'FileCode', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'mysql',
        name: 'MySQL',
        icon: 'Database',
        pages: [
            { name: 'Introduction to SQL', path: '/mysql/intro', icon: 'BookOpen', difficulty: 'Beginner' },
            { name: 'SELECT Queries', path: '/mysql/select', icon: 'Search', difficulty: 'Beginner' },
            { name: 'INSERT, UPDATE, DELETE', path: '/mysql/crud', icon: 'Edit', difficulty: 'Beginner' },
            { name: 'WHERE & Filtering', path: '/mysql/where', icon: 'Filter', difficulty: 'Intermediate' },
            { name: 'JOINs', path: '/mysql/joins', icon: 'Link', difficulty: 'Intermediate' },
            { name: 'Indexes', path: '/mysql/indexes', icon: 'Zap', difficulty: 'Advanced' },
            { name: 'MySQL with PHP', path: '/mysql/php', icon: 'Server', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'project',
        name: 'E-commerce Project',
        icon: 'Package',
        pages: [
            { name: 'Overview', path: '/project/overview', icon: 'Layout', difficulty: 'Intermediate' },
            { name: 'Backend Setup', path: '/project/backend', icon: 'Server', difficulty: 'Intermediate' },
            { name: 'Product Database', path: '/project/data', icon: 'Database', difficulty: 'Beginner' },
            { name: 'Routing & API', path: '/project/api', icon: 'Link2', difficulty: 'Intermediate' },
            { name: 'Frontend App', path: '/project/app', icon: 'Code', difficulty: 'Intermediate' },
            { name: 'Core Components', path: '/project/components', icon: 'Layers', difficulty: 'Intermediate' },
            { name: 'Fapshi Payments', path: '/project/payment', icon: 'Zap', difficulty: 'Advanced' }
        ]
    },
    {
        id: 'howto',
        name: 'React How-To Guides',
        icon: 'BookOpen',
        pages: [
            { name: 'Simple Menu', path: '/howto/menu', icon: 'Menu', difficulty: 'Beginner' },
            { name: 'Home Page', path: '/howto/home', icon: 'Layout', difficulty: 'Beginner' },
            { name: 'Footer', path: '/howto/footer', icon: 'Box', difficulty: 'Beginner' },
            { name: 'Side Bar', path: '/howto/sidebar', icon: 'Layout', difficulty: 'Intermediate' },
            { name: 'Dark Mode Switcher', path: '/howto/darkmode', icon: 'Zap', difficulty: 'Intermediate' },
            { name: 'Search Bar', path: '/howto/search', icon: 'Search', difficulty: 'Beginner' }
        ]
    }
];

export const pages: PageInfo[] = [
    { name: 'Home', path: '/', icon: 'Home', difficulty: 'Beginner' },
    ...courses.flatMap(c => c.pages),
    { name: 'Services', path: '/services', icon: 'Settings', difficulty: 'Beginner' },
    { name: 'Contact', path: '/contact', icon: 'Mail', difficulty: 'Beginner' }
];
