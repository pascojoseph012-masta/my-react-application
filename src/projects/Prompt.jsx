import React from 'react'
import './prompt.css'
import close2 from '../assets/close2.svg'
import logos from '../assets/10002.svg'



const prompt = () => {
  return (
    <div>
      <div className="containers">
        <div className="close-btn">
          <button type="button"> <img src={close2} alt="close2" /></button>
        </div>
        <div className="search-input">
            <input type="search" name="search" placeholder="Search" />
            
        </div>
         <div className="back-logos">
            <img src={logos} alt="logos" />
            </div>
      </div>
    </div>
  )
}

export default prompt