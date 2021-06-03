import React, { Component } from 'react'
import Form from './Api/Form'
import Info from './Api/Info'
import Whather from './Api/Whather'

const API_KEY = 'a2aeb649998e8ced22c83a8af4923d7a';

class App extends Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        if (city) {
            const api_url = await
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            const data = await api_url.json();

            let sunsetInSec = data.sys.sunset
            let date = new Date(sunsetInSec * 1000)
            let timeSunset = date.toLocaleTimeString()
            let tempCel = Math.round(data.main.temp - 273);
            this.setState({
                temp: tempCel,
                city: data.name,
                country: data.country,
                pressure: data.main.pressure,
                sunset: timeSunset,
                error: undefined
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: 'Введите название города'
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container__info">
                    <Info />
                </div>
                <div className="container__form">
                    <Form weatherMethod={this.gettingWeather} />
                    <Whather {...this.state} />
                </div>
            </div>
        )
    }
}

export default App
