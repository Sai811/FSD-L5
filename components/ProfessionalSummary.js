import React from 'react';

function ProfessionalSummary({ value, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="professionalSummary" className="form-label">Professional Summary</label>
      <textarea
        className="form-control"
        id="professionalSummary"
        name="professionalSummary"
        value={value}
        onChange={handleChange}
        placeholder="Write a brief summary of your professional background..."
        rows="4">
      </textarea>
    </div>
  );
}

export default ProfessionalSummary;
