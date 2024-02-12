import React from 'react'
import Button from '../Button'
import './navbar.css'

const Navbar = () => {
   return (
      <>
         <header className='bg-[#dbc5c0] h-14 flex justify-around items-center '>
            <div className="flex">
               <h3 className='text-4xl text-[#4a4e69] font-medium'>Gen</h3>
               <span className='text-xl font-normal text-[#4a4e69]'>Ai</span>
            </div>

            <div className='flex justify-between gap-6 items-center text-[#4a4e69] text-xl font-semibold max-md:hidden'>
               <p><a href="#home">Home</a></p>
               <p><a href="#wgpt3">What is GenAI?</a></p>
               <p><a href="#features">Case Studies</a></p>
               <p><a href="#blog">Library</a></p>
            </div>
            <Button name={"SignUp"} />
         </header>

      </>
   )
}

export default Navbar