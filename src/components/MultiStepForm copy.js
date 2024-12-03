import React, { useState } from "react";
import "../App1.css"; // Include your CSS file with the provided styles
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const nextStep = () => setStep((prev) => prev + 1);

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4; // Define total number of steps

    const updateStep = (direction) => {
        debugger
        if (direction === "next" && currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
        } else if (direction === "prev" && currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const progressWidth = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;

    return (
        <main className="main-wrapper">
            <div className="steps-wrapper">
                <div className="steps">
                    {[...Array(totalSteps)].map((_, index) => (
                        <span
                            key={index}
                            className={`step ${index + 1 <= currentStep ? "active" : ""}`}
                        >
                            {index + 1}
                        </span>
                    ))}

                    <div className="progress-bar">
                        <span className="progress" style={{ width: progressWidth }}></span>
                    </div>
                </div>

                {step === 1 && <Step1 onNext={nextStep} />}
                {step === 2 && <Step2 onNext={nextStep} />}
                {step === 3 && <Step3 onNext={nextStep} />}
                {step === 4 && <Step4 />}

                <div className="buttons">
                    <button
                        className="btn btn-prev"
                        disabled={currentStep === 1}
                        onClick={() => updateStep("prev")}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-next"
                        disabled={currentStep === totalSteps}
                        onClick={() => updateStep("next")}
                    >
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
};

export default MultiStepForm;
