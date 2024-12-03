import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import MultiStepForm from './components/MultiStepForm';

function App() {
  // const [step, setStep] = useState(1);
  // const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div>
      <MultiStepForm />
      {/* {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onNext={nextStep} />}
      {step === 3 && <Step3 onNext={nextStep} />}
      {step === 4 && <Step4 />} */}
    </div>
  );
}

export default App;
