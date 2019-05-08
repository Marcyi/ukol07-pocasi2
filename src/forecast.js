import getWeatherIcon from './weather-icons';
export default class Forecast {

    constructor(){

    }

getForecast(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Brno,cz&units=metric&lang=cz&APPID=531ce8785a5bd60577099798147f159f')
    .then(response =>response.json())
    .then(data=>{
        this.displayForecast(data);
        console.log(data);
    })
}

displayForecast(data){

    const tempEl = document.querySelector('#teplota');
    const day1El = document.querySelector('#predpoved');

    tempEl.textContent = Math.round(data.list[8].main.temp);
    day1El.textContent = getNiceHumanForecast(data.list[8].dt);
   
    function getNiceHumanForecast(unixTimestamp) {
        let datum = new Date(unixTimestamp * 1000);
        let day = datum.getDay();
        let date = datum.getDate();
        let month =datum.getMonth();
        console.log (day);
       
        function returnDay(day){
            let den = '';
            if (day === 0){
                den = 'Neděle'
            } else if (day === 1) {
                den =  'Pondělí'
            } else if (day === 2) {
                den =  'Úterý'
            } else if (day === 3){
                den =  'Středa'
            } else if (day === 4){
                den =  'Čtvrtek'
            } else if (day === 5){
                den = 'Pátek'
            } else {
                den = 'Sobota'
            }
            return den
        }

        console.log (`${returnDay(day)} ${date}. ${month+1}.` ) 

    } 

    



}

}

/*
let forecastDays = [];
const forecastEl = document.querySelector('#pocasi')

function showForecast(){

    let html = '';
    forecastDays.forEach(forecastDay =>{
        html = html + `
        <div class="forecast">
            <div class="forecast__day">${forecastDay.data.list[8].dt}</div>
            <div class="forecast__icon">                </div>
            <div class="forecast__temp"> ${forecastDay.data.list[8].main.temp}</div>
        </div>        
        `
    })

    forecastEl.innerHTML = html;
}
*/
