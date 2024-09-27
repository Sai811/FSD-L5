import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
    setSubmitted(false); // Reset the success message on new input
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.age) {
      validationErrors.age = 'Age is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setErrors({});
      // Perform form submission tasks like sending data to server
    }
  };

  return (
    <div className="App">
      <h1>User Data Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className={`form-group ${errors.age ? 'error' : ''}`}>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && <div className="success-message">Form submitted successfully!</div>}
    </div>
  );
}

export default App;
