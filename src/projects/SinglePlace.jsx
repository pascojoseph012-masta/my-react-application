import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {TourContent} from '../assets/Tour'
import MainTour from '../projects/MainTour'

const SinglePlace = () => {

    
  const singleTour = TourContent.find((TourContent) => TourContent)
  const { place, title, description, duration, groupsize, price} = singleTour


  return (
    <div>
        <section>
            <img src={singleTour.image} alt="" />
            <h1>{singleTour.place}</h1>
        </section>
    </div>
  )
}

export default SinglePlace