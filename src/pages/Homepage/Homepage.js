import React, {useContext} from 'react'
import Slider from '../../components/Slider/Slider';
import "./Homepage.css"
import { ThemeContext } from '../../contexts/ThemeContext';

function Homepage() {

  

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const imageBase = process.env.REACT_APP_IMAGE_BASE;
 
  const {darkMode, setDarkMode} = useContext
  (ThemeContext)


  return (
    <div className={darkMode?'homepage-container':"homepage-container homepage-light"}>
      <Slider />
        Homepage
      </div>
  )
}

export default Homepage