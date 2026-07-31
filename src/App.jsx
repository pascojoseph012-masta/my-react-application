import React, { useEffect, useState } from "react";
import{BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Nava from './projects/Nava';
import MainContent from './projects/MainContent'
import Links from './projects/Links'
import Prompt from './projects/prompt'
import ProductCard from "./compnent/ProductCard";
import MainTour from "./projects/MainTour"


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
        
      </Routes>
      <div>
     <Nava popUPOpen={popUPOpen}/>
      <MainContent/>
      
    {popUpOption &&  <Links closePopup={closePopup}/>}

    {search && <Prompt  OpenSearch={OpenSearch}/>}
    <MainTour/>

      </div>
     </Router>
    
  );
};

export default App;