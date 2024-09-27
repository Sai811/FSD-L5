import React from 'react';

function CareerObjective({ value, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="careerObjective" className="form-label">Career Objective</label>
      <textarea
        className="form-control"
        id="careerObjective"
        name="careerObjective"
        value={value}
        onChange={handleChange}
        placeholder="Describe your career objective..."
        rows="3">
      </textarea>
    </div>
  );
}

export default CareerObjective;
