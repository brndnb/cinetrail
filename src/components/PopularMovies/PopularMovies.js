import "./PopularMovies.css"
import React from 'react'
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

function PopularMovies() {

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;

    //create an array for page numbers

    const pageNumbers = [1,2,3,4,5,6,7,8,9,10]
    
    
    const [popularMovies, setPopularMovies] = React.useState([]);
    const [page, setPage] = React.useState(1)


    //this page shows all the popular movies
    //what is the endpoint?

    //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&page=1

    React.useEffect(
        ()=>{

            //call API to get popular movie data
            axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
                .then(res => {
                    console.log(res.data.results)
                    //store data in state
                    setPopularMovies(res.data.results.slice(0, 12))
                })
                .catch(err => console.log(err))

        },[page] //dependency (runs everytime page changes) (useEffect REACTS on useState page change)

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
        <p>Select Page</p>
        {
            pageNumbers.map(num => <p key={num}
                                      onClick={() => setPage(num)}>{num}</p>)
        }
    </div>
  </div>
  )
}

export default PopularMovies