const API_KEY = import.meta.env.VITE_API_KEY

export async function fetchData (city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw { message: error.message }
    }
}