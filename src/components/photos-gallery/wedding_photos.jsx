import React from 'react'
import './gallery.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Component, useEffect } from 'react'
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';
import Carousel from '../carousel/carousel'

const Wedding_photos = () => {

    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
          itemSelector: '.gallery__item',
          rowHeight: 180,
          lastRow: 'start',
          gutter: 2,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
      }, []);

  return (
    <div className='container'>
    <Navbar />
    <Carousel />
    <div className='headings'>
    <h2>Photos</h2>
    </div>

    <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={'nature'}
        autoplayFirstVideo={false}
        elementClassNames={'gallery'}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}
      >
        <a
          data-lg-size="1500-1000"
          data-pinterest-text="Pin it2"
          data-tweet-text="lightGallery slide  2"
          className="gallery__item"
          data-src="/c-images/c1.webp"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img
            className="img-responsive"
            src="/c-images/c1.webp"
          />
        </a>
        <a
          data-lg-size="946-1324"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/c-images/c2.webp"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className="img-responsive"
            src="/c-images/c2.webp"
          />
        </a>
        <a
          data-lg-size="1000-1332"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/c-images/c3.webp"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className="img-responsive"
            src="/c-images/c3.webp"
          />
        </a>
        <a
          data-lg-size="1280-853"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/c-images/c4.webp"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img
            className="img-responsive"
            src="/c-images/c4.webp"
          />
        </a>
        <a
          data-lg-size="821-1232"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/c-images/c5.webp"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className="img-responsive"
            src="/c-images/c5.webp"
          />
        </a>
        <a
          data-lg-size="1299-866"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/c-images/c6.webp"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className="img-responsive"
            src="/c-images/c6.webp"
          />
        </a>
        </LightGallery>

    <Footer />
    </div>
  )
}

export default Wedding_photos