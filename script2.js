const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "258bb679d7msh3664080ddfa50c4p1c920ajsn53ac5c5704f9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    }
  };
  const getWeather2=(city) =>{
	cityName2.innerHTML=city


fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)

    
    feels_like3.innerHTML = response.feels_like
    humidity3.innerHTML = response.humidity
	max_temp3.innerHTML = response.max_temp
    sunrise3.innerHTML = response.sunrise
	min_temp3.innerHTML = response.min_temp
    sunset3.innerHTML = response.sunset
    temp3.innerHTML = response.temp
    wind_degrees3.innerHTML = response.wind_degrees
    wind_speed3.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err))
}



getWeather2(city.value)
  

const options3 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "258bb679d7msh3664080ddfa50c4p1c920ajsn53ac5c5704f9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    }
  };
  const getWeather3=(city) =>{
	cityName3.innerHTML=city


fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston",
  options3
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)

    
    feels_like4.innerHTML = response.feels_like
    humidity4.innerHTML = response.humidity
	max_temp4.innerHTML = response.max_temp
    sunrise4.innerHTML = response.sunrise
	min_temp4.innerHTML = response.min_temp
    sunset4.innerHTML = response.sunset
    temp4.innerHTML = response.temp
    wind_degrees4.innerHTML = response.wind_degrees
    wind_speed4.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err))
}



getWeather3(city.value)

const options4 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "258bb679d7msh3664080ddfa50c4p1c920ajsn53ac5c5704f9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    }
  };
  const getWeather4=(city) =>{
	cityName4.innerHTML=city


fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow",
  options4
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)

    
    feels_like5.innerHTML = response.feels_like
    humidity5.innerHTML = response.humidity
	max_temp5.innerHTML = response.max_temp
    sunrise5.innerHTML = response.sunrise
	min_temp5.innerHTML = response.min_temp
    sunset5.innerHTML = response.sunset
    temp5.innerHTML = response.temp
    wind_degrees5.innerHTML = response.wind_degrees
    wind_speed5.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err))
}



getWeather4(city.value)
  
  