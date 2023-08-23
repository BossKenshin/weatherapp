if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeather(latitude, longitude);
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}

function getWeather(lat, long) {
    $(document).ready(function () {
        const Url = 'https://api.weatherapi.com/v1/current.json?';
        $.ajax({
            url: Url,
            type: "GET",
            data:
            {
                key: '3c8c8b57fa1841878a331258232308',
                q: lat + ',' + long
            },
            success: function (result) {
                console.log(result);


                document.getElementById('info-text').innerHTML = result.current.condition.text;
                document.getElementById('logo').src = result.current.condition.icon;
                var name = result.location.name;
                var region = result.location.region;
                var nation = result.location.country;
                document.getElementById('location').innerHTML = name + ', ' + region + ', ' + nation;
                document.getElementById('degrees').innerHTML = 'Temperature: ' + result.current.temp_c+' C';
                document.getElementById('wd').innerHTML = 'Wind Direction: ' + result.current.wind_dir + ' Speed: ' + result.current.wind_kph;




            },
            error: function (error) {
                console.log('Error ${error}');

            }
        })
    });
}
