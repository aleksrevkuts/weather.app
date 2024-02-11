const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.59&lon=25';
async function getWeather() {
        const response = await fetch(apiUrl);
        const data = await response.json(); 
        for (let i = 0; i < 4; i++) {
            const timeseries = data.properties.timeseries[i];
            const time = new Date(timeseries.time).toLocaleString('et');
            const temperature = timeseries.data.instant.details.air_temperature;
            console.log(`${time} ${temperature}°C`);
        }
    }

getWeather();