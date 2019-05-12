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

//predpoved na den 1
    const day1El = document.querySelector('#predpoved');
    day1El.textContent = getNiceHumanForecast(data.list[8].dt);
    let superIkona1 = getWeatherIcon(data.list[8].weather[0].id, data.list[8].weather[0].icon);
    let ikonaEl1= document.querySelector('#ikona');
    ikonaEl1.innerHTML = superIkona1;

//predpoved na den 2
    const day2El = document.querySelector('#predpoved');
    day2El.textContent = getNiceHumanForecast(data.list[16].dt);
    let superIkona2 = getWeatherIcon(data.list[16].weather[0].id, data.list[16].weather[0].icon);
    let ikonaEl2= document.querySelector('#ikona');
    ikonaEl2.innerHTML = superIkona2;

//predpoved na den 3
    const day3El = document.querySelector('#predpoved');
    day3El.textContent = getNiceHumanForecast(data.list[24].dt);
    let superIkona3 = getWeatherIcon(data.list[24].weather[0].id, data.list[24].weather[0].icon);
    let ikonaEl3= document.querySelector('#ikona');
    ikonaEl3.innerHTML = superIkona3;

//predpoved na den 4
    const day4El = document.querySelector('#predpoved');
    day4El.textContent = getNiceHumanForecast(data.list[32].dt);
    let superIkona4 = getWeatherIcon(data.list[32].weather[0].id, data.list[32].weather[0].icon);
    let ikonaEl4= document.querySelector('#ikona');
    ikonaEl4.innerHTML = superIkona4;

//zobrazí předpověď do aplikace
    function showForecast(){
        const forecast = document.querySelector('#predpoved');   
        let html = '';

        let niceDate1 = getNiceHumanForecast(data.list[8].dt)
        let niceDate2 = getNiceHumanForecast(data.list[16].dt)
        let niceDate3 = getNiceHumanForecast(data.list[24].dt)
        let niceDate4 = getNiceHumanForecast(data.list[32].dt)
        html = html + `
            <div class="forecast">
                <div class="forecast__day">${niceDate1}</div>
                <div class="forecast__icon"> ${superIkona1}</i> </div>
                <div class="forecast__temp"> ${Math.round(data.list[8].main.temp_max)} °C</div>
            </div>  
            <div class="forecast">
                <div class="forecast__day">${niceDate2}</div>
                <div class="forecast__icon"> ${superIkona2}</i> </div>
                <div class="forecast__temp"> ${Math.round(data.list[16].main.temp_max)} °C</div>
            </div> 
            <div class="forecast">
                <div class="forecast__day">${niceDate3}</div>
                <div class="forecast__icon"> ${superIkona3}</i> </div>
                <div class="forecast__temp"> ${Math.round(data.list[24].main.temp_max)} °C</div>
            </div> 
            <div class="forecast">
                <div class="forecast__day">${niceDate4}</div>
                <div class="forecast__icon"> ${superIkona4}</i> </div>
                <div class="forecast__temp"> ${Math.round(data.list[32].main.temp_max)} °C</div>
            </div>     
            `
            
        return forecast.innerHTML = html;
        
    }
    showForecast();

//přepočíta šíleně divné číslo na datum v normální formě 
    function getNiceHumanForecast(unixTimestamp) {
        let datum = new Date(unixTimestamp * 1000);
        let day = datum.getDay();
        let date = datum.getDate();
        let month =datum.getMonth();
        //console.log (day);

// vrátí nám den ve správném formátu : Pondělí 1.1.
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

        return (`${returnDay(day)} ${date}. ${month+1}.` ) 
     
    } 

}

}


/*


getForecast(){
     fetch('https://api.openweathermap.org/data/2.5/forecast?q=Brno,cz&units=metric&lang=cz&APPID=531ce8785a5bd60577099798147f159f')
    .then(response =>response.json())
    .then(data=>{
        this.displayForecast(data);
        console.log(data);
        showForecastAll();

        return data.list.map(forecastDay =>{
            return {
                icon:forecastDay.weather.id,
                temperature: forecastDay.main.temp_max,
                date: forecastDay.dt

            }
        })
       
    })
}
let forecastDays = [];


function showForecastAll(){

    let html = '';
    forecastDays.forEach(forecastDay =>{
        html = html + `
        <div class="forecast">
                <div class="forecast__day">${forecastDay.niceDate}</div>
                <div class="forecast__icon"> ${forecastDay.superIkona}</i> </div>
                <div class="forecast__temp"> ${Math.round(forecastDay.temperature)}</div>
            </div>       
        `
    })

    forecastDays.innerHTML = html;
}




*/
