import React, { useState, useEffect } from 'react';
import Logo from '../logos/Logo';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1023);
    };

    const toggleMenu = (event) => {
        event.stopPropagation();
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuItems = [
        { label: 'Tentang Kami', to: '/' },
        { label: 'Semua Outlet', to: '/' },
        { label: 'Promo', to: '/' },
        { label: 'Karier', to: '/' },
        { label: 'Download App', to: '/', style: { color: '#A30926' } },
    ];

    return (
        <nav>
            <Link to="/">
                <Logo />
            </Link>
            {isMobile && (<div className="menu-icon" onClick={toggleMenu}></div>)}

            <ul className={`mobile-menu ${isMobile && menuOpen ? 'open' : ''}`}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.to} className="nav-link" style={item.style}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {!isMobile && (
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to} className="nav-link" style={item.style}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
