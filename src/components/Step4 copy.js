import React from 'react';

function Step4({ formData, onBack }) {
  return (
    <div className="step-container">
      <h2>Congratulations!</h2>
      <div className="summary">
        <h3>Your Details:</h3>
        <ul>
          <li><strong>Full Name:</strong> {formData.fullName}</li>
          <li><strong>Display Name:</strong> {formData.displayName}</li>
          <li><strong>Workspace Name:</strong> {formData.workspaceName}</li>
          <li><strong>Workspace URL:</strong> {formData.workspaceURL}</li>
          <li><strong>How you plan to use Eden:</strong> {formData.usageType === 'forMyself' ? 'For Myself' : 'For My Team'}</li>
        </ul>
      </div>
      <button onClick={onBack}>Back</button>
      <h3>All steps are completed! You're ready to start using Eden.</h3>
    </div>
  );
}

export default Step4;
