import clearicon from "./images/clouds.png"
import humidity from "./images/humidity.png"
import wind from "./images/wind.png"
function Weatherdetails(props){
    return(<>
    <div className="image text-center my-3 mx-12">
        <img src={props.icon} alt=""  className="h-40 w-40 text-center"></img>
        </div>
        <div className="temp my-1 text-3xl  text-gray-900 uppercase text-center font-bold">{props.temp}°C</div>
        <div className="Location my-1 text-4xl   uppercase text-center text-pink-700">{props.city}</div>
        <div className="Country my-1 text-xl font-semibold text-gray-800 uppercase text-center">{props.country}</div>
        <div className="cord flex justify-center align-center gap-4 mt-2 text-center">
            <div className="flex flex-col justify-center align-center">
                <spam className="lat">Latitude</spam>
                <spam className="log text-xl font-bold pt-1">{props.lat}</spam>
            </div>
            <div className="flex flex-col justify-center align-center p-3">
                <spam className="log text-sm">Longitude</spam>
                <spam className="log text-xl font-bold pt-1">{props.log}</spam>
            </div>
        </div>
        <div className="data-container flex justify-between my-2">
            <div className="element text-center ">
                <img src={humidity} className="icon w-10 h-10 ml-3"></img>
                <div className="data">
                    <div className="humidity-per">{props.humidity}%</div>
                    <div className="text text-sm text-gray-700">Humidity</div>
                </div>
            </div>
            <div className="element text-center">
                <img src={wind} className="icon w-10 h-10 ml-6"></img>
                <div className="data">
                    <div className="humidity-per">{props.wind}Km/hr</div>
                    <div className="text text-sm text-gray-700">Wind speed</div>
                </div>
            </div>
        </div>
        </>)
}
export default Weatherdetails