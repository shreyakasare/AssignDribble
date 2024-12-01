import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    usageType: '',
  });

  const [completedSteps, setCompletedSteps] = useState([]);

  const handleNext = (step, data) => {
    setFormData({ ...formData, ...data });
    setCompletedSteps((prev) => [...new Set([...prev, step])]);
    setCurrentStep(step + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="app-container">
      <div className="slider">
        {[1, 2, 3, 4].map((step) => (
          <button
            key={step}
            className={`slider-button ${completedSteps.includes(step) ? 'completed' : ''}`}
            onClick={() => setCurrentStep(step)}
          >
            {step}
          </button>
        ))}
      </div>

      {currentStep === 1 && (
        <Step1 onNext={(data) => handleNext(1, data)} formData={formData} />
      )}
      {currentStep === 2 && (
        <Step2 onNext={(data) => handleNext(2, data)} onBack={handleBack} formData={formData} />
      )}
      {currentStep === 3 && (
        <Step3 onNext={(data) => handleNext(3, data)} onBack={handleBack} formData={formData} />
      )}
      {currentStep === 4 && <Step4 formData={formData} onBack={handleBack} />}
    </div>
  );
}

export default App;
