import React from 'react';

function Result({userAnswers,quetions,resetQuiz}) {
    const correctAnswers = userAnswers.filter((answer)=>answer).length;
    console.log(userAnswers,"====user ansers")
  return (
    <div className='results'>
        <h2>Results</h2>
        <p>Your answered {correctAnswers} out of {quetions.length} quetions
        <span onClick={resetQuiz}>Click here to Retry</span>
        </p>
        <ul>
            {quetions.map((quetion,indx)=><li key={indx} data-correct={userAnswers[indx]}>Q{indx+1}.{quetion.quetion}</li>)}
        </ul>

    </div>
  )
}

export default Result