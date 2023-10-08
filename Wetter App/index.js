document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
    let apikey = "0e728fa5cb17f61a4178e4548da47ac7";
    let wetterURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' +
        position.coords.latitude + '&lon=' +
        position.coords.longitude +
        '&units=metric&lang=de&appid=' +
        apikey;

    $.getJSON(wetterURL, onWeatherSuccess)
        .fail(function () {
            alert("Fehler beim Abrufen der Wetterdaten.");
        });
}

function onError(error) {
    document.getElementById('temperatur').innerHTML = "Ihre Position konnte nicht ermittelt werden.";
}

function onWeatherSuccess(results) {
    document.getElementById('temperatur').innerHTML = 'Temperatur: ' + results.main.temp + ' °C';
    document.getElementById('wind').innerHTML = 'Windgeschwindigkeit: ' + results.wind.speed + ' m/s';
    document.getElementById('beschreibung').innerHTML = 'Wetter: ' + results.weather[0].description;
}
