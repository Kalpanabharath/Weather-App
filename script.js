// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial
let apikey='597acadb714c2bcca1d1130d341dae5b';
let resel=document.getElementById('result');
// weather =Clouds,Rain,wind,snow,sunny
let bg=document.getElementById("bg");


function getWeatherData(city){

    let url='https://api.openweathermap.org/data/2.5/weather';
    let fullurl=`${url}?q=${city}&appid=${apikey}&units=imperial`;
    let weatherpro=fetch(fullurl);


    return weatherpro.then((response)=>{
        return response.json()
    })

}
function search(){
    let city=document.getElementById("cityname").value ;
    getWeatherData(city)
    .then((response)=>{
        console.log(response)
        showweather(response)

    })
    .catch((err)=>{
        console.log(err)

    })
    resel.style.visibility="visible";

}
showweather=(watherdata)=>{
    document.getElementById('location').innerHTML=watherdata.name;
    document.getElementById('Weather').innerHTML=watherdata.weather[0].main;
    document.getElementById('tempratorespan').innerHTML=watherdata.main.temp;
    document.getElementById('max-tempratorespan').innerHTML=watherdata.main.temp_max;
    document.getElementById('min-tempratorespan').innerHTML=watherdata.main.temp_min;
   if(watherdata.weather[0].main=="Clouds"){
   bg.style.backgroundImage="url('image/cloud.jpg')";;
   }
   

}