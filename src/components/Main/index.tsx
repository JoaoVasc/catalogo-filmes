import { Container } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import teste from '../../assets/testefilm.jpg'

type Movies = {
  id: number;
  poster_path: string;
  background_path: string;
  title: string;
  vote_average: number;
  relese_date: string;
};

export function Main() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3002/movies").then((response) => {
      setMovies(response.data);
    });
  });

  return (
    <Container>
      <div className="filme">
        {movies.map((movie) => {
          return (
            <div className="osFilmes" key={movie.id}>
              <img src={movie.poster_path} alt="" />
              <h3 className="title">{movie.title}</h3>
              <h4>
                Vote : <span> {movie.vote_average} </span>
              </h4>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
