import {countries} from "./countries.js"
let inp = document.querySelector("#myinp")
function btn(){
    getData(inp.value)
}
document.addEventListener("keydown",enter)
function enter(e){
    if(e.keyCode===13){
        getData(inp.value)
    }
}
function getData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inp.value+'&appid=402d991c82d1e7ce74eff6f576cfdafe')
    .then(function (response){
        return response.json()
    })
    .then(function(theweather){
        document.querySelector("#city").innerHTML = theweather.name+", "+countries[theweather.sys.country]
        document.querySelector("#temp").innerHTML = Math.round(theweather.main.temp - 273.15)+"°C"
        document.querySelector("#minmaxtemp").innerHTML = "Min Temp : "+Math.round(theweather.main.temp_min - 273.15)+"°C"+" , Max Temp : "+Math.round(theweather.main.temp_max - 273.15)+"°C"
        document.querySelector("#wthr").innerHTML = theweather.weather[0].main
    })
    .catch(function(err){
        console.log(err)
    })
}


