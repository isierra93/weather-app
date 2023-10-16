import { useState } from "react";


export function useCity ({}) {
    const [city, setCity] = useState('')
    

    return {city, setCity}
}