import React, { useState } from 'react';
import ProfessionalSummary from './ProfessionalSummary';
import Education from './Education';
import Skills from './Skills';
import CareerObjective from './CareerObjective';
import Experience from './Experience';
import Achievements from './Achievements';
import { jsPDF } from 'jspdf';
import './ResumeForm.css'; // Custom CSS for styling the form

function ResumeForm() {
  const [formData, setFormData] = useState({
    professionalSummary: '',
    education: '',
    academicSkills: '',
    nonAcademicSkills: '',
    careerObjective: '',
    experience: '',
    achievements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Resume", 20, 20);
    doc.text(`Professional Summary: ${formData.professionalSummary}`, 20, 30);
    doc.text(`Education: ${formData.education}`, 20, 40);
    doc.text(`Academic Skills: ${formData.academicSkills}`, 20, 50);
    doc.text(`Non-Academic Skills: ${formData.nonAcademicSkills}`, 20, 60);
    doc.text(`Career Objective: ${formData.careerObjective}`, 20, 70);
    doc.text(`Experience: ${formData.experience}`, 20, 80);
    doc.text(`Achievements: ${formData.achievements}`, 20, 90);
    
    doc.save("resume.pdf");
  };

  return (
    <div className="container mt-5 resume-form">
      <h2 className="text-center mb-4">Create Your Resume</h2>
      <form className="needs-validation" noValidate>
        <ProfessionalSummary value={formData.professionalSummary} handleChange={handleChange} />
        <Education value={formData.education} handleChange={handleChange} />
        <Skills 
          academicSkills={formData.academicSkills} 
          nonAcademicSkills={formData.nonAcademicSkills}
          handleChange={handleChange} />
        <CareerObjective value={formData.careerObjective} handleChange={handleChange} />
        <Experience value={formData.experience} handleChange={handleChange} />
        <Achievements value={formData.achievements} handleChange={handleChange} />

        <div className="text-center mt-4">
          <button type="button" className="btn btn-primary btn-lg" onClick={generatePDF}>
            Generate Resume
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
