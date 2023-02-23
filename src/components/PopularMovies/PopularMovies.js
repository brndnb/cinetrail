import "./PopularMovies.css"
import React from 'react'
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

function PopularMovies() {

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    
    
    const [popularMovies, setPopularMovies] = React.useState([]);


    //this page shows all the popular movies
    //what is the endpoint?

    //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&page=1

    React.useEffect(
        ()=>{

            //call API to get popular movie data
            axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=1`)
                .then(res => {
                    console.log(res.data.results)
                    //store data in state
                    setPopularMovies(res.data.results)
                })
                .catch(err => console.log(err))

        },[] 

    )
 

  return ( 
  <div className="popular-container">
    <h3>Popular Movies</h3>
    <div className="popular-wrapper"> 
    {
        popularMovies.map(item => <MovieCard 
                                key={item.id}                
                                movie={item}
                                imageUrl={item.poster_path}
                                imgHeight="300px" 
                                radius="16px"
                                cardStyle="popular-card" />)
    }
    </div>
    <div className="page-numbers">
        Page number goes here
    </div>
  </div>
  )
}

export default PopularMovies