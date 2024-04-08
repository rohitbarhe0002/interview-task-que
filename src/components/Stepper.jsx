import React, { useState } from 'react';
import '../App.css';

function Stepper({ steps }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    const handleNext = () => {
        setCurrentStep(prevState => {
            if (prevState === steps.length) {
                return prevState;
            } else {
                return prevState + 1;
            }
        });
    };

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (steps.length - 1)) * 100;
    };

    const ActiveComponent = steps[currentStep - 1]?.component;

    return (
        <>
            <div className='stepper'>
                {steps.map((step, index) => {
                 return (
                    <div className={`step ${currentStep > index + 1 || isComplete ? 'complete' : ''}${currentStep === index + 1 ? 'active' : ''}`}>
                    <div className='step-number'>
                        {currentStep > index + 1 || isComplete ? (<span>&#10003;</span> ):( index + 1)}
                    </div>
                    <div className='step-name'>{step.label}</div>
                </div>
                 )
})}
                <div className='progress-bar' >
                    <div className='progress' style={{width:`${calculateProgressBarWidth()}%`}}></div>
                </div>
            </div>
            <ActiveComponent />
            {!isComplete && (
                <button onClick={handleNext}>
                    {currentStep === steps.length ? 'Finish' : 'Next'}
                </button>
            )}
        </>
    );
}

export default Stepper;
