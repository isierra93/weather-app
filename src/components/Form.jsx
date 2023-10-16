import WeatherCard from "./WeatherCard.jsx"
import Error from "./Error.jsx"
import { useWeather } from "../hooks/useWeather.js"

export default function Form() {

    const { city, setCity, error, handleSubmit, weather } = useWeather()

    function onSubmit(e) {
        e.preventDefault()
        handleSubmit()
    }

    return (
        <>
        {weather ? <WeatherCard weather={weather}/> : null}
        <div className="card formCard">
            <form name="city" id="form" action="submit" onSubmit={onSubmit} className='form'>
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
        </>
    )
}