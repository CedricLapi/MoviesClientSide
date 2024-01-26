import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './components/Form'
import Display from './components/Display'

function App() {
  
  const [movieList, setMovieList] = useState([])

  return (
    <>
    <div className='row'>
      
      <Forms movieList={movieList} setMovieList={setMovieList} />
      <Display movieList={movieList} />
    </div>
    </>
  )
}

export default App;
