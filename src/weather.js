
const apiKey = '531ce8785a5bd60577099798147f159f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Brno,cz';



export default class Weather {

    constructor(){

    }

getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Brno,cz&units=metric&lang=cz&APPID=531ce8785a5bd60577099798147f159f')

    .then(response => response.json())
    .then(data => {
        console.log (data);
        this.displayWeather(data);
        
    });

}

displayWeather(data){
    const cityEl = document.querySelector('#mesto');
    const tempEl = document.querySelector('#teplota');
    const descriptionEl = document.querySelector('#popis');
    //const iconEl = document.querySelector('#ikona');
    const humidityEl = document.querySelector('#vlhkost')
    const windEl = document.querySelector('#vitr')
    const sunriseEl = document.querySelector('#vychod')
    const sunsetEl = document.querySelector('#zapad')

    
    cityEl.textContent = data.name;
    tempEl.textContent = Math.round(data.main.temp);
    descriptionEl.textContent = data.weather[0].description;
    //iconEl.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    humidityEl.textContent = data.main.humidity;
    windEl.textContent = data.wind.speed.toFixed(1); 
    sunriseEl.textContent = getNiceHumanTime(data.sys.sunrise);
    sunsetEl.textContent = getNiceHumanTime(data.sys.sunset);
    
    function getNiceHumanTime(unixTimestamp) {
    let datum = new Date(unixTimestamp * 1000);
    let hodiny = datum.getHours();
    let minuty = datum.getMinutes();
    if (minuty<10){
    minuty = '0' + minuty;
    }
    return `${hodiny}:${minuty}`;
    }        

    
    }

}
