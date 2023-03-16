import React from 'react'
//import {Link} from 'react-router-dom'
import "./SearchResult.css"
import noImage from '../../assets/no-image.jpg'

function SearchResult({movie}) {
  const [imageError, setImageError] = React.useState(false);
  return (
    <a href={`/moviedetails/${movie.id}`} className="search-link">
        <img onError={()=>setImageError(true)}
        src={imageError ? noImage : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
        <p>{movie.title}</p>
    </a>
  )
}

export default SearchResult