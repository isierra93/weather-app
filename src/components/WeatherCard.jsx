export default function WeatherCard ({ weather }) {
    const { name, main, icon, description, temp, feels_like, temp_max, temp_min, gust, speed, humidity } = weather

    let link = `https://openweathermap.org/img/wn/${icon}@2x.png`
    
    return(
        <div className="weatherCard">
        <h3>{name}</h3>
        <img src={link} alt={description} />
        <h3>{main}</h3>
            <div>
                <ul className="listOfTemps">
                    <li>Actual: {temp} °C</li>
                    <li>RealFeel: {feels_like} °C</li>
                    <li>Max: {temp_max} °C - Min: {temp_min} °C</li>
                    <li>Humidity: {humidity} %</li>
                    <li>Wind: {gust} - Speed: {speed}</li>
                </ul>
            </div>
        </div>
    )
}