function displayresult()
{
    var city = document.getElementById("city").value ;
    var apikey='ed9ae1c165a8bf8d71e716a39f2b7ed4';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid='+apikey+'&units=metric' )
    .then(response => response.json())
    .then(data  => {
        var t= data['main']['temp']
        document.getElementById("output").innerHTML = t;

    })
}