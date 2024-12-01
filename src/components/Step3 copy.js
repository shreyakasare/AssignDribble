// components/Step3.js
import React, { useState } from 'react';

function Step3({ onNext, onBack }) {
  const [usageType, setUsageType] = useState('');

  const handleSubmit = () => {
    if (usageType) {
      onNext({ usageType });
    }
  };

  return (
    <div className="step">
      <h2>How are you planning to use Eden?</h2>
      <p>We'll streamline your setup experience accordingly.</p>
      <div className="usage-options">
        <div
          className={`option ${usageType === 'myself' ? 'selected' : ''}`}
          onClick={() => setUsageType('myself')}
        >
          For myself
        </div>
        <div
          className={`option ${usageType === 'team' ? 'selected' : ''}`}
          onClick={() => setUsageType('team')}
        >
          With my team
        </div>
      </div>
      <div className="buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
}

export default Step3;
