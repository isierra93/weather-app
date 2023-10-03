import { useEffect, useState } from 'react'
import WeatherCard from "../src/components/WeatherCard.jsx"
import Error from "../src/components/Error.jsx"
import Footer from "../src/components/Footer.jsx"
import './App.css'
import API_DATA from "../src/data/API_DATA.json"
import responseExample from "../src/mocks/responseExample.json"
import notFoundWeather from "../src/mocks/notFoundWeather.json"


function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [weather, setWeather] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  /* useEffect(() =>{

  },[]) */
  //Armar USEEFFECT para updatear los estados


 //Aca se actualizan los states para geolocalizar
  function updateCity (e) {
    setCity(e.target.value)
  }

  function updateCountry (e){
    setCountry(e.target.value)
  }

  //Aca se submiten y realizan el llamado al API
  async function handleChange (e){
    e.preventDefault()
    getWeather({CITY_SEARCH:city, COUNTRY_CODE:country})
    const responseWeather = await getWeather({CITY_SEARCH:city, COUNTRY_CODE:country})
    console.log(responseWeather);

    //Si no encuentra MAIN, setea state de error
    const {main, weather, wind, name} = responseExample
    if(!main){
      const { message } = notFoundWeather
      setErrorMsg(message)
      return
    }
    const weatherResponse = {
      ...main,
      ...weather[0],
      ...wind,
      name:name
    }
    setErrorMsg('')
    setWeather(weatherResponse)
  }

  async function getWeather({CITY_SEARCH, COUNTRY_CODE}){
     try {
      const { API_KEY } = API_DATA
      
      console.log({CITY_SEARCH,COUNTRY_CODE});
      /* const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_SEARCH},${COUNTRY_CODE}&units=metric&appid=${API_KEY}`)
      const json = response.json()
      
      return json */

    } catch (error) {
      throw new Error('Error al buscar clima.')
    }
  }
  return (
    <>
      {weather ? <WeatherCard weather={weather}/> : <Error message={errorMsg} />}
      <div className="card">
        <form action="submit" onSubmit={handleChange}>
        <input 
          required
          type="text" 
          placeholder='Write your city...'
          onChange={(e) => updateCity(e)}
        />
        <select name="myselect" id="myselect" defaultValue={'AR'} onChange={(e) => updateCountry(e)}>
          <option value="AR">ARGENTINA</option>
          <option value="UR">URUGUAY</option>
        </select>
        <button>Get Weather</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default App
