// Variables and selection elements
const apiUnsplash = "https://source.unsplash.com/1600x900/?";
const apiKey = "9c3a3a373ffb6108520b56fd47ae0544";
const apiCountryURL = "https://flagsapi.com/BR/shiny/64.png"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");


const hide2 = document.querySelector("#hide2");



// Functions
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json();

    return data;
};



const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}mph`;

    // Change bg image
    document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;

    weatherContainer.classList.remove("hide");
  
};


// Events



searchBtn.addEventListener("click", (e) => {

    e.preventDefault()

    const city = cityInput.value;

    if(hide2.style.display === 'block') {
        hide2.style.display = 'none';
       } else {
        hide2.style.display = 'none';
       }

    showWeatherData(city);


});

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city  = e.target.value

        if(hide2.style.display === 'block') {
            hide2.style.display = 'none';
           } else {
            hide2.style.display = 'none';
           }

        showWeatherData(city);
    }

    

})