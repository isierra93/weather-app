export default function WeatherCard ({ weather }) {
    const { name, main, icon, description, temp, feels_like, temp_max, temp_min, gust, speed, humidity } = weather

    let link = `https://openweathermap.org/img/wn/${icon}@2x.png`
    
    return(
        <div className="card">
        <h3>{name} - {main}</h3>
        <img src={link} alt={description} />
            <div>
            <h3>Temperatures</h3>
                <ul className="listOfTemps">
                    <li>Actual: {temp} °C - RealFeel: {feels_like} °C - Humidity: {humidity} %</li>
                    <li>Max: {temp_max} °C</li>
                    <li>Min: {temp_min} °C</li>
                </ul>
            </div>
            <div>
                <span>Wind: {gust} - Speed: {speed}</span>
            </div>
        </div>
    )
}