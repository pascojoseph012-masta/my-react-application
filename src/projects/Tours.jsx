import React from 'react'
import {motion, useAnimationControls, useInView} from 'framer-motion'
import  { use, useState } from 'react'
import { Link } from 'react-router-dom'
import './Tours.css'
import './ToursResiponsive.css'
import map from '../assets/map.svg'
import calender from '../assets/calender.svg'
import mapp from '../assets/10039.jpg'
import user from '../assets/user.svg'
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'
import phoneB from '../assets/phoneB.svg'
import emailB from '../assets/emailB.svg'
import logo from '../assets/10012.png'
import logoo from '../assets/10013.png'
import face from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import MainContent from './MainContent';
import location from '../assets/location.svg'
import smuserW from '../assets/smuserW.svg'
import smsunW from '../assets/smsunW.svg'
import smgroup from '../assets/smgroup.svg'
import smcamer from '../assets/smcamer.svg'
import smlocation from '../assets/smlocation.svg'
import sminfo from '../assets/sminfo.svg'
import smclock from '../assets/smclock.svg'
import drone from '../assets/drone.mp4'
import tour from '../assets/10015.jpg'
import search from '../assets/search.svg'
import smsearch from '../assets/smsearch.svg'
import smcalender from '../assets/smcalender.svg'
import {TourContent} from '../assets/Tour'
import smphone from '../assets/smphone.svg'
import smemail from '../assets/smemail.svg'
import { div } from 'framer-motion/client';
import back from '../assets/back.jpg'

const Tour = () => {
  return (
    <div>
      <div className="landing">
        <img src={back} alt="tour" />
        <h1>Tours</h1>
        <div className="second-landing">
          <div className="details-tour">
            <motion.div 
            initial={{scale: 0.7, opacity: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 1.10, type: "spring", }}
            className="filter-card">
              <div className="this">Sort By :</div>
              <div className="this">
                <select name="d" id="">
                  <option value="">Release Date</option>
                </select>
                </div>
              <div className="this">
                <select name="d" id="">
                  <option value="">Release Date</option>
                </select>

              </div>
              
            </motion.div>
          {/* division of filter results */}

            <motion.div
            initial={{scale: 0.7, opacity: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 1.10, type: "spring", }}
            
            className="filter-results">
              <div className="card-holder-tour">
               {TourContent.map((TourContent)=>{
                return <div>
                  <img src={TourContent.image} alt="" />
                  <div className="down-holder">
                    <div className="place">{TourContent.place}</div>
                    <div className="paragraph">{TourContent.title}</div>
                    <div className="description">{TourContent.description}</div>
                    <div className="grid-sec"> <div className="duration_icon"> <img src={TourContent.duration_icon} alt="" /> <p>{TourContent.duration}</p></div> 
                    <div className="group_icon"> <img src={TourContent.groupsize_icon} /> <p>{TourContent.groupsize}</p></div></div>
                    <div className="grid-sec2"><p>{TourContent.price}</p> 
                    <Link to={`/TourContent/${TourContent.id}`}>BOOK NOW</Link></div>   

                  </div>
                 </div>
               })}

               

              </div>

            
            </motion.div>
              
              <div className="next-btns">
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">&rarr;</button>

              </div>

          </div>
          {/* this is the left details division */}
          <div className="left-details">
               <div className="left-side-holder">
               <div className="form-grab-holder">

               <div className="top-title"><h2>FIND YOUR TOUR</h2></div>
               <div className="form-section">

                < motion.div
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }}  
                 className="input-col"><img src={smsearch} alt="" /> <input type="text" name="name" placeholder="Search Tour*" /></motion.div>
                <motion.div 
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                 className="input-col"><img src={location} alt="" /> <input type="text" name="name" placeholder="Search Tour*" /></motion.div>
                <motion.div
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }}  
                 className="input-col"><img src={smcalender} alt="" /> <input type="text" name="name" placeholder="Search Tour*" /></motion.div>
                <motion.div 
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                 className="input-col4"> <div className="title-lable"> <h4>Duration</h4></div> <input type="text" name="name" placeholder="Any" /> </motion.div>
                <motion.div 
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                className="input-col5"> 
                  <div className="contain">
                    <div className="title-label5">Min Price</div>
                  <input type="text" name="" placeholder="1" />
                  </div>
                  
                  <div className="contain">
                  <div className="title-label5">Max Price</div>
                  <input type="text" name="" placeholder="100" />
                  </div>
                </motion.div>
                 
                <motion.div
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                  className="input-col6"> <input type="checkbox" name="" placeholder="Cultural" /> <label for="Cultural">Cultural</label> </motion.div>
                 <motion.div
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }}  
                 className="input-col6"> <input type="checkbox" name="" placeholder="Cultural" /> <label for="Cultural">Adventule</label> </motion.div>
                 <motion.div 
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                 className="input-col6"> <input type="checkbox" name="" placeholder="Cultural" /> <label for="Cultural">Historical</label> </motion.div>
                 <motion.div 
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                 className="input-col6"> <input type="checkbox" name="" placeholder="Cultural" /> <label for="Cultural">Seaside</label> </motion.div>
                 <motion.div 
                  initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                className="input-col6"> <input type="checkbox" name="" placeholder="Cultural" /> <label for="Cultural">Descovery</label> </motion.div>

                <motion.div 
                 initial={{scale: 0.7, opacity: 0, x: 100}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{ duration: 1.10, type: "spring" }} 
                className="submit-btns"> <button type="button">FIND NOW</button> </motion.div>
                  
               </div>

               </div>

               {/* more infomation obout form */}
                <motion.div
                initial={{ opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 1.10, type: "spring" }} 
                 className="why-holder">
                  <div className="why-title"><h2>WHY BOOK WHITH US ?</h2></div>
                  <div className="list-card">
                    <ul>
                      <li>Best Price Gruaratee </li>
                      <li>Customer Care Availabale 24 /7 </li>
                      <li>Free Travel Insureance </li>
                      <li>Hand-Picked Tours & Activities </li>
                    </ul> 
                  </div>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 1.10, type: "spring" }} 
                className="brob-holder">
                  <img src={mapp} alt="mapp" />
                  <div className="brob-title"><h2>GET QUESTION?</h2></div>
                  <div className="brob-description">
                    <h2>Do not hesitage to Give us a call We are an expert team and we are happy to talk to you</h2>
                  </div>
                  
                  <div className="calls-info"><img src={smemail} alt="" /><h2>pascofreeguy012@gmail.com</h2></div> <br />
                  <div className="calls-info1"><img src={smphone} alt="" /><h2>+250734226329</h2></div>




                </motion.div>
                {/* next broblem card contuieng */}
               </div>
              

          </div>
        </div>
        {/* footer section and footer contents */}

         <footer>
        <img src={mapp} alt="mapp" style={{maxHeight: "70vh"}}/>
        <div className="footer-content">
         <div className="footer-card1">
          <img src={logo} alt="mapp"  />
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
          style={{fontSize: "2.4rem"}}
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
          style={{fontSize: "2.4rem"}}
            >need help?</motion.h1></div>
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
        <h2 style={{color: "white"}}>Copyright@2026 <span style={{color: "#C29D59"}}>Bigbro code lab</span>. All Right Reserved</h2>
        <div className="stach">
          <div className="tach1">Privacy Policy</div>
          <div className="tach1">Terms Of Use</div>
          <div className="tach2">Terms Of Use</div>
        </div>
        </motion.div>
      
        </div>
      </footer>
       
      </div>

      
    </div>
  )
}

export default Tour