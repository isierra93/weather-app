import WeatherCard from "../src/components/WeatherCard.jsx"
import Form from "./components/Form.jsx"
import Footer from "../src/components/Footer.jsx"
import Logo from './components/Logo.jsx'
import { useWeather } from "./hooks/useWeather.js"

function App() {  

  return (
    <>
      <h1 className='titleWeb'>Weather App</h1>
      <Form />
      <Logo />
      <Footer />
    </>
  )
}

export default App