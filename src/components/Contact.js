import React, { useState } from 'react';

const Contact = (props) => {
  const [submission, setSubmission] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form action="https://formspree.io/mlejobow" method="POST">
        <div className="input-box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="your name"
            onChange={handleChange}
            id="name"
            name="name"
            value={submission.name}
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="phone">Phone:</label>
          <input
            name="phone"
            id="phone"
            onChange={handleChange}
            placeholder="your phone number"
            value={submission.phone}
          />
        </div>

        <div className="input-box">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email address"
            required
            value={submission.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            value={submission.message}
            placeholder="anything else you'd like to add"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
