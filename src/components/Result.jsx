import React from 'react';

function Result({userAnswers,quetions,resetQuiz}) {
    const correctAnswers = userAnswers.filter((answer)=>answer).length;
  return (
    <div className='results'>
    <h2>Results</h2>
    <p>Your answered {correctAnswers} out of {quetions.length} questions
        <span onClick={resetQuiz}>Click here to Retry</span>
    </p>
    <ul>
        {quetions.map((question, index) => (
            <li key={index} data-correct={userAnswers[index] === question.correctAnswer}>
                Q{index + 1}. {question.quetion}
                {userAnswers[index] && <span> - Answer: {userAnswers[index]}</span>}
            </li>
        ))}
    </ul>
</div>

  )
}

export default Result