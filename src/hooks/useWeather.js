import { useState } from "react"
import { fetchData } from "../services/fetchData.js"
import { dataReorganizer } from "../services/dataReorganizer.js"

export function useWeather () {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState('')
    const [error, setError] = useState({
      error: false,
      message: '',
    })

    async function handleSubmit() {

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

    return { city, setCity, weather, error, handleSubmit }
}