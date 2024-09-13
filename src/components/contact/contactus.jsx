import React from 'react'

import './contactus.css'

const Contact = () => {
  return (
    <>
         <div className="headings" id='contact-tag'>
        <h2>Contact Us</h2>
      </div>
      <div className='contact-card' >
        <a href='#'>
          <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/facebook-circled.png" alt="facebook-circled"></img>
        </a>
        <a href='#'>
        <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/whatsapp.png" alt="whatsapp"></img>
        </a>
        <a href='#'>
        <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/instagram-new.png" alt="instagram-new"></img>
        </a>
        <a href='#'>
        <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/call.png" alt="call"></img>
      </a>
      </div>
    </>
  )
}

export default Contact