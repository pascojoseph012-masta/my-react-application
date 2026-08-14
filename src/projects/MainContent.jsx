import React, { useEffect, useRef, useState } from 'react'
import './MainContent.css'
import {motion, useAnimationControls, useInView} from 'framer-motion'

import MainTour from '../projects/MainTour'
import Nava from "../projects/Nava"
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
import logo from '../assets/10012.png'
import logoo from '../assets/10013.png'
import face from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import mapp from '../assets/10039.jpg'
import done from '../assets/10007.svg'
import phoneB from '../assets/phoneB.svg'
import smstar from '../assets/smstar.svg'
import smuserW from '../assets/smuserW.svg'
import smsunW from '../assets/smsunW.svg'
import smgroup from '../assets/smgroup.svg'
import smcamer from '../assets/smcamer.svg'
import { Content } from '../assets/ContentSilde'


const MainContent = () => {
const [index, setindex] = useState (0)

const buttonhandel = () =>{
  setindex((previndex)=>(previndex + 1) % InitialContent.length)

}

const buttonhandelprev = () =>{
  setindex((previndex)=>(previndex === 0 ?  InitialContent.length - 1 : previndex -1))

}
const InitialObject = InitialContent[index];
const [contentIndex , setcontentIndex] = useState(0)

const controls = useAnimationControls()
const render = Content[contentIndex]; 
const ref = useRef(null)
    const isInview = useInView(ref);
    
    const variants = {
      enter: (direction) => ({
        enter: direction > 0 ? 300 : -300,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },

      exit: (direction) =>({
        x: direction > 0 ? -300 : 300,
        opacity: 0
      })

    }

  return (
    
    <div>

        <Nava/>
        
          <div 
          
          className="mySlide">
            
            <div className="image-buttons">
              <button onClick={()=>buttonhandel()} type="button">Prev</button>
            <button onClick={()=>buttonhandelprev()} type="button">Next</button>
          </div>
          
           <img src={InitialObject.image}/>
            <motion.p 
            initial={{scale: 0.7, opacity: 1, y: 0  }}
            whileInView={{ opacity: 1,  scale: 1, y: 1}}
            transition={{ duration: -200, type: "spring" }}
            >{InitialObject.parg}</motion.p>
            <motion.h1 
            initial={{scale: 0.7, opacity: 1}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 1.10, type: "spring" }}
            >{InitialObject.header}</motion.h1 >
          </div>
          {/* MAIN INPUTS SECTION */}
          <motion.div 
          initial={{scale: 0.7, opacity: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 1.10, type: "spring" }}
          className="main-inputs">

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
          </motion.div>
          <motion.div 
          initial={{scale: 0.7, opacity: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 1.10, type: "spring" }}
          
          className="grid-cards">
            <div className="stuck-card">
              <div className="drop-card"></div>
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
           </motion.div>
           <motion.div 
           initial={{scale: 0.7, opacity: 0}}
           whileInView={{opacity: 1, scale: 1}}
           transition={{ duration: 1.10, type: "spring" }}
           className="raid-container">
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
           </motion.div>
           <MainTour/>
           <motion.div
           initial={{scale: 0.7, opacity: 0}}
           whileInView={{opacity: 1, scale: 1}}
           transition={{ duration: 1.10, type: "spring" }} 
           className="last-section">
            <div className="stuck-section">
              <div className="stuck-title">Testimonials</div>
              <p>Customer <span>Reviews</span></p>
              <div className="stuck-image"><img src={done} alt="done" /></div>
            </div>
            <div className="section-content">
              <div className="content-title">
                <img src={render.image} alt="phone" />
                <img src={render.image} alt="phone" />
                <img src={render.image} alt="phone" />
                <img src={render.image} alt="phone" />
                <img src={render.image} alt="phone" />

              </div>
              <div className="content-parg">
                <p>{render.description}</p>
              </div>
              <div className="last-title">
                <h1>{render.name}</h1>
                <span>{render.span}</span>
              </div>
            </div>
           </motion.div>
        <footer>
        <img src={mapp} alt="mapp" />
        <div className="footer-content">
         <div className="footer-card1">
          <img src={logo} alt="mapp" />
          <div className="title1"><h4><span>HoliDay Planners</span> sit amet consectetur adipisicing elit. Debitis quae reiciendis temporibus quo ut Lorem ipsum dolor sit amet consectetur, adipisicin </h4></div>
            <motion.div 
            initial={{scale: 0.7, opacity: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 1.10, type: "spring" }}
            className="input-footer">
              <input type="email" name="" placeholder="Enter Your Email" />
              <button type="button">Submit</button>
            </motion.div>
            <motion.div
            initial={{scale: 0.7, opacity: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 1.10, type: "spring" }}
             className="footer-img"><img src={logoo} alt="" /></motion.div>
         </div>
          <div className="footer-card2">
            <div className="title2"><motion.h1
              initial={{scale: 0.7, opacity: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 1.10, type: "spring" }}
            >navigation</motion.h1></div>
            <div className="lists">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Destination</li>
                <li>Tour</li>
                <li>Blogs</li>
                <li>Contact us</li>
              </ul>
            </div>
            
          </div>
          <div className="footer-card3">
            <div className="title3"><motion.h1 
              initial={{scale: 0.7, opacity: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 1.10, type: "spring" }}
            >need help ?</motion.h1></div>
            <div className="colum"><span>call us</span><h2>+2507888223635</h2></div><br />
            <div className="colum"><span>Email for us</span><h2>pascofreeguy@gmail.com</h2></div><br />
            <div className="colum"><span>Location</span><h2>Rwanda kigali/gikondo</h2></div><br />
            <div className="colum"><span>Follow us</span></div>
          </div>
        <motion.div
          initial={{scale: 0.7, opacity: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 1.10, type: "spring" }}
         className="footer-card4">
        <h1>Copyright@2026 <span>Bigbro code lab</span>. All Right Reserved</h1>
        <div className="stach">
          <div className="tach1">Privacy Policy</div>
          <div className="tach1">Terms Of Use</div>
          <div className="tach2">Terms Of Use</div>
        </div>
        </motion.div>
      
        </div>
      </footer>
      </div>
    
  )
}

export default MainContent