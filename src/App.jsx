import './App.css'
import Navbar from './components/navbar/navbar'
import Carousel from './components/carousel/carousel'
import About from './components/about/about'
import Contact from './components/contact/contactus'
import Footer from './components/footer/footer'
import Cards from './components/cardsection/cards'


export default function App(){
  return(
    <>
    <Navbar />
    <Carousel />
    <Cards />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

