import React from 'react'
import './TourDetail.css'
import { Link, useParams } from 'react-router-dom'
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


const TourDetails = () => {
  const {TourContentId} = useParams()
  const TourContents = TourContent.find((TourContent)=> TourContent.id === TourContentId)
  const {image, place} = TourContents
  
  return (
    <div className="main-details">
      <div className="main-Content">  
      <img src={image} alt="image" />
      <h1>{place}</h1>
      </div>
      <div className="more-details">
        <div className="place-details">
          <div className="top-links-colums">
            <div className="top-link"><img src={sminfo} alt="face" /> <Link to="#">Information</Link></div>
            <div className="top-link"><img src={map} alt="face" /> <Link to="#">Tour Plan</Link></div>
            <div className="top-link"><img src={location} alt="face" /> <Link to="#">Location</Link></div>
            <div className="top-link"><img src={smcamer} alt="face" /> <Link to="#">Gallery</Link></div>
            <div className="top-link"><img src={user} alt="face" /> <Link to="#">Review</Link></div>
          </div>
        <div className="div place-content">
            <div className="content-title">
          <div className="this-content1">
              <h1>A wonderful serenity has taken possession  of my entire soul</h1>
            </div>
            <div className="this-content2">
              <div className="stuck"><p> 20% off</p></div>
              <div className="radius">
              <div className="radius1">$1200</div>
              <div className="radius2">Perperson</div>

              </div>
            </div>
            
          </div>
            <div className="place-info">
              <div className="circle"><img src={smclock} alt="email" /> <span>2 days</span></div>
              <div className="circle"><img src={smgroup} alt="email" /> <span>6 Peaple</span></div>
              <div className="circle"><img src={smuserW} alt="email" /> <span>18</span></div>
              <div className="circle"><img src={smlocation} alt="email" /> <span>Greece</span></div>
              <div className="circle"><img src={smsunW} alt="email" /> <span>Discovery</span></div>

            </div>
            <div className="banch-parg">
              <h1>I should be incapable of drawing a single sroke at the present moment; and yet i feel that i never 
                was a greater artist than now. When while the lovely valley teems with capour around me around and the meridian sun strike the  epper surface of the impenetrable folige of my trees and few stray fleams.
              </h1>
               <h1>I should be incapable of drawing a single sroke at the present moment; and yet i feel that i never 
                was a greater artist than now. When while the lovely valley teems with capour around me around and the meridian sun strike the  epper surfacethe Almaighty whom formed us in his own image and the breath .
              </h1>
            </div>








          </div>
        </div>
        <div className="form-grab">
          <div className="form-card">
            <div className="this-title"><p>Book This Tour</p></div>
            <div className="inpitA"> <img src={user} alt="map"/> <input type="text" name="text" placeholder="Full name *" /> </div>
            <div className="inpitA"> <img src={email} alt="map"/> <input type="email" name="text" placeholder="Email *" /> </div>
            <div className="inpitA"> <img src={email} alt="map"/> <input type="email" name="text" placeholder=" Confirm Email *" /> </div>
            <div className="inpitA"> <img src={phone} alt="map"/> <input type="number" name="text" placeholder=" Phone *" /> </div>
            <div className="inpitA"> <img src={calender} alt="map"/> <input type="datetime-local" name="text"  /> </div>
              <textarea name="massae" placeholder="massage"></textarea> 
                
              <button type="button" className="book now">Book now</button>
              
          </div>
            <div className="form-other-detail">
              <div className="why-card">

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

              </div>
              
            </div>

            <div className="prob-card">
                <img src={mapp} alt="mapp" />
              <div className="prob-detail">
                <div className="prob-title"><p>GET A QUESTION</p></div>
                <div className="prob-desc"><h5>Do Not Hesitage To Give Us A Call We Are 
                  an Expert team and We are happy To talk to you</h5></div>
                  <div className="prob-email"><img src={emailB} alt="calender" /><p> HolidayPlanners@gmail.com</p></div>
                  <div className="prob-phone"><img src={phoneB} alt="calender" /><p> +250788223635</p></div>
              </div>
              </div>
        </div>

      </div>
      <footer>
        <img src={mapp} alt="mapp" />
        <div className="footer-content">
         <div className="footer-card1">
          <img src={logo} alt="mapp" />
          <div className="title1"><h4><span>HoliDay Planners</span> sit amet consectetur adipisicing elit. Debitis quae reiciendis temporibus quo ut Lorem ipsum dolor sit amet consectetur, adipisicin </h4></div>
            <div className="input-footer">
              <input type="email" name="" placeholder="Enter Your Email" />
              <button type="button">Submit</button>
            </div>
            <div className="footer-img"><img src={logoo} alt="" /></div>
         </div>
          <div className="footer-card2">
            <div className="title2"><h1>navigation</h1></div>
            <div className="lists">
              <ul>
                <Link to="/" element={<MainContent/>}> <li>Home</li></Link>
                
                <li>About</li>
                <li>Destination</li>
                <li>Tour</li>
                <li>Blogs</li>
                <li>Contact us</li>
              </ul>
            </div>
            
          </div>
          <div className="footer-card3">
            <div className="title3"><h1>need help ?</h1></div>
            <div className="colum"><span>call us</span><h2>+2507888223635</h2></div><br />
            <div className="colum"><span>Email for us</span><h2>pascofreeguy@gmail.com</h2></div><br />
            <div className="colum"><span>Location</span><h2>Rwanda kigali/gikondo</h2></div><br />
            <div className="colum"><span>Follow us</span></div>
          </div>
        <div className="footer-card4">
        <h1>Copyright@2026 <span>Bigbro code lab</span>. All Right Reserved</h1>
        <div className="stach">
          <div className="tach1">Privacy Policy</div>
          <div className="tach1">Terms Of Use</div>
          <div className="tach2">Terms Of Use</div>
        </div>
        </div>
      
        </div>
      </footer>
    </div>
  )
}

export default TourDetails