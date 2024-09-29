'use client';

import React, { useState, useEffect } from 'react';


interface FormErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    validateForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const validateForm = () => {
    const errors: FormErrors = {}; 

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submit action

    if (isFormValid) {
      console.log('Form submitted successfully!', { email, password });
      // Perform login action or API call here
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/darkbg.png')] bg-cover bg-center">
      <h1 className="font-bold text-[28px] leading-10 text-center pY-5 text-white">LOG INTO SOLBOX</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-[10px] w-full"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded-[10px] w-full"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </div>
        <div>
            <input 
                type='checkbox'
            />
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
