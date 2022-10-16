import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className='navbar text-2xl shadow-lg  shadow-indigo-500/50 '>
                <div className='logo'>
                    <Link to='/'><h3>Quize Zone</h3></Link>
                </div>
                <div className="menu-items ">
                    <ul className={`menu-list `}>
                        <Link to='/topics'>Topics</Link>
                        <Link to='/statics'>Statics</Link>
                         <Link to='/blogs'>Blogs</Link>
                    </ul>


                    {/* <div onClick={() => setOpen(!open)} className='z-10 cursor-pointer h-8 w-7 text-blue-500 lg:hidden md:hidden'>
                        {

                            open ? <XMarkIcon ></XMarkIcon> : <Bars3Icon ></Bars3Icon>
                        }
                    </div> */}

                    {/* <Bars3Icon onClick={()=> setOpen(!open)} className='cursor-pointer h-8 w-7 text-blue-500'></Bars3Icon>
                     */}
                </div>
            </nav>
        </div>

    );
};

export default Header;