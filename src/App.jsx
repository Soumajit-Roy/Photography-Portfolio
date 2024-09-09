import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Carousel from './components/carousel/carousel'
import ImgMediaCard from './components/cardsection/cards'

export default function App(){
  return(
    <>
    <Navbar />
    <Carousel />
    <ImgMediaCard />
    </>
  )
}

