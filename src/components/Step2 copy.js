import React, { useState } from 'react';

function Step2({ onNext, onBack, formData }) {
  const [form, setForm] = useState({
    workspaceName: formData.workspaceName || '',
    workspaceURL: formData.workspaceURL || '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.workspaceName) newErrors.workspaceName = 'Workspace name is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onNext(form);
  };

  return (
    <div className="step-container">
      <h2>Step 2: Create Workspace</h2>
      <div className="form-group">
        <label>Workspace Name</label>
        <input
          type="text"
          value={form.workspaceName}
          onChange={(e) => setForm({ ...form, workspaceName: e.target.value })}
        />
        {errors.workspaceName && <span className="error">{errors.workspaceName}</span>}
      </div>
      <div className="form-group">
        <label>Workspace URL</label>
        <input
          type="text"
          value={form.workspaceURL}
          onChange={(e) => setForm({ ...form, workspaceURL: e.target.value })}
        />
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Step2;
