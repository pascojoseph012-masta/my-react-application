import React from 'react'
import './TourDetail.css'
import { Link, useParams } from 'react-router-dom'
import { TourContent } from '../../assets/Tour';

const TourDetails = () => {
  const {TourContentId} = useParams()
  const TourContents = TourContent.find((TourContent)=> TourContent.id === TourContentId)
  const {image, place} = TourContents
  
  return (
    <div className="main-details">
      <div className="main-Content">
      <img src={image} alt="image" />
      <h1>{place}</h1>
      TourDetails
      </div>
    </div>
  )
}

export default TourDetails