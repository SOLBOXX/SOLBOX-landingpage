import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between bottom-0 text-tertiary dark:text-white text-sm px-4 py-2 font-bold'>
        <div className='flex gap-2 '>
            <p>&copy;SOLBOX </p>
            <p> {new Date().getFullYear()} </p>
        </div>
        <p>All rights reserved</p>
    </div>
  )
}
