// components/Step3.js
import React, { useState } from 'react';

function Step3({ onNext, onBack }) {
  const [formData, setFormData] = useState({ usageForMyself: false, usageForTeam: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.usageForMyself && !formData.usageForTeam) {
      newErrors.usage = 'Please select at least one option';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          name="usageForMyself"
          checked={formData.usageForMyself}
          onChange={handleChange}
        />
        For Myself
      </label>
      <label>
        <input
          type="checkbox"
          name="usageForTeam"
          checked={formData.usageForTeam}
          onChange={handleChange}
        />
        For My Team
      </label>
      {errors.usage && <p>{errors.usage}</p>}
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
}

export default Step3;
