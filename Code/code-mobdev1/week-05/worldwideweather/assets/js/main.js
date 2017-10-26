function App() {
    let _worldWideWeatherService,
        _worldWideWeatherElement,
        _currentWorldWideWeatherData;

    function init() {
        console.log('1 Initialize the application');
        console.log('1.1 Create a WorldWideWeather object');
        _worldWideWeatherService = new WorldWideWeatherService();
        console.log('1.2 Chache the active DOM-elements');
        _worldWideWeatherElement = document.querySelector('.world-wide-weather');
        console.log('1.3 Load the weather via _worldWideWeatherService object');
        loadWorldWideWeatherData();
    }

    function loadWorldWideWeatherData() {
        _worldWideWeatherService.loadWorldWideWeather()
            .then(function(data) {
                console.log(data);
                console.log('2.1 Save the loaded data in _currentWorldWideWeatherData');
                _currentWorldWideWeatherData = data;
                console.log(_currentWorldWideWeatherData);
                console.log('2.2 Update parking states user interface');
                updateWorldWideWeatherUI();
            })
            .catch(function(reject) {
                console.log('SPIJTIG');
            });
    }

    function updateWorldWideWeatherUI() {
        if(_worldWideWeatherElement != null && _worldWideWeatherElement != undefined ) {
            let tempStr = '';
            console.log('3.1 Loop through the parking states');
            console.log(_currentWorldWideWeatherData.query.results);
            _currentWorldWideWeatherData.query.results.channel.forEach(function(weather, index) {
                tempStr += `
                <div class="col s3 m4">
                    <div class="card ${colorWorldWideWeather(weather.item.condition.temp)}">
                    <div class="card-content white-text">
                        <div class="row">
                            <div class="col s8">
                                <span class="card-title">${weather.location.city}</span>
                            </div>
                            <div class="col s4">
                            <span class="card-title right-align">${weather.item.condition.temp + " °" + weather.units.temperature}</span>
                            </div>
                            <div class="col s12 card__icon card__icon--large">
                                <span class="card-title">${iconWorldWideWeather(weather.item.condition.code)}</span>
                                <p>${weather.item.condition.text}</p>
                            </div>
                            <div class="col s12">
                                ${forecastWorldWideWeather(weather.item.forecast)}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                `;
            }, this);
            _worldWideWeatherElement.innerHTML = tempStr;
        }
    }
    // Return a color corresponding to the current temperature.
    function colorWorldWideWeather(temperature){
        var color;
        if (temperature > 40) {
            color = "red";
        }
        else if (temperature > 30 && temperature <= 40) {
            color = "orange"
        }
        else if (temperature > 20 && temperature <= 30) {
            color = "yellow"
        }
        else if (temperature > 10 && temperature <= 20) {
            color = "blue";
        }
        else {
            color = "grey";
        }
        return color;
    }
    // Display the expected weather for the upcomming 3 days including today.
    function forecastWorldWideWeather (array) {
        var tempStr ='';
        for (var index = 0; index < 3; index++) {
            var element = array[index];
            tempStr += `
            <div class="col s4 center-align card__icon card__icon--small">
                <p>${element.day}</p>
                ${iconWorldWideWeather(element.code)}
                <p><strong>${element.high}°</strong> - ${element.low}°</p>
            </div>`
            console.log(element);
        }
        return tempStr;
    }
    // Return the right code corresponding to the weather code.
    function iconWorldWideWeather(code) {
        
        switch(code) {
            case '0': var icon  = '<i class="wi wi-tornado"></i>';
            break;
            case '1': var icon  = '<i class="wi wi-storm-showers"></i>';
            break;
            case '2': var icon  = '<i class="wi wi-tornado"></i>';
            break;
            case '3': var icon  = '<i class="wi wi-thunderstorm"></i>';
            break;
            case '4': var icon  = '<i class="wi wi-thunderstorm"></i>';
            break;
            case '5': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '6': var icon  = '<i class="wi wi-rain-mix"></i>';
            break;
            case '7': var icon  = '<i class="wi wi-rain-mix"></i>';
            break;
            case '8': var icon  = '<i class="wi wi-sprinkle"></i>';
            break;
            case '9': var icon  = '<i class="wi wi-sprinkle"></i>';
            break;
            case '10': var icon  = '<i class="wi wi-hail"></i>';
            break;
            case '11': var icon  = '<i class="wi wi-showers"></i>';
            break;
            case '12': var icon  = '<i class="wi wi-showers"></i>';
            break;
            case '13': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '14': var icon  = '<i class="wi wi-storm-showers"></i>';
            break;
            case '15': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '16': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '17': var icon  = '<i class="wi wi-hail"></i>';
            break;
            case '18': var icon  = '<i class="wi wi-hail"></i>';
            break;
            case '19': var icon  = '<i class="wi wi-cloudy-gusts"></i>';
            break;
            case '20': var icon  = '<i class="wi wi-fog"></i>';
            break;
            case '21': var icon  = '<i class="wi wi-fog"></i>';
            break;
            case '22': var icon  = '<i class="wi wi-fog"></i>';
            break;
            case '23': var icon  = '<i class="wi wi-cloudy-gusts"></i>';
            break;
            case '24': var icon  = '<i class="wi wi-cloudy-windy"></i>';
            break;
            case '25': var icon  = '<i class="wi wi-thermometer"></i>';
            break;
            case '26': var icon  = '<i class="wi wi-cloudy"></i>';
            break;
            case '27': var icon  = '<i class="wi wi-night-cloudy"></i>';
            break;
            case '28': var icon  = '<i class="wi wi-day-cloudy"></i>';
            break;
            case '29': var icon  = '<i class="wi wi-night-cloudy"></i>';
            break;
            case '30': var icon  = '<i class="wi wi-day-cloudy"></i>';
            break;
            case '31': var icon  = '<i class="wi wi-night-clear"></i>';
            break;
            case '32': var icon  = '<i class="wi wi-day-sunny"></i>';
            break;
            case '33': var icon  = '<i class="wi wi-night-clear"></i>';
            break;
            case '34': var icon  = '<i class="wi wi-day-sunny-overcast"></i>';
            break;
            case '35': var icon  = '<i class="wi wi-hail"></i>';
            break;
            case '36': var icon  = '<i class="wi wi-day-sunny"></i>';
            break;
            case '37': var icon  = '<i class="wi wi-thunderstorm"></i>';
            break;
            case '38': var icon  = '<i class="wi wi-thunderstorm"></i>';
            break;
            case '39': var icon  = '<i class="wi wi wi-thunderstorm"></i>';
            break;
            case '40': var icon  = '<i class="wi wi-storm-showers"></i>';
            break;
            case '41': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '42': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '43': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '44': var icon  = '<i class="wi wi-cloudy"></i>';
            break;
            case '45': var icon  = '<i class="wi wi-lightning"></i>';
            break;
            case '46': var icon  = '<i class="wi wi-snow"></i>';
            break;
            case '47': var icon  = '<i class="wi wi-thunderstorm"></i>';
            break;
            case '3200': var icon  =  '<i class="wi wi-cloud"></i>';
            break;
            default: var icon  =  '<i class="wi wi-cloud"></i>';
            break;
        }
        return icon;
    }
    return {
        init: init
    }
};

// load event window object
// all resources are loaded
window.addEventListener('load', function(ev) {
    // Make new instance of app
    const app = new App();
    app.init();
});