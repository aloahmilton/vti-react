/**
 * Navigation constants restructured for Multi-subject Platform
 */

export interface PageInfo {
    name: string;
    path: string;
    icon: string;
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
            { name: 'Git Basics', path: '/github/basics', icon: 'Code' },
            { name: 'Repositories', path: '/github/repos', icon: 'Box' },
            { name: 'Collaboration', path: '/github/collab', icon: 'Target' }
        ]
    },
    {
        id: 'react',
        name: 'React',
        icon: 'Code',
        pages: [
            { name: 'Number State', path: '/react/number', icon: 'Hash' },
            { name: 'Input State', path: '/react/input', icon: 'Type' },
            { name: 'Toggle State', path: '/react/toggle', icon: 'ToggleLeft' },
            { name: 'Form State', path: '/react/form', icon: 'ClipboardList' },
            { name: 'Navbar & Menu Links', path: '/react/navbar', icon: 'Menu' },
            { name: 'Props', path: '/react/props', icon: 'Share2' },
            { name: 'useEffect', path: '/react/useeffect', icon: 'Repeat' },
            { name: 'useState Deep Dive', path: '/react/usestate', icon: 'Layers' },
            { name: 'React Guide', path: '/react/guide', icon: 'BookOpen' },
            { name: 'Router Guide', path: '/react/router', icon: 'Compass' }
        ]
    },
    {
        id: 'html',
        name: 'HTML',
        icon: 'FileCode',
        pages: [
            { name: 'Structure', path: '/html/structure', icon: 'Layout' },
            { name: 'Forms', path: '/html/forms', icon: 'Input' },
            { name: 'Semantic HTML', path: '/html/semantic', icon: 'Tags' }
        ]
    },
    {
        id: 'css',
        name: 'CSS',
        icon: 'Palette',
        pages: [
            { name: 'Flexbox', path: '/css/flexbox', icon: 'Box' },
            { name: 'Grid', path: '/css/grid', icon: 'Grid' },
            { name: 'Animations', path: '/css/animations', icon: 'Zap' }
        ]
    },
    {
        id: 'js',
        name: 'JavaScript',
        icon: 'SquarePlay',
        pages: [
            { name: 'Variables', path: '/js/variables', icon: 'Variable' },
            { name: 'Functions', path: '/js/functions', icon: 'FunctionSquare' },
            { name: 'DOM Manipulation', path: '/js/dom', icon: 'MousePointer2' },
            { name: 'Async / Await', path: '/js/async', icon: 'Timer' },
            { name: 'Fetch API', path: '/js/fetch', icon: 'Globe' },
            { name: 'ES6 Modules', path: '/js/modules', icon: 'Package' }
        ]
    }
];

// Keep the flat pages array for routing logic if needed, or update routing to be dynamic
export const pages: PageInfo[] = [
    { name: 'Home', path: '/', icon: 'Home' },
    ...courses.flatMap(c => c.pages),
    { name: 'Services', path: '/services', icon: 'Settings' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
];
