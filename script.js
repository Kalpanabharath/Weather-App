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
//    if(watherdata.weather[0].main=="Clouds"){
//    bg.style.backgroundImage="url('image/cloud.jpg')";;
//    }
if (watherdata.main.temp>90){
    bg.style.backgroundImage="url('image/sunny.jpg')";
    document.getElementById('Weather').innerHTML="sunny"
}
else{
    let weatherinp=innerHTML=watherdata.weather[0].main;
    switch(true){
        case weatherinp.includes("Cloud"):
            bg.style.backgroundImage="url('image/cloud.jpg')";
            break;
        case weatherinp.includes("Rain"):
            bg.style.backgroundImage="url('image/rain.jpg')";
            break;
        case weatherinp.includes("wind"):
             bg.style.backgroundImage="url('image/winds.jpg')";
             break; 
        case weatherinp.includes("snow"):
             bg.style.backgroundImage="url('image/snow.jpg')";
             break;
        case weatherinp.includes("sunny"):
            bg.style.backgroundImage="url('image/sunny.jpg')";
            break; 
        case weatherinp.includes("Haze"):
             bg.style.backgroundImage="url('image/snow.jpg')";
             break;
            
        
    }

}



   

}