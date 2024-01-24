import React, { useState } from 'react'

const Forms = () => {
 

  const [movies, setMovies] = useState({

    movieTitle: "",
    genre: "",
    releaseYear: "",
    ticketsSold: ""
  })

  const changeHandler = (e) => {
    setMovies({...movies, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movies);
  }

  return (
    <div>
        <form action="" className="form col-md-12 mx-auto" onSubmit={handleSubmit}>
            <h1>Please fill out this form!</h1>
        <div className="form-group mt-3">
            
            {
                //condition                     //true                                                                               //false
                 movies.movieTitle && movies.movieTitle.length < 3 ? <p className='text-danger'> Movie Title is required and must be 3 or more character</p> : ""
                                                                                                                                        }
          <label htmlFor="" className="form-label">Movie Title:</label>
          <input type="text" name="movieTitle" className="form-control" onChange={changeHandler} />
        </div>

        <div className="form-group mt-3">
        {
                //condition                     //true                                                                               //false
                movies.genre && movies.genre.length < 3 ? <p className='text-danger'>  Genre is required and must be 3 or more character</p> : ""
                                                                                                                                        }
          <label htmlFor="" className="form-label"> Genre:</label>
          <input type="text" name="genre" className="form-control" onChange={changeHandler} />
        </div>

        <div className="form-group mt-3">
        {
                //condition                     //true                                                                               //false
                movies.releaseYear && movies.releaseYear.length < 3 ? <p className='text-danger'> Release Year is required and must be 3 or more character</p> : ""
                                                                                                                                        }
          <label htmlFor="" className="form-label"> Release Year:</label>
          <input type="number" name="releaseYear" id="" className="form-control" onChange={changeHandler} />
        </div>

        <div className="form-group mt-3">

        {
                //condition                     //true                                                                               //false
                movies.ticketsSold && movies.ticketsSold.length < 3 ? <p className='text-danger'> Tickets sold is required and must be 3 or more character</p> : ""
                                                                                                                                        }
          <label htmlFor="" className="form-label">Tickets Sold:</label>
          <input type="number" name="ticketsSold" id="" className="form-control" onChange={changeHandler} />
        </div>

        <button className="btn btn-primary mt-3">Submit</button>
       </form>
 
    </div>
  )
}

export default Forms;