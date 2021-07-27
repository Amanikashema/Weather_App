let searchForm = document.querySelector('.search-location')
let cityValue = document.querySelector('.search-location input')
let cityName = document.querySelector('.city-name p')
let cardBody = document.querySelector('.card-body')
let timeImage = document.querySelector('.card-top img')
let cardInfo = document.querySelector('.back-card')


let celciuusConverter = (kelvin)=>{
    celcius = Math.round(kelvin - 273.15)
    return celcius
}

let isDayTime = (icon)=>{
    if (icon.includes('d')){
        return true
    } else{
        return false
    }
}

updateWeatherApp = (city)=>{
    console.log(city)
    let imageName = city.weather[0].icon
    let iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = city.name
    cardBody.innerHTML = `
    <div class="card-mid row">
                    <div class="col text-center temp">
                        <span>${celciuusConverter(city.main.temp)}&deg;C</span>
                    </div>
                    <div class="col-4 condition-temp">
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">${celciuusConverter(city.main.temp_max)}&deg;C</p>
                        <p class="low">${celciuusConverter(city.main.temp_min)}&deg;C</p>
                    </div>
                </div>
                <div class="icon-container card shadow mx-auto">
                    <img src="${iconSrc}">
                </div>

                <div class="card-bottom px-5 py-4 row">
                    <div class="col text-center">
                        <p>${celciuusConverter(city.main.feels_like)}&deg;C</p>
                        <span>Feels Like</span>
                    </div>

                    <div class="col text-center">
                        <p>${city.main.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                
    `

    if(isDayTime(imageName)){
        console.log('Day')
        timeImage.setAttribute('src','img/day_image.svg')
        if(cityName.classList.contains('text-white')){
            cityName.classList.remove('text-white')
        }
        else{
            cityName.classList.add('text-black')
        }
        
    }
    else{
        console.log('Night')
        timeImage.setAttribute('src','img/night_image.svg')
        if(cityName.classList.contains('text-black')){
            cityName.classList.remove('text-black')
        }else{
            cityName.classList.add('text-white')
        }
       
    }

    cardInfo.classList.remove('d-none')

}


// add event listener to the form
searchForm.addEventListener('submit', e =>{
    e.preventDefault()
    let citysearched = cityValue.value.trim()
    console.log(citysearched)
    // reset form after submit
    searchForm.reset()

    requestCity(citysearched)
    .then((data)=>{
        // function to update weather elements on dom
        updateWeatherApp(data)
    })
    .catch((error)=>{console.log(error)})

})