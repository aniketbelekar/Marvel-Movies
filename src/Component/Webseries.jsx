// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Webseries = () => {
    // const webseries = [
    //     { name: 'LOGO', image: 'public/marvel logo 2.jpeg', link: '/iron-man' },
    //     { name: 'Captain America', image: 'public/weapon_x-men_1_variant_card.jpg', link: '/captain-america' },
    //     { name: 'Thor', image: 'public/spider-manfarfromhome_lob_crd_04_3.jpg', link: '/thor' },
    //     { name: 'Hulk', image: 'hulk.jpg', link: '/hulk' },
    // ];

 import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Webseriesmovies from '../../public/Webseriesmovies';

// import './Movies.css';

const Movies = () => {
  const images = [
    { src: 'public/marvel logo 2.jpeg', alt: 'Image 1' },
    { src: 'public/weapon_x-men_1_variant_card.jpg', alt: 'Image 2' },
    { src: 'public/spider-manfarfromhome_lob_crd_04_3.jpg', alt: 'Image 3' },
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
    <>
         <h1 className="heading">webseries</h1>
    <div className="movies-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
    <Webseriesmovies/>
    </>
    
  );
};

export default Movies;
