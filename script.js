const key = "e7ed9f645c8aa1804db7f922617b0dda";
let temp=document.querySelector(".temp");
let temperature=document.getElementById("temperature");
let temp_min=document.getElementById("temp_min");
let temp_max=document.getElementById("temp_max");
let search=document.querySelector(".btn");
let btnText=document.querySelector(".form-control");
let mood=document.querySelector(".main");
let upperText=document.querySelector(".heading");
let error=document.querySelector(".error");
let feels_like=document.getElementById("feels_like")
let humidity=document.getElementById("humidity")
let deg=document.getElementById("deg")
let speed=document.getElementById("speed") 
let sunrise=document.getElementById("sunrise")
let sunset=document.getElementById("sunset")
let icon=document.querySelector(".icon")
let body=document.querySelector("body");
const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let city="Ahmedabad"

function cap(e){
   let a=e.charAt(0).toUpperCase()+e.slice(1);
   return a;
}

function getIcon(e){
   if(e==="Clear" || e==="Haze" )
      {
         return "Images/sunny";
      }
   if(e==="Rain")
      {
         return "Images/rain";
      }
   if(e==="Mist")
      {
         return "Images/mist";
      }
   if(e==="shower rain")
      {
         return "Images/shower_rain";
      }
   if(e==="Clouds")
      {
         return "Images/few_clouds";
      }
   if(e==="Thunderstorm")
      {
         return "Images/thunderstorm";
      }
   if(e==="Snow")
      {
         return "Images/snow";
      }
   else
      {
         return "Images/sunny"; 
      }
}
            
async function call(city)
   { 
      let response= await fetch(url+`${city}&appid=${key}`);
      if(response.status===404)
      {
         error.style.opacity="1"
         setTimeout(()=>{error.style.opacity="0"},1500);
      }
      let data=await response.json();
      console.log(data)
      temp.innerHTML=`${Math.round(data.main.temp)}°c`;  
      upperText.innerHTML=`Currently in${cap(city).bold()}`
      humidity.innerHTML=`${data.main.humidity}%`;
      speed.innerHTML=`${parseInt(data.wind.speed)*3.6} km/h`;
      icon.innerHTML=`<img src="${getIcon(data.weather[0].main)}.png" height="100px" width="100px" alt="icon">`
      mood.innerHTML=`${cap(data.weather[0].description)}`;
      }
      call(city)
               
search.addEventListener("click",(e)=>{
e.preventDefault();
city=`${btnText.value}`;
call(city);   
})
