/* eslint-disable no-unused-vars */
import React from "react";
import Quiz from "./components/quiz";
import Home from "./components/Home";

export default function  App(){

    const [isHome ,setIsHome]=React.useState(true)

    function startQuiz() {
        setIsHome(false)
    }
    


    return (
        <main className="app">
            {isHome ?  
            <Home startQuiz={startQuiz}/>
            :
            <Quiz />
        
        }
          </main>
    )
}