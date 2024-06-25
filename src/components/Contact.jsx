import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const validations = {
    firstName: {
      required: true,
      message: 'Please enter your first name.'
    },
    lastName: {
      required: true,
      message: 'Please enter your last name.'
    },
    email: {
      required: true,
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Please enter a valid email address.'
    },
    number: {
      required: true,
      validator: (value) => /^\+?\d{1,3}?[-.\s]?\(?(\d{1,3}?)?\)?[-.\s]?\d{1,2}[-.\s]?\d{2,4}[-.\s]?\d{2,4}$/.test(value),
      message: 'Please enter a valid phone number.'
    },
    message: {
      required: true,
      message: 'Please enter a message.'
    }
  };

  const validateForm = (data) => {
    for (let field in validations) {
      const { required, validator, message } = validations[field];
      if (required && !data[field]) {
        alert(message);
        return false;
      }
      if (validator && !validator(data[field])) {
        alert(message);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm(formData)) return;

    fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Email sent successfully') {
          alert('Email sent');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            message: ''
          });
        } else {
          alert('Something went wrong!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Something went wrong!');
      });
  };

  return (
    <section id="contact">
      <div className="form-container">
        <h2>Contact</h2>
        <p>Get a free consultation call! Please provide your email, phone number, and the details of your project.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div id="contact-card" className="contact-input-group row">

            <div className="col-sm-6">
              <div className="input-field">
                <i className="bi bi-person-fill"></i>
                <input
                  className="contact-input"
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="input-field">
                <i className="bi bi-person-fill"></i>
                <input
                  className="contact-input"
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="input-field">
                <i className="bi bi-envelope-fill"></i>
                <input
                  className="contact-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="input-field">
                <i className="bi bi-telephone-fill"></i>
                <input
                  className="contact-input"
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="col-12">
              <div id="message-box" className="input-field">
                <i className="bi bi-chat-text-fill"></i>
                <textarea
                  className="contact-input"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Please provide as many details for the job as possible..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <input id="submit-button" type="submit" className="btn btn-info submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
}
