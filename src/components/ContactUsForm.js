import React, { useState } from 'react';
import TextInput from './common/TextInput';
import './ContactUsForm.css';
import * as contactUsApi from '../api/contactUsApi';

const ContactUsForm = (props) => {
  const [errors, setErrors] = useState({});
  const [contactFormValues, setContactFormValues] = useState({
    id: null,
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange({ target }) {
    const updatedFormValues = {
      ...contactFormValues,
      [target.name]: target.value,
    };
    setContactFormValues(updatedFormValues);
  }

  function formIsValid() {
    const _errors = {};

    if (!contactFormValues.name) _errors.name = 'Name is required';
    if (!contactFormValues.phone) _errors.phone = 'Phone is required';
    if (!contactFormValues.email) _errors.email = 'Email is required';
    if (!contactFormValues.subject) _errors.subject = 'Subject is required';
    if (!contactFormValues.message) _errors.message = 'Message is required';

    setErrors(_errors);
    //Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    contactUsApi.saveContactUsForm(contactFormValues).then(() => {
      resetForm();
      alert('Thank you for contacting us!');
    });
  }

  function resetForm() {
    const initialFormValues = {};
    initialFormValues.name = '';
    initialFormValues.phone = '';
    initialFormValues.email = '';
    initialFormValues.subject = '';
    initialFormValues.message = '';
    setContactFormValues(initialFormValues);
  }

  return (
    <>
      <h2 className="lead-txt dark-green mb-3">{props.heading}</h2>

      <p className="lead  mb-3">{props.title}</p>

      <form onSubmit={handleSubmit}>
        <TextInput
          id="name"
          type="text"
          name="name"
          placeholder="First Name & Last Name"
          value={contactFormValues.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextInput
          id="phone"
          type="tel"
          name="phone"
          placeholder="Phone No."
          value={contactFormValues.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          value={contactFormValues.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextInput
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject"
          value={contactFormValues.subject}
          onChange={handleChange}
          error={errors.subject}
        />

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            className="form-control"
            aria-label="message"
            placeholder="Your Message"
            rows="3"
            value={contactFormValues.message}
            onChange={handleChange}
            error={errors.message}
            style={{ fontFamily: 'sans-serif' }}
          ></textarea>
          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mb-2 btn-contact-us">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};
export default ContactUsForm;
