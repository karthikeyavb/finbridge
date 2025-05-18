import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
    <h3 style={{ color: '#fff' }}>Contact Us</h3>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={form.email}
      onChange={handleChange}
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      value={form.message}
      onChange={handleChange}
      required
      rows={4}
    ></textarea>
    <button type="submit">Submit</button>
  </form>
  );
};

export default ContactForm;
