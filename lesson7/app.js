const cityName = document.querySelector(".cityName")
const temp = document.querySelector(".temp")


const apiKey = "e417df62e04d3b1b111abeab19cea714"

// const handleCitySearch = () => {

const cityNameValue = document.querySelector(".cityNameValue")

cityNameValue.addEventListener("input", (e) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${apiKey}`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        cityName.innerHTML = data.name
        temp.innerHTML = Math.round(data.main.temp - 273) + "&deg" + "C"
    })
})
// }