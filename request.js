let Api_key = "aa4e974898749d89a8d4251613ea6511"
// let baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=durban&appid=aa4e974898749d89a8d4251613ea6511"

// fetch(baseUrl)
// .then(response => response.json())
// .then((data)=>{ console.log('request', data) })
// .catch((error) => {
//     console.log(error)
// })

let requestCity = async (city)=>{
    let baseUrl = "http://api.openweathermap.org/data/2.5/weather"
    let query = "?q=" + city + "&appid=" + Api_key

    // make fetch call (promise call)
    let response = await fetch(baseUrl + query)

    // promise data

    let data = await response.json()
    return data
}

