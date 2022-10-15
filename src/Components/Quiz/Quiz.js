import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, logo, name, total } =quiz;
    // console.log(quiz)
    return (
        <div className='quiz p-5 rounded shadow-lg  shadow-indigo-500/50'>
            <img src={logo} className='w-11/12 mx-auto' alt="" />
            <h2 className='text-2xl mt-3'>{quiz.name}</h2>
            <div className='flex justify-between items-center w-11/12 mx-auto mt-2'>
                <p>{total} Questions</p>
                 <button className='btn btn-accent btn-outline'>
                    <Link to={`/${id}`}>Start quiz</Link>
                 </button>
                </div>
        </div>
    );
};

export default Quiz;