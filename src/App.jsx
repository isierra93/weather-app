import { useState } from 'react'
import WeatherCard from "../src/components/WeatherCard.jsx"
import Error from "../src/components/Error.jsx"
import Footer from "../src/components/Footer.jsx"
import Logo from './components/Logo.jsx'
import { useCity } from "./hooks/useCity.js"
import { fetchData } from "./services/fetchData.js"
import { dataReorganizer } from './services/dataReorganizer.js'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')
  const [error, setError] = useState({
    error: false,
    message: '',
  })

  async function onSubmit (e){
    e.preventDefault()
    setError({
      error: false,
      message: '',
    })
    try {
      if(!city.trim()) throw { message: 'The field city is required' }
      const data = await fetchData(city)
      const weatherResponse = dataReorganizer(data)
      setWeather(weatherResponse)
    } catch (error) {
      setError({
        error: true,
        message: error.message
      })
    }finally{
      setCity('')
    }
  }

  return (
    <>
      <h1 className='titleWeb'>Weather App</h1>
      {weather ? <WeatherCard weather={weather}/> : null}
      <div>

      </div>
      <div className="card">
        <form action="submit" onSubmit={onSubmit} className='form'>
          <input 
            required
            type="text" 
            placeholder='Write your city...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {error.error ? <Error error={error} /> : null}
            <button>
            Get Weather
            </button>
        </form>
      </div>
      <Logo />
      <Footer />
    </>
  )
}

export default App
