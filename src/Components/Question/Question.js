import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
const Question = ({questions}) => {
    
    const {question, options , correctAnswer}  = questions
    console.log(questions)
    return (
        <div className='quiz-container'>
            <div className="quiz-heading">
              <h2>Quiz: {question} </h2>
              <div className='quiz-option'>
              {options.map((quizOption) => (
          <div  className="option-box" >
            {/* <li >{quizOption}</li> */}
            <li>{quizOption}</li>
          </div>
        ))}
              </div>
            </div>
            
        </div>
    );
};

export default Question;