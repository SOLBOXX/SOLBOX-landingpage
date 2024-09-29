'use client'

import React, { useState } from 'react';
import ModalWrapper from '../component/ModalWrapper';

const Page: React.FC = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('listener');
  const [showModal, setShowModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // New state for error messages

  const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrorMessage(null);

    if (!email) {
      setErrorMessage('Please provide a valid email');
      return;
    } else if (!isValidEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    const waitlistEntry = { email, userType };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(waitlistEntry),
      });

      if (response.ok) {
        setSubmittedEmail(email); 
        setShowModal(true);
        setEmail('');
      } else {
        const data = await response.json();
        if (data.error?.includes("already exists")) {
          setErrorMessage("Email already registered.");
        } else {
          setErrorMessage("There was an issue registering, please try again.");
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(`Error submitting form: ${error.message}`);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <div className='mt-10 pt-10 max-w-full'>
      <div className='flex flex-col space-y-2'>
        <p className='text-base lg:text-sm font-bold text-tertiary dark:text-white border-[3px] border-primary rounded p-2 dark:border-none dark:rounded-lg dark:bg-black dark:px-4 w-fit mx-auto'>SOLBOX Coming Soon</p>
        <h1 className='py-3 md:pt-4 leading-10 md:leading-[50px] font-bold text-center text-3xl lg:text-4xl text-tertiary dark:text-lightPrimary lg:w-[600px] mx-auto'>Where Music Meets Freedom</h1>
        <p className='sm:p-3 md:p-0 text-base md:text-sm text-black dark:text-white text-center'>Artists gain full ownership and control, while listeners enjoy enhanced privacy through decentralized, secure transactions.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <div className='bg-lightPrimary dark:bg-tertiary p-2 rounded-md flex flex-col space-y-3'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-[#193A9F] rounded-lg p-2 outline-none"
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="border border-[#193A9F] rounded-lg p-2 outline-none"
            >
              <option value="listener">Listeners</option>
              <option value="artist">Artists</option>
              <option value="sponsor">Partners/Sponsors</option>
            </select>
            {errorMessage && (
              <p className="text-red-600 bg-white p-2 rounded-lg text-sm">{errorMessage}</p> 
            )}
          </div>
          <button
            type="submit"
            className="bg-tertiary text-white px-4 py-2 w-[200px] rounded-lg hover:bg-secondary self-center my-4"
          >
            Join Waitlist
          </button>
        </form>

        <ModalWrapper
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          email={submittedEmail}
          userType={userType}
        />

        {/* statistics */}
        <div className='block my-3'>
          <p className='text-black dark:text-white text-center font-semibold'>Join the <span className='text-tertiary dark:text-secondary font-bold'>2,000+</span> members who have already signed in</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
