'use client'

import React, { useState } from 'react';
import ModalWrapper from '../component/ModalWrapper';

const Page: React.FC = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('listener');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('Please provide a valid email');
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
        setEmail('');
        setShowModal(true);
      } else {
        alert('There was an issue registering, please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className='flex gap-2'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-[#193A9F] rounded-lg p-2"
        />
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="border border-[#193A9F] rounded-lg p-2"
        >
          <option value="listener">Listener</option>
          <option value="artist">Artist</option>
          <option value="sponsor">Sponsor</option>
        </select>
        </div>
        <button
          type="submit"
          className="bg-[#041C62] text-white px-4 py-2 w-[200px] rounded-lg hover:bg-[#193A9F] self-center my-2"
        >
          Join Waitlist
        </button>
      </form>

      <ModalWrapper
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        userType={userType}
      />

      {/* statistics
      <div className='block'>
        <p className='text-black text-center'>Join the <span className='text-[#041C62]'>2,000+</span> members who have already signed in</p>
      </div> */}

    </div>
  );
};

export default Page;
