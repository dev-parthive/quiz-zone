import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './QuestionOption.css'


const Question = ({ questions }) => {

    const { question, options, correctAnswer } = questions;
    console.log(questions);


    // check the correctAnswer  here 
    const checkTheAns = (ans) => {
        if (ans === correctAnswer) {
            toast('Correct answer', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } else {
            toast('Wrong answer', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    };
    const iconsClicked = () => {
        toast.success(`correct answer is,${correctAnswer}`);
    }
    return (
        <div className='quiz-container'>
            <div className="quiz-heading">
                <div className='flex items-center justify-around'>
                    <h2>Quiz: {question}  </h2>
                    <p><span className='icon-fav' onClick={() => iconsClicked()}> <EyeIcon className="h-6 w-6 text-blue-500" /></span></p>
                </div>
                <div className='quiz-option '>
                    {options.map((quizOption) => (
                        <div className="option-box" onClick={() => checkTheAns(quizOption)}>
                            {/* <li >{quizOption}</li> */}
                            <li>{quizOption}</li>
                        </div>
                    ))}

                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Question;