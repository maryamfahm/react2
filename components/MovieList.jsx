import {useEffect, useState} from "react"

const MovieList = () => {
  const [movie, setMovies] = useState([]);

  const fetchMovies = async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "180130cb9fmsh54845aa1ada5bb0p1ced42jsndf8f693d44af",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };

  // call fetch inside useEffect
  useEffect(() => {
    fetchMovies();
  }, []);

  console.log("All movies", movies);

  console.log("All movies", movies);

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "10px",
            padding: "40px",
    },
  };

  return (
    <div style={styles.container} className="mobile">
      {movies.map((movie) => {
        return (
          <MovieCard
            title={movie.title}
            imgUrl={movie.image}
            description={movie.description}
            rating={movie.rating}
            key={movie.id}
          />
        );
      })}
    </div>
  );
};

export default MovieList;