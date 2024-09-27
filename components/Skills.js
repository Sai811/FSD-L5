import React from 'react';

function Skills({ academicSkills, nonAcademicSkills, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="academicSkills" className="form-label">Academic Skills</label>
      <input
        type="text"
        className="form-control"
        id="academicSkills"
        name="academicSkills"
        value={academicSkills}
        onChange={handleChange}
        placeholder="List your academic skills..."
      />
      
      <label htmlFor="nonAcademicSkills" className="form-label mt-3">Non-Academic Skills</label>
      <input
        type="text"
        className="form-control"
        id="nonAcademicSkills"
        name="nonAcademicSkills"
        value={nonAcademicSkills}
        onChange={handleChange}
        placeholder="List your non-academic skills..."
      />
    </div>
  );
}

export default Skills;
