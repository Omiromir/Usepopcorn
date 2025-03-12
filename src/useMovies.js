import { useEffect, useState } from "react";

const KEY = "28227aa8";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
      async function fetchData() {

        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
  
          if (!response.ok) throw new Error("Network response was not ok");
  
          const data = await response.json();
  
          if (data.Error) throw new Error("No movies found");
  
          setMovies(data.Search);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
  
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
  
      fetchData();
    }, [query]);
  

  return { movies, loading, error };
}