import React from 'react';
import './Gallery.css';
import Galler_1B from '../../img/Gallery_1B.png';
import Gallery_LightRoom from '../../img/Gallery_LightRoom.png';
import Galler_2B from '../../img/Gallery_2B.png';
import Gallery_LightRoom2 from '../../img/Gallery_LightRoom2.png';

function Gallery() {
  return (
    <div className="flex flex-column">
      <div>
        <h2 className="services-header">Our Gallery......</h2>
      </div>
      <div className="flex flex-column">
        <div className="flex justify-content-center">
          <div className="gallery-img-wrapper">
            <img className="gallery-img" src={Galler_1B} alt="gallery-img-1" />
          </div>
          <div className="gallery-img-wrapper">
            <img
              className="gallery-img"
              src={Gallery_LightRoom}
              alt="gallery-img-2"
            />
          </div>
        </div>
        <div className="flex justify-content-center">
          <div className="gallery-img-wrapper">
            <img className="gallery-img" src={Galler_2B} alt="gallery-img-3" />
          </div>
          <div className="gallery-img-wrapper">
            <img
              className="gallery-img"
              src={Gallery_LightRoom2}
              alt="gallery-img-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
