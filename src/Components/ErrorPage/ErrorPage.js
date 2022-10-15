import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Images/oops-404-error-with-broken-robot-concept-illustration_114360-1932.webp'
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='error mx-auto flex-col flex items-center justify-center'>
           
           <div className=' text-3xl '> <h2>OPPS! </h2>
            <p>Page Not Found</p></div>

            <div>
            <button className='btn btn-accent my-5 btn-outline '>
                <Link to='/'>Go TO Home</Link>
            </button>
            </div>

        </div>
    );
};

export default ErrorPage;