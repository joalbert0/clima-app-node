const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=47abec3c9bb7b8ec8ffb5696bfae83fb&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}