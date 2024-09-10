import React from 'react'

import './contactus.css'

const Contact = () => {
  return (
    <>
         <div className="headings">
        <h2>Contact Us</h2>
      </div>
      <div className='contact-card'>
        <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/facebook-circled.png" alt="facebook-circled"></img>
        <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/whatsapp.png" alt="whatsapp"></img>
        <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/instagram-new.png" alt="instagram-new"></img>
        <img className="hvr-pulse-grow" src="https://img.icons8.com/3d-fluency/375/call.png" alt="call"></img>
      </div>
    </>
  )
}

export default Contact