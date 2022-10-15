import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const quizQuestion = useLoaderData();
    const questions = quizQuestion.data
    // console.log(questions)
    return (
        <div>
            {
                questions.map(question => console.log(question))
            }
        </div>
    );
};

export default Questions;