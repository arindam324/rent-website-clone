import React, { useState } from 'react';
import Image from 'next/image';

const Card = ({ title, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrevClick = () => {
//     setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
//   };

//   const handleNextClick = () => {
//     setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
//   };

  return (
    <div className="card">
      <div className="card-image">
        <div className="card-controls">
          <button className="card-prev" onClick={handlePrevClick}>
            &lt;
          </button>
          <button className="card-next" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
      <div className="card-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
