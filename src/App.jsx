import { useState } from 'react';
import './App.css';
// import { default as Quetion, default as Quetions } from './components/Quetion';
import Quetions from '../quetions.json';
import Quetion from './components/Quetion';
import Result from './components/Result';
function App() {
  const [currentQuetion,setcurrentQuetion] = useState(0);
  const [userAnswers,setUserAnswers] = useState([]);
  const handleNextQuetion = (isCorrect) => {
setcurrentQuetion(currentQuetion+1);
setUserAnswers([...userAnswers,isCorrect]);

  }
const STEPPER_STEPS = [
  {
    label: 'Step 1',
    component:()=><div>Step 1</div>
  },
  {
    label: 'Step 2',
    component:()=><div>Step 2</div>
  },
  {
    label: 'Step 3',
    component:()=><div>Step 3</div>
  },
  {
    label: 'Step 4',
    component:()=><div>Step 4</div>
  }
]
const resetQuiz = () => {
  setcurrentQuetion(0);
  setUserAnswers([]);
}

  return (
    
  <div>
        <h2 style={{textAlign:'center'}}>world Quiz</h2>

  {currentQuetion < Quetions.length &&
    <Quetion quetion={Quetions[currentQuetion]} onAnswerClick={handleNextQuetion}/>}

    {/* <h3>Checkout Stepper</h3> */}
    {/* <Stepper steps={STEPPER_STEPS}/> */}
    {currentQuetion === Quetions.length &&
    <Result userAnswers={userAnswers} quetions={Quetions} resetQuiz={resetQuiz}/>
}
  </div>
  )
}

export default App
