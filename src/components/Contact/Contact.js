import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
import emailjs, { init } from 'emailjs-com';
import { Form } from "react-bootstrap";
init('REACT_APP_EMAILJS_USER_ID');

const ContactForm = ({ setAlertContent, setShowAlert }) => {

  const [formData, setFormData] = useState({ email: '', firstName: '', lastName: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value })

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert('Email is invalid');
      return;
    }

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData, process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          subject: '',
          message: ''
        })
        alert(
          "Thank you for contacting me. I will be in touch."
        )
        // setAlertContent({
        //   heading: "Thank you for contacting me.",
        //   message: "I will respond to your message as soon as I can."
        // })
        // setShowAlert(true)
      }, (error) => {
        // setAlertContent({
        //   heading: "Something went wrong.",
        //   message: error.text
        // })
        // setShowAlert(true)
        alert(
          "Something went wrong."
        )
      });
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='flex justify-center bg-gray-900' id='contact'>
      <Form className="w-full max-w-lg">
        <h3 className="flex justify-center mt-6 sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Contact Me</h3>
        <div className="flex flex-wrap -mx-3 mb-1">
          <Form.Group className="w-full md:w-1/2 px-3 mb-1 md:mb-0" controlId="firstName">
            <Form.Label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" id="form-first-name">
              First Name
            </Form.Label>
            <Form.Control className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="w-full md:w-1/2 px-3 mb-1 md:mb-0" controlId="lastName">
            <Form.Label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" id="form-last-name">
              Last Name
            </Form.Label>
            <Form.Control className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1">
          <Form.Group className="w-full px-3" controlId="email">
            <Form.Label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" id="form-email">
              E-mail
            </Form.Label>
            <Form.Control className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="name@example.com"
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1">
          <Form.Group className="w-full px-3" controlId="subject">
            <Form.Label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" id="form-subject">
              Subject
            </Form.Label>
            <Form.Control className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Subject"
              onChange={handleChange}
              value={formData.subject}
            />
          </Form.Group>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Form.Group className="w-full px-3" controlId="message">
            <Form.Label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" id="form-message">
              Message
            </Form.Label>
            <Form.Control className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              as="textarea"
              placeholder="Enter a message."
              onChange={handleChange}
              value={formData.message}
            />
          </Form.Group>
        </div>
        <div className="flex md:flex md:items-center justify-center">
          <div className="flex justify-center md:w-1/3 ">
            <button className="flex justify-center shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-6" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;