import React from 'react'

function Button({label , iconURL}) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red'>
      {label}

      <img src={iconURL} alt="arrow right icon" className='rounded-full ml-2 w-5 h-5'/>
    </button>
  )
}

export default Button