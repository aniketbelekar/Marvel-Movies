import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { movieName } = useParams();

  const movieData = {
    'iron-man': {
      name: 'Iron Man',
      image: 'public/iron man.jpg', // Add the correct path to the image
      description: 'Iron Man" is a 2008 superhero film based on the Marvel Comics character of the same name. Directed by Jon Favreau and produced by Marvel Studios, the movie is the first installment in the Marvel Cinematic Universe (MCU). The film stars Robert Downey Jr. as Tony Stark, a genius billionaire industrialist and master engineer who builds a powered exoskeleton and becomes the technologically advanced superhero, Iron Man.The story begins with Tony Stark, CEO of Stark Industries, a company that manufactures advanced weapons for the U.S. military. During a business trip to Afghanistan, Stark is ambushed and captured by a terrorist group called the Ten Rings. Severely injured by shrapnel, Tony is forced to build a weapon of mass destruction, but instead, he creates a suit of armor to escape his captors. With the help of fellow captive Yinsen, Stark builds the Mark I Iron Man suit, powered by an arc reactor that keeps him alive.Upon returning to the United States, Tony announces that Stark Industries will no longer manufacture weapons, a decision that puts him at odds with his business partner, Obadiah Stane (played by Jeff Bridges). Meanwhile, Stark refines his suit design, creating the sleek and powerful Mark III, which he uses to stop the Ten Rings and prevent them from using his weapons.As Stark uncovers a conspiracy within his own company, he faces off against Stane, who has created his own massive suit of armor, known as the Iron Monger. The final showdown between Iron Man and Iron Monger takes place in the skies above Stark Industries, culminating in Stark’s victory and the destruction of the Iron Monger suit.In the film closing moments, Tony Stark publicly admits to being Iron Man, rejecting the advice to keep his identity a secret. This bold declaration sets the stage for future conflicts and alliances in the MCU Iron Man" was a critical and commercial success, praised for its engaging story, impressive visual effects, and Robert Downey Jr.charismatic performance. The movie success laid the foundation for the expansive Marvel Cinematic Universe, making Iron Man a cornerstone character in the franchise', // Full description truncated for brevity
      downloadLink: 'http://example.com/download/iron-man',
      watchOnlineLink: 'http://example.com/watch/iron-man',
      downloads: 1200,
      rating: 4.5,
      reviews: [
        "Amazing movie! Tony Stark is the best.",
        "One of the best superhero origin stories.",
        "A must-watch for Marvel fans!",
      ],
    },
    'the-incredible-hulk': {
      name: 'The Incredible Hulk',
      image: '/path/to/hulk-image.jpg',
      description: 'Description of The Incredible Hulk',
      downloadLink: 'http://example.com/download/the-incredible-hulk',
      watchOnlineLink: 'http://example.com/watch/the-incredible-hulk',
      downloads: 900,
      rating: 3.8,
      reviews: [
        "Intense action and great special effects.",
        "Hulk smash! A fun movie to watch.",
        "Good movie but not as strong as other Marvel films.",
      ],
    },
    // Add other movies similarly
  };

  const movie = movieData[movieName];

  return (
    <div className="movie-detail-container">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <div className="movie-stats">
        <p><strong>Downloads:</strong> {movie.downloads}</p>
        <p><strong>Rating:</strong> {movie.rating} / 5</p>
      </div>
      <a href={movie.downloadLink} target="_blank" rel="noopener noreferrer">
        Download Movie
      </a>
      <br />
      <a href={movie.watchOnlineLink} target="_blank" rel="noopener noreferrer">
        Watch Online
      </a>
      <div className="reviews-section">
        <h2>Reviews</h2>
        <ul>
          {movie.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;

