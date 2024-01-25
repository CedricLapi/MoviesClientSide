import React, { useState } from 'react'

const Forms = () => {
 

  const [movies, setMovies] = useState({

    movieTitle: "",
    genre: "",
    releaseYear: "",
    ticketsSold: ""

  })

  const [movieList, setMovieList] = useState([]);


  const movieValidation = (e) => {
    let isValid = true
    if (movies.movieTitle.length < 3 || movies.genre.length < 3 || movies.releaseYear < 1900 || movies.ticketsSold < 3) {
        isValid = false
        console.log("There is an error");
        return isValid
    } else {
        console.log("No error");
        return isValid

    }
  }

  const changeHandler = (e) => {
    setMovies({...movies, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(movieValidation()){
        console.log(`Movie: ${JSON.stringify(movies)}`);
        setMovieList([...movieList, movies]);
        setMovies({
          movieTitle: "",
          genre: "",
          releaseYear: "",
          ticketsSold: ""
        })
    }else{
        console.log("Movie is invalid");
    }
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
          <input type="text" name="movieTitle" className="form-control" onChange={changeHandler} value={movies.movieTitle} />
        </div>

        <div className="form-group mt-3">
        {
                //condition                     //true                                                                               //false
                movies.genre && movies.genre.length < 3 ? <p className='text-danger'>  Genre is required and must be 3 or more character</p> : ""
                                                                                                                                        }
          <label htmlFor="" className="form-label"> Genre:</label>
          <input type="text" name="genre" className="form-control" onChange={changeHandler} value={movies.genre} />
        </div>

        <div className="form-group mt-3">
        {
                //condition                     //true                                                                               //false
                movies.releaseYear && movies.releaseYear.length > 1900 ? <p className='text-danger'> Release Year is required and must be 3 or more character</p> : ""
                                                                                                                                        }
          <label htmlFor="" className="form-label"> Release Year:</label>
          <input type="number" name="releaseYear" id="" className="form-control" onChange={changeHandler} value={movies.releaseYear} />
        </div>

        <div className="form-group mt-3">

        {
                //condition                     //true                                                                               //false
                movies.ticketsSold && movies.ticketsSold.length < 3 ? <p className='text-danger'> Tickets sold is required and must be 3 or more character</p> : ""
                                                                                                                                        }
          <label htmlFor="" className="form-label">Tickets Sold:</label>
          <input type="number" name="ticketsSold" id="" className="form-control" onChange={changeHandler} value={movies.ticketsSold} />
        </div>

        <button className="btn btn-primary mt-3 mb-3">Add Movie</button>
       </form>

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

export default Forms;