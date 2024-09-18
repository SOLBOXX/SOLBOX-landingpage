'use client'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); 
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <div className='max-w-full'>
      <nav className='bg-primary dark:bg-black px-2 mx-auto flex flex-grow justify-between w-4/5 lg:w-2/3 rounded-lg'>
      <i className='bx md:bx-sm bxs-color bx-spin-hover text-black dark:text-white self-center'></i>
      <div className="flex gap-3 md:gap-4 self-center">
        <Link href='/' className='text-tertiary dark:text-primary font-bold text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105'>Updates</Link>
        <Link href='/' className='text-tertiary dark:text-primary font-bold text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105'>FAQ</Link>
        <Link href='/' className='text-tertiary dark:text-primary font-bold text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105'>Contact Us</Link>
      </div>
      <button onClick={toggleDarkMode} className="p-2 rounded-lg">
        <i className={darkMode ? 'bx bx-sun text-white md:bx-sm' : 'bx bx-moon bx-sm'}></i>
      </button>
      </nav>
    </div>
  )
}
