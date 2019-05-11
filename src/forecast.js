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

    const day1El = document.querySelector('#predpoved');
    day1El.textContent = getNiceHumanForecast(data.list[8].dt);


    let superIkona = getWeatherIcon(data.list[8].weather[0].id, data.list[8].weather[0].icon);
    let ikonaEl= document.querySelector('#ikona');
    ikonaEl.innerHTML = superIkona;


//zobrazí předpověď 
    function showForecast(){
        const forecast = document.querySelector('#predpoved');   
        let html = '';

        let niceDate = getNiceHumanForecast(data.list[8].dt)
        html = html + `
            <div class="forecast">
                <div class="forecast__day">${niceDate}</div>
                <div class="forecast__icon"> ${superIkona}</i> </div>
                <div class="forecast__temp"> ${Math.round(data.list[8].main.temp_min)}</div>
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
        console.log (day);

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


