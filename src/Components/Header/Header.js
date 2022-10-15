import React from 'react';
import {Link} from  "react-router-dom"
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navbar text-2xl'>
                <div className='logo'>
                    <Link to='/'><h3>Quize Zone</h3></Link>
                </div>
                <div className="menu-items">
                    <Link to='/'>Home</Link>
                    <Link to='/statics'>Statics</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
            </nav>
        </div>

    );
};

export default Header;