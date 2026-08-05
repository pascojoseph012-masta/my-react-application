import React from 'react';
import { Link } from 'react-router-dom'
import  './Nav.css'
import logo from '../assets/10001.png'
import  bar from '../assets/bar.svg'
import search from '../assets/search.svg'
const Nava = ({popUPOpen,  OpenSearch}) => {
  return (
    <div className='nav-container'>

        <nav>

            <div className="logo"><img src={logo} alt="logos" />  </div>
            <div className="content-nav">
            <div className="nav-btn"><Link to="#">Reserve</Link></div>

            <div className="nav-buttons">
              <div className="nav-search"><Link to="#"><button onClick={()=>OpenSearch()}><img src={search} alt="search" /></button></Link></div>
            <div className="nav-links"><Link to="#"><button onClick={()=>popUPOpen()}><img src={bar} alt="bar" /></button></Link></div>
            </div>
            </div>
        </nav>

    </div>
  )
}

export default Nava