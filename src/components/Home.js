import React from 'react'


export default function Home(props) {
    return (
        <div className="home">
            <h1 className='home__title'>Quizzical</h1>
            <p className='home__text'>The greatest trivia game</p>
            <button onClick={props.startQuiz}  className='btn'>Start Quiz</button>
        </div>
    )}