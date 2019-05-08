import getWeatherIcon from './weather-icons';


const apiKey = '531ce8785a5bd60577099798147f159f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Brno,cz';


export default class Weather {

    constructor(){

    }

getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Brno,cz&units=metric&lang=cz&APPID=531ce8785a5bd60577099798147f159f')

    .then(response => response.json())
    .then(data => {
        this.displayWeather(data);
    });

}

displayWeather(data){
    const cityEl = document.querySelector('#mesto');
    const tempEl = document.querySelector('#teplota');
    const descriptionEl = document.querySelector('#popis');
    const humidityEl = document.querySelector('#vlhkost');
    const windEl = document.querySelector('#vitr');
    const sunriseEl = document.querySelector('#vychod');
    const sunsetEl = document.querySelector('#zapad');
    const iconEl = document.querySelector('#ikona');
    let novaIkona = getWeatherIcon(data.weather[0].id, data.weather[0].icon);


    cityEl.textContent = data.name;
    tempEl.textContent = Math.round(data.main.temp);
    descriptionEl.textContent = data.weather[0].description;
    humidityEl.textContent = data.main.humidity;
    windEl.textContent = data.wind.speed.toFixed(1); 
    sunriseEl.textContent = getNiceHumanTime(data.sys.sunrise);
    sunsetEl.textContent = getNiceHumanTime(data.sys.sunset);
    iconEl.src = novaIkona;

    // nahradíme HTML obsah cílového prvku naší ikonou
    iconEl.innerHTML = novaIkona;



    function getNiceHumanTime(unixTimestamp) {
    let datum = new Date(unixTimestamp * 1000);
    let hodiny = datum.getHours();
    let minuty = datum.getMinutes();
    if (minuty<10){
        minuty = '0' + minuty;
    }
    return `${hodiny}:${minuty}`;
    }        


    //('00'+ minuty).slice(-2) - vrátí 2 hodnoty vpravo
    
    }

    


}
