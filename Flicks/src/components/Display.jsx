import React, { useState } from 'react'

                //Props destructure
const Display = ({movieList}) => {
    
  

  return (
    <div>
        <h1>Display of all them Movies:</h1>

        <div className="col-5 offset-2">

        {
          movieList.map((movie, i) => (
            

              <div className="card" key={i}>
                <div className="card-body">
                <h3 className="card-title">{movie.movieTitle}</h3>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text">Release Year: {movie.releaseYear}</p>
                <p className="card-text">Tickets Sold: {movie.ticketsSold}</p>

                </div>

              </div>
            )
          )
        }

       </div>
 
    </div>
  )
}

export default Display;