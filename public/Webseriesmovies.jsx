import React from 'react'
import About from '../src/Component/About';

const Webseriesmovies = () => {
    const movies = [
        { name: 'Iron Man', image: 'public/thunderbolts_lob_crd_01.jpg', link: '/iron-man' },
        { name: 'The Incredible Hulk', image: 'public/eternals_lob_crd_06.jpg', link: '/the-incredible-hulk' },
        { name: 'Thor', image: 'public/thorloveandthunder_lob_crd_04.jpg', link: '/thor' },
        { name: 'Shang-Chi', image: 'public/themarvels_lob_crd_05.jpg', link: '/shang-chi' },
        { name: 'The Avengers', image: 'public/portrait_uncanny (4).jpg', link: '/the-avengers' },
        { name: 'Guardians of the Galaxy', image: 'public/portrait_uncanny (3).jpg', link: '/guardians-of-the-galaxy' },
        { name: 'Avengers: Age of Ultron', image: 'public/portrait_uncanny (2).jpg', link: '/avengers-age-of-ultron' },
        { name: 'Spider-Man', image: 'public/portrait_uncanny (1).jpg', link: '/spider-man' },
        { name: 'Avengers: Infinity War', image: 'public/thorloveandthunder_lob_crd_04.jpg', link: '/avengers-infinity-war' },
        { name: 'Avengers: Endgame', image: 'public/thunderbolts_lob_crd_01.jpg', link: '/avengers-endgame' },
        { name: 'Ant-Man', image: 'public/ant-man_lob_crd_01_8.jpg', link: '/ant-man' },
        { name: 'Ant-Man and the Wasp: Quantumania', image: 'public/antmanandthewaspquantumania_lob_crd_03.jpg', link: '/ant-man-quantumania' },
        // { name: 'Captain Marvel', image: 'public/captainamericabravenewworld_lob_crd_03.jpg', link: '/captain-marvel' },
      ];

      return (
        <div className="marvel-movies">
          <h1 className="heading">Webseries</h1>
          {movies.map((movie, index) => (
            <a href={movie.link} key={index} className="movie-box">
              <img src={movie.image} alt={movie.name} className="movie-image" />
              <h2>{movie.name}</h2>
            </a>
          ))}
        </div>
        
      );
    };

export default Webseriesmovies
