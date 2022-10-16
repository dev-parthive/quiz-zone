import React from 'react';
import image from '../../Images/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg'
const Banner = () => {
    return (
        <div className='h-40 flex w-10/12 m-auto justify-between items-center'>
            <div className='w-5/12'>
                <h3 className='text-3xl text-orange-300'>This Quiz is for developer. </h3>
            </div>
            <div className='w-5/12'>
            <img className='h-28 w-full '  src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;