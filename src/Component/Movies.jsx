import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MoviesName from '../MoviesName'
import Webseries from './Webseries';
import About from './About'
// import './Movies.css';

const Movies = () => {
  const images = [
    { src: 'public/Marvel-Logo-2000-2012.png', alt: 'Image 1' },
    { src: 'Image 2.jpg', alt: 'Image 2' },
    { src: 'image 3.jpg', alt: 'Image 3' },
    // {src : 'public/blackwidow_lob_crd_06.jpg'}
    // Add more images as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="movies-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="slider-image" />
          </div>
        ))}
      </Slider>
      <MoviesName/>
      <Webseries/>
      <About/>
      
    </div>
  );
};

export default Movies;
