import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))
 
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'Hola'}`
  const [ location, geLocation, hasError ] = useFetch(url)

  useEffect(() => {
    geLocation()
  }, [inputValue])
    
  const inputSearch= useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }


  return (
    <dir>
      <div>
        <img className='imagen__portada' src="https://i.ytimg.com/vi/9ivILh-j1CA/maxresdefault.jpg" alt="" />
      </div>
      <form className='search' onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button className='boton'>Search</button>
      </form>
      {
        hasError
          ? <h2 className='error__message'>Hey! you must provide an id from 1 to 126 </h2>
          : 
        <>
      <LocationInfo 
        location={location}
      />
      <div>
        {
          location?.residents.map( url => (
            <ResidentCard 
             key= {url}
             url={url}
            />
          ))
        }
      </div>
      </>
      }
    </dir>
  )
}

export default App
