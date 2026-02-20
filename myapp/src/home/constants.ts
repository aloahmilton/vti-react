/**
 * Navigation constants
 */

export interface PageInfo {
    name: string;
    path: string;
    icon: string;
}

export const pages: PageInfo[] = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Number State', path: '/number', icon: '🔢' },
    { name: 'Input State', path: '/input', icon: '✏️' },
    { name: 'Toggle State', path: '/toggle', icon: '✅' },
    { name: 'Form State', path: '/form', icon: '📝' },
    { name: 'Services', path: '/services', icon: '🛠️' },
    { name: 'Contact', path: '/contact', icon: '📧' },
    { name: 'React Guide', path: '/react-guide', icon: '⚛️' },
    { name: 'Router Guide', path: '/router-guide', icon: '🗺️' }
];
