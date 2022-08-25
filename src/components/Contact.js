import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Email is invalid');
      return;
    }

    alert(`Thank you for your interest. I will be in contact soon.`);

    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div class='flex justify-center bg-gray-900' id='contact'>
      <form class="w-full max-w-lg">
        <p className="flex justify-center mt-6 sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Contact Me</p>
        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name" />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-password">
              E-mail
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-password">
              Message
            </label>
            <input class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="Enter a message"
            />
          </div>
        </div>
        <div class="flex md:flex md:items-center justify-center">
          <div class="flex justify-center md:w-1/3 ">
            <button class="flex justify-center shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-6" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
    </div>
  );
};