import React from 'react';
import {Link} from  "react-router-dom"
import './Header.css'
import { Bars3Icon} from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <div>
            <nav className='navbar text-2xl shadow-lg  shadow-indigo-500/50 '>
                <div className='logo'>
                    <Link to='/'><h3>Quize Zone</h3></Link>
                </div>
                <div className="menu-items ">
                    <ul className='md:flex menu-list'>
                        <li><Link to='/'>Home</Link></li>
                    <li><Link to='/statics'>Statics</Link></li>
                    <li> <Link to='/blogs'>Blogs</Link></li>
                    </ul>
                    <Bars3Icon className='cursor-pointer h-8 w-7 text-blue-500'></Bars3Icon>
                </div>
            </nav>
        </div>

    );
};

export default Header;