import WeatherCard from "../src/components/WeatherCard.jsx"
import Error from "../src/components/Error.jsx"
import Footer from "../src/components/Footer.jsx"
import Logo from './components/Logo.jsx'
import { useWeather } from "./hooks/useWeather.js"

function App() {
  const { city, setCity, weather, error, handleSubmit } = useWeather()

  function onSubmit (e){
    e.preventDefault()
    handleSubmit()
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
