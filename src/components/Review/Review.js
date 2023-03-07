import React from 'react'
import avatar from "../../assets/no-image.jpg"
import "./Review.css"

function Review({review}) {
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    //create state for image error
    const [imageError, setImageError] = React.useState(false)

    //create state for more or less text in review
    const [seeMore, setSeeMore] = React.useState(false)
  return (
    <div className='review'>
        <div className='avatar-container'>
            <img src={ imageError ? avatar: `${imageBase}${review?.author_details.avatar_path}`} className='avatar' onError= {() => setImageError(true)}></img>
            <p>{review?.author}</p>
        </div>
        <div className='review-text'>
            
                !seeMore ? 
            <p>{review?.content.slice(0, 250)}</p>
            <span>...see more</span>
            :
            <p>{review?.content}</p>
            <span>...see more</span>

        
            
        </div>
    </div>
  )
}

export default Review