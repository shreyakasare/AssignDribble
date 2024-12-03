import React, { useState } from "react";
import "../App1.css"; // Include your CSS file with the provided styles
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);

    const totalSteps = 4;

    const nextStep = () => {
        // Mark the current step as completed
        if (!completedSteps.includes(step)) {
            setCompletedSteps((prev) => [...prev, step]);
        }
        if (step < totalSteps) {
            setStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const progressWidth = `${((step - 1) / (totalSteps - 1)) * 100}%`;

    return (
        <main className="main-wrapper">
            <div className="steps-wrapper">
                <div className="steps">
                    {[...Array(totalSteps)].map((_, index) => {
                        const stepNumber = index + 1;
                        const isCompleted = completedSteps.includes(stepNumber);
                        const isActive = stepNumber <= step;

                        return (
                            <span
                                key={index}
                                className={`step ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                            >
                                {stepNumber}
                            </span>
                        );
                    })}

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
                        disabled={step === 1}
                        onClick={prevStep}
                    >
                        Previous
                    </button>
                    {/* <button
                        className="btn btn-next"
                        disabled={step === totalSteps}
                        onClick={nextStep}
                    >
                        Next
                    </button> */}
                </div>
            </div>
        </main>
    );
};

export default MultiStepForm;
