import React from "react";
import { useState } from "react";

export default function Collapsible(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleSection = () => {
        setIsOpen(!isOpen);
        };

    return(
        <div className="section">
        <div className="section-header" onClick={toggleSection}>
          Section 1 {isOpen ? '▲' : '▼'}
        </div>
        {isOpen && (
          <div className="section-content">
            {/* Place your images or other content here */}
            <img src="image1.png" alt="IMG1" />
            <img src="image2.png" alt="IMG2" />
            <img src="image3.png" alt="IMG3" />
          </div>
        )}
      </div>
    )
}