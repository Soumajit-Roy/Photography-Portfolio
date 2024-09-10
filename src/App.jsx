import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Carousel from './components/carousel/carousel'
import ImgMediaCard from './components/cardsection/cards'
import About from './components/about/about'
import Contact from './components/contact/contactus'
import Footer from './components/footer/footer'

export default function App(){
  return(
    <>
    <Navbar />
    <Carousel />
    <ImgMediaCard />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

