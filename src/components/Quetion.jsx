import React from 'react'
import '../App.css'
function Quetion({ quetion,onAnswerClick}) {
console.log(quetion)
  return (
    <div className='quetion'>

<h2>{quetion.quetion}</h2>
<ul className='options'>
{quetion.answerOptions.map((option)=>(
    <li key={option.text}>
<button onClick={()=>onAnswerClick(option.isCorrect)}>{option.text}</button>
    </li>
))}
</ul>
    </div>
  )
}

export default Quetion