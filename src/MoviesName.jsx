import React from 'react';
import { Link } from 'react-router-dom';

const MarvelMovies = () => {
  const movies = [
    { name: 'Iron Man', image: 'iron man.jpg', link: '/iron-man' },
    { name: 'The Incredible Hulk', image: 'public/theincrediblehulk_lob_crd_03.jpg', link: '/the-incredible-hulk' },
    { name: 'Thor', image: 'public/thorloveandthunder_lob_crd_04.jpg', link: '/thor' },
    { name: 'Shang-Chi', image: 'public/spider-manhomecoming_lob_crd_02.jpg', link: '/shang-chi' },
    { name: 'The Avengers', image: 'public/avengersendgame_lob_crd_05_2.jpg', link: '/the-avengers' },
    { name: 'Guardians of the Galaxy', image: 'public/guardiansofthegalaxyvol.2_lob_crd_01.jpg', link: '/guardians-of-the-galaxy' },
    { name: 'Avengers: Age of Ultron', image: 'public/themarvels_lob_crd_05.jpg', link: '/avengers-age-of-ultron' },
    { name: 'Spider-Man', image: 'public/spider-manhomecoming_lob_crd_02.jpg', link: '/spider-man' },
    { name: 'Avengers: Infinity War', image: 'public/thorloveandthunder_lob_crd_04.jpg', link: '/avengers-infinity-war' },
    { name: 'Avengers: Endgame', image: 'public/thunderbolts_lob_crd_01.jpg', link: '/avengers-endgame' },
    { name: 'Ant-Man', image: 'public/ant-man_lob_crd_01_8.jpg', link: '/ant-man' },
    { name: 'Ant-Man and the Wasp: Quantumania', image: 'public/antmanandthewaspquantumania_lob_crd_03.jpg', link: '/ant-man-quantumania' },
  ];

  return (
    <>
      <h1 className="heading">Marvel Movies</h1>
      <div className="marvel-movies">
        {movies.map((movie, index) => (
          <Link to={movie.link} key={index} className="movie-box">
            <img src={movie.image} alt={movie.name} className="movie-image" />
            <h2>{movie.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MarvelMovies;
