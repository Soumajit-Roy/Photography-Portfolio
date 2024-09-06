import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Carousel from './components/carousel/carousel'
import Collapsible from './components/collapsible/collapsible'

export default function App(){
  return(
    <>
    <Navbar />
    <Carousel />
    <Collapsible />
    </>
  )
}

