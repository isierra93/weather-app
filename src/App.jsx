import { useState } from 'react'
import WeatherCard from "../src/components/WeatherCard.jsx"
import Error from "../src/components/Error.jsx"
import Footer from "../src/components/Footer.jsx"
import Logo from './components/Logo.jsx'
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY

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
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      const data = await response.json()
      console.log(data);
      const {main, weather, wind, name, message} = data
      if(!weather || weather.length < 0){
        setError({
          error:true,
          message: message
        })
      }else{
        const weatherResponse = {
          ...main,
          ...weather[0],
          ...wind,
          name:name
        }
        setWeather(weatherResponse)
      }
    } catch (error) {
      setError({
        error: true,
        message: error.message
      })
    }
  }

  return (
    <>
      <h1>Weather App</h1>
      {weather ? <WeatherCard weather={weather}/> : null}
      <div>

      </div>
      <div className="card">
        <form action="submit" onSubmit={onSubmit}>
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
