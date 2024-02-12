import React from 'react'
import "./style.css"
import { Typewriter } from "react-simple-typewriter";
import people from "../../assets/people.png"
import chat from "../../assets/chat.png"
import Button from '../Button'


const Header = () => {
   return (
      <div className="gpt3__header section__padding" id="home">
         <div className="gpt3__header-content">
            <h3
               className="gradient__text 
               bg-gradient-to-r from-purple-800 via-red-400 to-indigo-400 inline-block text-transparent bg-clip-text hero-section">
               Empower your business with GenAI making your operations {""}
               <span className='typewriter'>
                  <Typewriter
                     words={[
                        "Smoother",
                        "Better",
                        "Smarter",
                        "Efficient",

                     ]}
                     loop={true}
                     cursor
                     cursorStyle="_"
                     cursorColor="#fca311"
                     typeSpeed={80}
                     deleteSpeed={80}
                     delaySpeed={1000}
                  />
               </span>
            </h3>
            <p>Meet GenAI, Your Business's Intelligent Sidekick - Elevate Customer Experiences and Boost Efficiency with our Advanced Chatbot Solutions!</p>


            <div className="gpt3__header-content__people">
               <p>In the last 24 hours, Thousands of people have shown interest in exploring our chatbot </p>

               <img src={people} />
               <Button name={"Explore More"} />
            </div>

         </div>
         <div className="gpt3__header-image">
            <img src={chat} />
         </div>

      </div>
   )
}

export default Header