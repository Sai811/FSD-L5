import React from 'react';

function Experience({ value, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="experience" className="form-label">Experience and Internships</label>
      <textarea
        className="form-control"
        id="experience"
        name="experience"
        value={value}
        onChange={handleChange}
        placeholder="Detail your work experience and internships..."
        rows="4">
      </textarea>
    </div>
  );
}

export default Experience;
