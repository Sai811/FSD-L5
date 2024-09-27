import React from 'react';

function Education({ value, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="education" className="form-label">Education Qualifications</label>
      <textarea
        className="form-control"
        id="education"
        name="education"
        value={value}
        onChange={handleChange}
        placeholder="Enter your education details..."
        rows="3">
      </textarea>
    </div>
  );
}

export default Education;