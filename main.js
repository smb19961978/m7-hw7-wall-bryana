var weather = document.querySelector("span");
console.log(weather);

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        
        var apiResult = JSON.parse(this.responseText);
        
        //Code Dealing With The API Data Goes Herer//
        console.log(apiResult);
        
        var cityName = document.createTextNode(apiResult.name);
        
        weather.appendChild(cityName);
        
        console.log(cityName);
        
        var weatherDescription = document.createTextNode(apiResult.weather[0].description);
        
        console.log(weatherDescription);
        
         weather.appendChild(weatherDescription);
        
        
    }
};

xmlhttp.open("Get", "http://api.openweathermap.org/data/2.5/weather?q=74075,us&appid=6efff70fe1477748e31c17d1c504635f", true);

xmlhttp.send();





