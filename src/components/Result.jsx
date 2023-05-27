import React, { Component } from "react";
import "./Result.css";

export default function Result({weatherData}) {
   
    return (

      <div className="result-div">
        {
            weatherData.name !== undefined?
        <>    
        <h1 className="city">{weatherData.name}</h1>
        <div className="details-div">
          <div>
            <h2>Max Temp :{weatherData.main.temp_max} deg</h2>
            <div>
                <img srcSet={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                </div>
          </div>
          <div>
            <h2>Min Temp :{weatherData.main.temp_min} deg</h2>
            <div>{weatherData.weather[0].main}</div>
          </div>
        </div>
      </>
      :
      <h1>
        Please Enter City Name
      </h1>
        }
        </div>
    );
  }

  