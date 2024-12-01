// components/Step1.js
import React, { useState } from 'react';

function Step1({ onNext }) {
  const [formData, setFormData] = useState({ fullName: '', displayName: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.displayName) newErrors.displayName = 'Display Name is required';
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
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      />
      {errors.fullName && <p>{errors.fullName}</p>}
      <input
        type="text"
        name="displayName"
        value={formData.displayName}
        onChange={handleChange}
        placeholder="Display Name"
      />
      {errors.displayName && <p>{errors.displayName}</p>}
      <button type="submit">Next</button>
    </form>
  );
}

export default Step1;
