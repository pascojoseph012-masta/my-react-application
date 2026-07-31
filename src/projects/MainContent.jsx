import React, { useEffect, useState } from 'react'
import './MainContent.css'
import kigali from'../assets/kigali.jpg'
import fimage from '../assets/10015.jpg'
import simage from '../assets/10014.jpg'
import rimage from '../assets/10016.jpg'
import location from '../assets/location.svg'
import calender from '../assets/calender.svg'
import map from '../assets/map.svg'
import card1 from '../assets/10017.jpg'
import card2 from '../assets/10018.jpg'
import drop from '../assets/10003.svg'
import {InitialContent} from '../assets/slide' 
import { area } from 'framer-motion/client';
import greece from '../assets/10020.jpg'
import budda from '../assets/10022.jpg'
import hill from '../assets/10021.jpg'

const MainContent = () => {
const [index, setindex] = useState (0)

const buttonhandel = () =>{
  setindex((previndex)=>(previndex + 1) % InitialContent.length)

}

const buttonhandelprev = () =>{
  setindex((previndex)=>(previndex === 0 ?  InitialContent.length - 1 : previndex -1))

}

const InitialObject = InitialContent[index];
 
  return (
    
    <div>

        
          <div className="mySlide">
            <div className="image-buttons">
              <button onClick={()=>buttonhandel()} type="button">Prev</button>
            <button onClick={()=>buttonhandelprev()} type="button">Next</button>
              </div>
           <img src={InitialObject.image}/>
            <p >{InitialObject.parg}</p>
            <h1 >{InitialObject.header}</h1 >
          </div>
          {/* MAIN INPUTS SECTION */}
          <div className="main-inputs">

            <div className="input1"><img src={location} alt="location" /><input type="text" name="text" placeholder="Where to?" /></div>
            <div className="input2">
              <img src={calender} alt="calender" />
              <select name="name" >
                <option value="">When To?</option>
                <option value="january">january</option>
                <option value="february">february</option>
                <option value="march">march</option>
                <option value="aplir">aplir</option>
                <option value="may">may</option>
                <option value="june">june</option>
                <option value="july">july</option>
                <option value="august">august</option>
                <option value="september">september</option>
                <option value="octomber">octomber</option>
                <option value="november">november</option>
                <option value="dicember">dicember</option>
              </select>
            </div>
            <div className="input3">
              <img src={map} alt="map" />
              <select name="name" value="Travle Type">
                <option value="">Travle type</option>
                <option value="Cultural">Cultural</option>
                <option value="Adventual">Adventual</option>
                <option value="Historical">Historical</option>
                <option value="Seaside">Seaside</option>
                <option value="Discovery">Discovery</option>
              </select>
            </div>
            <button type="button">FIND NOW</button>
          </div>
          <div className="grid-cards">
            <div className="stuck-card">
              <div className="drop-card"><img src={drop} alt="drop" /></div>
              <div className="card1"><img src={card1} alt="card1" /></div>
              <div className="card2"><img src={card2} alt="card2" /></div>
            </div>
            <div className="card-content">
              <div className="heading"><p>About Us</p></div>
              <div className="pragraph">Plan Your <span>Trip</span> With <span>Us</span></div>
              <div className="description">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
                  river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
                  about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
              </div>
              <div className="this-btn">
                <button type="button">READ MORE</button>
              </div>
              
            </div>
           </div>
           <div className="raid-container">
            <div className="raid-content">
              <div className="headings"><p>Amazing Destination</p></div>
              <div className="raid-parg"><h1>Choose The <span>Destination</span> Just</h1></div>
              <div className="raid-head"><h1>Right For <span>Your Vacation</span></h1></div>
            </div>
            <div className="raid-grid-card">
              <div className="box" style={{gridArea: 'box1', minHeight: '160%', width: '44.5em'}}>
                <div className="card-image1"><img src={greece} alt="greece" /> <button type="button">Greece</button></div>
              </div>
              <div className="box" style={{gridArea: 'box2', minHeight: '114.5%', width: '25em'}}>
                <div className="card-image2"><img src={budda} alt="budda" /><button type="button">India</button></div>
              </div>
              <div className="box" style={{gridArea: 'box3', minHeight: '140%', width: '22em'}}>
                <div className="grid-image3"><img src={fimage} alt="fimage" /><button type="button">Thailand</button></div>
              </div>
              <div className="box" style={{gridArea: 'box4', minHeight: '140%', width: '22em'}}>
                <div className="card-imge4"><img src={hill} alt="hill" /><button type="button">Switzerland</button></div>
              </div>
            </div>
            <button type="button" className="veiw">Veiw ALL</button>
           </div>
           
      </div>
    
  )
}

export default MainContent