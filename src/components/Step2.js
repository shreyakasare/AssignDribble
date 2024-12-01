// components/Step2.js
import React, { useState } from 'react';

function Step2({ onNext, onBack }) {
  const [formData, setFormData] = useState({ workspaceTitle: '', workspaceURL: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.workspaceTitle) newErrors.workspaceTitle = 'Workspace Title is required';
    if (!formData.workspaceURL) newErrors.workspaceURL = 'Workspace URL is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="workspaceTitle"
        value={formData.workspaceTitle}
        onChange={handleChange}
        placeholder="Workspace Title"
      />
      {errors.workspaceTitle && <p>{errors.workspaceTitle}</p>}
      <input
        type="text"
        name="workspaceURL"
        value={formData.workspaceURL}
        onChange={handleChange}
        placeholder="Workspace URL"
      />
      {errors.workspaceURL && <p>{errors.workspaceURL}</p>}
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
}

export default Step2;
