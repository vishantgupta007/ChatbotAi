import React from 'react'

const Button = ({ name }) => {
   return (
      <button className="relative flex h-[40px] text-sm rounded-md w-40 items-center justify-center overflow-hidden bg-pink-500 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px] my-10">
         <span className="relative z-10 ">{name}</span>
      </button>
   )
}

export default Button