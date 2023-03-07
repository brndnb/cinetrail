import React from 'react'
import axios from 'axios';

function Genres({movieGenres}) {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const imageBase = process.env.REACT_APP_IMAGE_BASE;
    
    //set state for all genres
    const [allGenres, setAllGenres] = React.useState([])
    


    //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US




    //get the list of all genre id when page loads
    React.useEffect(
        () => {
            axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
            .then (res => {
                setAllGenres(res.data.genres)
            })
            .catch(err => console.log(err))
        },[]
    )

    const genreList = () => {
        //walk through movie movie genres and find match
        //add to an array that I will return
        const glist = []
        movieGenres?.map(id => {
            //find the name in all Genres that matches this ID
            for( let i = 0; i < allGenres.length; i ++) {
                //check for match
                if(id === allGenres[i].id) {
                    //add name to array
                    glist.push(allGenres[i].name)
                }
            }
           
        })
        return glist.join(", ")
    }
  return (
    <div>
        <p>Genres: {genreList()}</p>
    </div>
  )
}

export default Genres