export function dataReorganizer (data) {

    const {main, weather, wind, name, message} = data

      if(!weather || weather.length < 0) throw { message: message}
      
      const weatherResponse = {
        ...main,
        ...weather[0],
        ...wind,
        name:name
      }
      return weatherResponse

}