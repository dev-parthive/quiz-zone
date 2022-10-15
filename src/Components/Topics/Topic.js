import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topic = () => {
    const topics = useLoaderData ()
    const quizs = topics.data
    return (
        <div className=' w-9/12 mx-auto  mt-32 quizw-wraper grid    md:grid-cols-4  gap-5'>
           {
            quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
           }
        </div>
    );
};

export default Topic;