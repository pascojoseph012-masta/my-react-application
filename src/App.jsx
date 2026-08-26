import React, { useEffect, useState } from "react";
import{BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Nava from './projects/Nava';
import MainContent from './projects/MainContent'
import Links from './projects/Links'
import Prompt from './projects/prompt'
import MainTour from "./projects/MainTour"
import { TourContent } from "./assets/Tour"
import About from "./projects/pages/about";
import TourDetails from "./projects/pages/TourDetails";
import ToTop from "./projects/pages/ToTop";






const App = () => {
 const [popUpOption, setpopUpOption] = useState(false)
 const [search, setsearch] = useState(false)
 const OpenSearch = () => {
  console.log('button clicked');
  // setsearch(true)
 }
 
 const popUPOpen = () => {
  setpopUpOption(true)
  console.log('parent notified');
 }

 const closePopup = () => {
  setpopUpOption(false)

 }

  return (
    
     <Router>
      <Routes>
      <Route path="/" element={<MainContent/>}/>
      <Route path="/" element={<Links/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/TourDetails" element={<TourDetails/>}/>
      <Route path="/TourContent/:TourContentId" element={<TourDetails/>}/>
     
      </Routes>
      <div>
      
     <Nava popUPOpen={popUPOpen}/>
    {popUpOption &&  <Links closePopup={closePopup}/>}
    {search && <Prompt  OpenSearch={OpenSearch}/>}
      </div>
     </Router>
    
  );
};

export default App;