import { useState } from 'react';
import './App.css';
// import { default as Quetion, default as Quetions } from './components/Quetion';
import Notes from './components/Notes';
function App() {
  const [notes,setNotes] =  useState([
    {
    id:1,
    text:"check the first description"
  },
  {
    id:2,
    text:"check the second description"
  },
  {
    id:3,
    text:"check the third description"
  },
  {
    id:4,
    text:"check the fourth description"
  },   {
    id:5,
    text:"check the fifth description"
  },
  {
    id:6,
    text:"check the sixth description"
  }
]);
  const [currentQuetion,setcurrentQuetion] = useState(0);
  const [userAnswers,setUserAnswers] = useState([]);
  const handleNextQuetion = (val) => {
setcurrentQuetion(currentQuetion+1);
setUserAnswers([...userAnswers,val]);

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
    {/* Stepper UI   */}
    {/* <h3>Checkout Stepper</h3> */}
    {/* <Stepper steps={STEPPER_STEPS}/> */}
    
        {/* Quiz  UI   */}
        {/* <h2 style={{textAlign:'center'}}>world Quiz</h2> */}
  {/* {currentQuetion < Quetions.length &&
    <Quetion quetion={Quetions[currentQuetion]} onAnswerClick={handleNextQuetion}/>}
    {currentQuetion === Quetions.length &&
    <Result userAnswers={userAnswers} quetions={Quetions} resetQuiz={resetQuiz}/>
} */}

  {/* Quiz  UI   */}
  <Notes notes={notes} setNotes={setNotes}/>
  </div>
  )
}

export default App
