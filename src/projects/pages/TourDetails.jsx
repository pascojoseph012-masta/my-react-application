import React from 'react'
import './TourDetail.css'
import './TourDetailsResponsive.css'
import { Link, useParams } from 'react-router-dom'
import {motion, useAnimationControls, useInView} from 'framer-motion'
import { TourContent } from '../../assets/Tour';
import map from '../../assets/map.svg'
import calender from '../../assets/calender.svg'
import mapp from '../../assets/10039.jpg'
import user from '../../assets/user.svg'
import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'
import phoneB from '../../assets/phoneB.svg'
import emailB from '../../assets/emailB.svg'
import logo from '../../assets/10012.png'
import logoo from '../../assets/10013.png'
import face from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import MainContent from '../MainContent';
import location from '../../assets/location.svg'
import smuserW from '../../assets/smuserW.svg'
import smsunW from '../../assets/smsunW.svg'
import smgroup from '../../assets/smgroup.svg'
import smcamer from '../../assets/smcamer.svg'
import smlocation from '../../assets/smlocation.svg'
import sminfo from '../../assets/sminfo.svg'
import smclock from '../../assets/smclock.svg'
import drone from '../../assets/drone.mp4'


const TourDetails = () => {
  const {TourContentId} = useParams()
  const TourContents = TourContent.find((TourContent)=> TourContent.id === TourContentId)
  const {image, place} = TourContents
  
  return (
    <div className="main-details">
      <div className="main-Content">  
      <img src={image} alt="image" />
      <motion.h1
        initial={{scale: 0.7, opacity: 1}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 1.10, type: "spring" }}
      >{place}</motion.h1>
      </div>
      <div className="more-details">
        <div className="place-details">
          <motion.div 
            initial={{scale: 0.7, opacity: 1}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 1.10, type: "spring" }}
          className="top-links-colums">
            <div className="top-link"><img src={sminfo} alt="face" /> <Link to="#">Information</Link></div>
            <div className="top-link"><img src={map} alt="face" /> <Link to="#">Tour Plan</Link></div>
            <div className="top-link"><img src={location} alt="face" /> <Link to="#">Location</Link></div>
            <div className="top-link"><img src={smcamer} alt="face" /> <Link to="#">Gallery</Link></div>
            <div className="top-link"><img src={user} alt="face" /> <Link to="#">Review</Link></div>
          </motion.div>
        <div className="div place-content">
            <div className="content-title">
          <div className="this-content1">
              <motion.h1
              initial={{scale: 0.7, opacity: 1}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{ duration: 1.10, type: "spring" }}
              >A wonderful serenity has taken possession  of my entire soul</motion.h1>
            </div>
            <div className="this-content2">
              <motion.div 
              initial={{scale: 0.7, opacity: 1}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{ duration: 1.10, type: "spring" }}
              className="stuck"><p> 20% off</p></motion.div>
              <motion.div 
              initial={{scale: 0.7, opacity: 1, rotate: "0"}}
              whileInView={{opacity: 1, scale: 1, rotate: "360deg"}}
              transition={{ duration: 3.5, type: "spring", }}
              className="radius">
              <div className="radius1">$1200</div>
              <div className="radius2">Perperson</div>

              </motion.div>
            </div>
            
          </div>
            <motion.div
            initial={{scale: 0.7, opacity: 1}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 1.10, type: "spring" }}
            
            className="place-info">
              <div className="circle"><motion.img 
               initial={{scale: 0.7, opacity: 1, rotate: "0"}}
              whileInView={{opacity: 1, scale: 1, rotate: "360deg"}}
              transition={{ duration: 3.5, type: "spring" }}
              src={smclock} alt="email" /> <span>2 days</span></div>
              <div className="circle"><img src={smgroup} alt="email" /> <span>6 Peaple</span></div>
              <div className="circle"><img src={smuserW} alt="email" /> <span>18</span></div>
              <div className="circle"><img src={smlocation} alt="email" /> <span>Greece</span></div>
              <div className="circle"><motion.img 
              initial={{scale: 0.7, opacity: 1, rotate: "0"}}
              whileInView={{opacity: 1, scale: 1, rotate: "360deg"}}
              transition={{ duration: 3.5, type: "spring" }}
              src={smsunW} alt="email" /> <span>Discovery</span></div>

            </motion.div>
            <motion.div
            initial={{scale: 0.7, opacity: 1, x: -100}}
            whileInView={{opacity: 1, scale: 1, x: 0}}
            transition={{ duration: 1.10, type: "spring" }}
            
            className="banch-parg">
              <h1>I should be incapable of drawing a single sroke at the present moment; and yet i feel that i never 
                was a greater artist than now. When while the lovely valley teems with capour around me around and the meridian sun strike the  epper surface of the impenetrable folige of my trees and few stray fleams.
              </h1>
               <h1>I should be incapable of drawing a single sroke at the present moment; and yet i feel that i never 
                was a greater artist than now. When while the lovely valley teems with capour around me around and the meridian sun strike the  epper surfacethe Almaighty whom formed us in his own image and the breath .
              </h1>
            </motion.div>
            <motion.div
            initial={{ opacity: 1, x: 100}}
              whileInView={{opacity: 1,  x: 0}}
              transition={{ duration: 1.10, type: "spring" }}
             className="dron-video">
              <video src={drone} loop autoPlay controls muted className="back-clip "></video>

            </motion.div>







          </div>
        </div>
        <div className="form-grab">
          <motion.div 
           initial={{scale: 0.7, opacity: 0, y: -100}}
           whileInView={{opacity: 1, scale: 1, y: 0}}
           transition={{ duration: 1.10, type: "spring" }}
          className="form-card">
            <motion.div
             initial={{scale: 0.7, opacity: 0, x: 100}}
           whileInView={{opacity: 1, scale: 1, x: 0}}
           transition={{ duration: 1.10, type: "spring" }} 
             className="this-title"><p>Book This Tour</p></motion.div>
            <motion.div
             initial={{scale: 0.7, opacity: 0, x: 100}}
           whileInView={{opacity: 1, scale: 1, x: 0}}
           transition={{ duration: 1.10, type: "spring" }} 
             className="inpitA"> <img src={user} alt="map"/> <input type="text" name="text" placeholder="Full name *" /> </motion.div>
            <motion.div
             initial={{scale: 0.7, opacity: 0, x: 100}}
           whileInView={{opacity: 1, scale: 1, x: 0}}
           transition={{ duration: 1.10, type: "spring" }} 
             className="inpitA"> <img src={email} alt="map"/> <input type="email" name="text" placeholder="Email *" /> </motion.div>
            <motion.div
             initial={{scale: 0.7, opacity: 0, x: 100}}
           whileInView={{opacity: 1, scale: 1, x: 0}}
           transition={{ duration: 1.10, type: "spring" }} 
             className="inpitA"> <img src={email} alt="map"/> <input type="email" name="text" placeholder=" Confirm Email *" /> </motion.div>
            <motion.div
             initial={{scale: 0.7, opacity: 0, x: 100}}
           whileInView={{opacity: 1, scale: 1, x: 0}}
           transition={{ duration: 1.10, type: "spring" }} 
             className="inpitA"> <img src={phone} alt="map"/> <input type="number" name="text" placeholder=" Phone *" /> </motion.div>
            <motion.div
             initial={{scale: 0.7, opacity: 0, x: 100}}
           whileInView={{opacity: 1, scale: 1, x: 0}}
           transition={{ duration: 1.10, type: "spring" }} 
             className="inpitA"> <img src={calender} alt="map"/> <input type="datetime-local" name="text"  /> </motion.div>
              <motion.textarea 
               initial={{scale: 0.7, opacity: 0, x: 100}}
                whileInView={{opacity: 1, scale: 1, x: 0}}
                transition={{ duration: 1.10, type: "spring" }} 
              name="massae" placeholder="massage"></motion.textarea> 
                
              <motion.button 
              nitial={{scale: 0.7, opacity: 0, x: 100}}
              whileInView={{opacity: 1, scale: 1, x: 0}}
              transition={{ duration: 1.10, type: "spring" }} 
              
              type="button" className="book now">Book now</motion.button>
              
          </motion.div>
            <div className="form-other-detail">
              <motion.div 
              initial={{ opacity: 0, x: 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{ duration: 1.10, type: "spring" }} 
              className="why-card">

                <div className="why-title"><p>Why Book with Us</p></div>
                <div className="why-details">
                  <ul>
                    <li>Best Price Guarantee</li>
                    <li>Customer Care available 24/7</li>
                    <li>Free Travel Insurence</li>
                    <li>Hand-picked Tours & Activities</li>
                    <li>Best Developers of all time</li>
                  </ul>
                </div>

              </motion.div>
              
            </div>

            <motion.div
             initial={{ opacity: 0, x: -100}}
           whileInView={{opacity: 1, x: 0}}
           transition={{ duration: 1.10, type: "spring" }}   
            className="prob-card">
                <img src={mapp} alt="mapp" />
              <div className="prob-detail">
                <div className="prob-title"><p>GET A QUESTION</p></div>
                <div className="prob-desc"><h5>Do Not Hesitage To Give Us A Call We Are 
                  an Expert team and We are happy To talk to you</h5></div>
                  <div className="prob-email"><img src={emailB} alt="calender" /><p> HolidayPlanners@gmail.com</p></div>
                  <div className="prob-phone"><img src={phoneB} alt="calender" /><p> +250788223635</p></div>
              </div>
              </motion.div>
        </div>

      </div>
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

export default TourDetails