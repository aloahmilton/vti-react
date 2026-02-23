import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, LogOut, Globe, Menu, X } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';
import { useAuth } from '../contexts/AuthContext';
import './TopHeader.css';

interface TopHeaderProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const TopHeader = ({ toggleSidebar, isSidebarOpen }: TopHeaderProps) => {
    const { language, setLanguage } = useSettings();
    const { isAuthenticated, user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className={`topHeader ${isScrolled ? 'scrolled' : ''}`}>
            <div className="headerLeft">
                <button className="mobileMenuBtn" onClick={toggleSidebar} aria-label="Toggle menu">
                    {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <Link to="/" className="headerLogo">
                    <span className="logoDot"></span>
                    <span className="logoText">Aloah Milton</span>
                </Link>
            </div>

            <div className="headerCenter">
                <form onSubmit={handleSearch} className="headerSearch">
                    <Search size={18} className="searchIcon" />
                    <input
                        type="search"
                        placeholder="Search courses, lessons..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </div>

            <div className="headerRight">
                <div className="langSelect">
                    <Globe size={16} />
                    <button
                        className={`langOption ${language === 'en' ? 'active' : ''}`}
                        onClick={() => setLanguage('en')}
                    >
                        EN
                    </button>
                    <span className="divider">/</span>
                    <button
                        className={`langOption ${language === 'fr' ? 'active' : ''}`}
                        onClick={() => setLanguage('fr')}
                    >
                        FR
                    </button>
                </div>

                {isAuthenticated ? (
                    <div className="userMenu">
                        <Link to="/profile" className="userProfile">
                            <div className="avatar">
                                {user?.name?.charAt(0) || <User size={16} />}
                            </div>
                            <span className="userName">{user?.name}</span>
                        </Link>
                        <button onClick={logout} className="logoutBtn" title="Sign Out">
                            <LogOut size={18} />
                        </button>
                    </div>
                ) : (
                    <Link to="/login" className="loginBtn">Sign In</Link>
                )}
            </div>
        </header>
    );
};

export default TopHeader;
