import './App.css';
import Search from './components/Search';
import Result from './components/Result';
import { useState } from 'react';
import axios from 'axios';
function App() {


  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]); 

  const searchChange =(value)=>{
    setSearch(value)
    // console.log(value)
  }

  const getWeatherData = () =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7cfb3ed748d815f472c6c083f94d1aa0&units=metric`)
    .then((response)=>{
      setWeather(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="container">
      <Search searchData={search} eventHandler={searchChange} searchWeather={getWeatherData} />
      <Result weatherData={weather}/>
    </div>
  );
}

export default App;



// 7cfb3ed748d815f472c6c083f94d1aa0

// https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=7cfb3ed748d815f472c6c083f94d1aa0