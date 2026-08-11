import React, { useEffect } from 'react'
import { useFeffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TourContent } from '../../assets/Tour';

const ToTop = () => {
    const {TourContent} = useLocation()
    useEffect(()=> {
        console.log(TourContent);
        window.scrollTo(0,0);
    },[TourContent]);
  return (
    <div>ToTop</div>
  )
}

export default ToTop