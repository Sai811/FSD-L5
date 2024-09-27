import React from 'react';

function Achievements({ value, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="achievements" className="form-label">Skills and Achievements</label>
      <textarea
        className="form-control"
        id="achievements"
        name="achievements"
        value={value}
        onChange={handleChange}
        placeholder="List your skills and achievements..."
        rows="4">
      </textarea>
    </div>
  );
}

export default Achievements;
