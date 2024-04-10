import React from 'react'
import '../App.css'
function Quetion({ quetion,onAnswerClick}) {
  return (
    <div className='quetion'>

<h2>{quetion.quetion}</h2>
<ul className='options'>
{quetion.answerOptions.map((option)=>(
    <li key={option.text}>
<button onClick={()=>onAnswerClick(option.text)}>{option.text}</button>
    </li>
))}
</ul>
    </div>
  )
}

export default Quetion