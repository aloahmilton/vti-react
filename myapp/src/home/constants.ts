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

export const courses: Course[] = [
    {
        id: 'react',
        name: 'React',
        icon: 'Code',
        pages: [
            { name: 'Number State', path: '/number', icon: 'Hash' },
            { name: 'Input State', path: '/input', icon: 'Type' },
            { name: 'Toggle State', path: '/toggle', icon: 'ToggleLeft' },
            { name: 'Form State', path: '/form', icon: 'ClipboardList' },
            { name: 'React Guide', path: '/react-guide', icon: 'BookOpen' },
            { name: 'Router Guide', path: '/router-guide', icon: 'Compass' }
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
            { name: 'DOM Manipulation', path: '/js/dom', icon: 'MousePointer2' }
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
