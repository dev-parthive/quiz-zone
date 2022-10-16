import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const quizQuestion = useLoaderData();
    const questions = quizQuestion.data.questions
    console.log(questions)
    return (
        <div>
            {
                questions.map(question => <Question key={question.id} questions={question}></Question>)
            }
        </div>
    );
};

export default Questions;