const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedUlr = encodeURI(dir);
    //console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'X-RapidAPI-Key': '3b12785e94msh63bac2ba5980fecp1e400fjsnead2afbf36dd' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new ERROR(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    //   .then(resp => {
    //      console.log(resp.data.Results[0]);
    //  })
    //  .catch(err => {
    //    console.log('ERROR!!!!', err);
    // });

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}