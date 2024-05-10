import search from "./images/Search icon.png"
import clearicon from "./images/clouds.png"
import cloudicon from "./images/cloudy.png"
import drizzleicon from "./images/cloudy1.png"
import rainicon from "./images/rainy.png"
import windicon from "./images/wind.png"
import snowicon from "./images/Snow.png"
import humidityicon from "./images/humidity.png"
import Weatherdetails from "./Weatherdetails"
import { useEffect, useState } from "react"
import axios from "axios"
import { data } from "autoprefixer"
function App() {
  const [text,settext]=useState("LONDON")
  const [icon,seticon]=useState(snowicon)
  const [temp,settemp]=useState(0)
  const [city,setcity]=useState("INDIA")
  //const [country,setcountry]=useState("IN")
  const [lat,setlat]=useState(0)
  const [log,setlog]=useState(0)
  const [humidity,sethumidity]=useState(0)
  const [wind,setwind]=useState(0)
  const [desc,setdesc]=useState("")
  //const [citynotfound,setcitynotfound]=useState(false)
  //const [loading,setloading]=useState(false)
  const [error,seterror]=useState(null)
  const weathericonmap = {
    "01d":clearicon,
    "01n":clearicon,
    "02d":cloudicon,
"02n":cloudicon,
"03d":drizzleicon,
"03n":drizzleicon,
"04d":drizzleicon,
"04n":drizzleicon,
"09d":rainicon,
"09n":rainicon,
"10d":rainicon,
"10n":rainicon,
"13d":snowicon,
"13n":snowicon

  }
  function getcity(evt){
    settext(evt.target.value)
  }
  function getweather(){
    //setloading(true)
   //const axios=require("axios")
    var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=aa5c4b68daf5c4c9d262631e33cf5526&units=Metric`)
    weatherdata.then(function(success){
  
     // console.log(success.data.cod)
      // if(success.data.cod ==="404"){
      //   console.error("city not found")

      //   setcitynotfound(true)
      //   setloading(false)
      //   return
      // }
      //console.log(success.data.main.humidity)
      sethumidity(success.data.main.humidity)
      setwind(success.data.wind.speed)
      setdesc(success.data.weather[0].description)
      setlat(success.data.coord.lat)
      setlog(success.data.coord.lon)
      setcity(success.data.name)
settemp(Math.floor(success.data.main.temp))

const weathericoncode=success.data.weather[0].icon
seticon(weathericonmap[weathericoncode]||clearicon)
       })
.catch(function(fail){
  alert(fail)
  console.error("An error ocurred",fail.message)
  seterror("An error occured while fetching data")
}).finally(function (){
//setloading(false)
})


  }
  function handlecity(evt){
    if(evt.key =="Enter"){
      getweather()
    }
  }
  useEffect(function(){
    getweather()
  },[])
  return (
  <div>
    <div className=" max-w-80  p-5 bg-slate-100 border rounded-md shadow-sm ">
      <div className="inputcontainer flex w-full items-center border border-cyan-400 rounded-r-sm overflow-hidden" onChange={getcity} onKeyDown={handlecity}>
        <input type="text" placeholder="Search city" value={text} className="cityinput flex-1 h-8 border border-none text-xl outline-none p-3" />
        <div className="searchicon p-1 h-6 cursor-pointer" onClick={getweather}>
          <img src={search} className="w-4 h-4 "></img></div>
      </div>
       <Weatherdetails icon={icon} temp={temp} city={city}  lat={lat} log={log} humidity={humidity} wind={wind}/>
     {/* <div className="mt-2 text-grey text-lg font-semibold text-center">Loading...</div>
      //<div className="mt-2 text-grey text-lg font-semibold text-center">{error}</div>
   // <div className="mt-2 text-grey text-lg font-semibold text-center">City not found</div> */}
     <p className="text-center text-xl text-blue-600 uppercase">{desc}</p>
    </div>

  </div>)
}
export default App;


