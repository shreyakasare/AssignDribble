import React, { useState } from 'react';

function Step1({ onNext, formData }) {
  const [form, setForm] = useState({
    fullName: formData.fullName || '',
    displayName: formData.displayName || '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.fullName) newErrors.fullName = 'Full name is required';
    if (!form.displayName) newErrors.displayName = 'Display name is required';
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
      <h2>Step 1: Enter Your Details</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>
      <div className="form-group">
        <label>Display Name</label>
        <input
          type="text"
          value={form.displayName}
          onChange={(e) => setForm({ ...form, displayName: e.target.value })}
        />
        {errors.displayName && <span className="error">{errors.displayName}</span>}
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Step1;
