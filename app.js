const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
//argv.direccion
//console.log(argv.direccion);


//const instance = axios.create({
//   baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
//  headers: { 'X-RapidAPI-Key': '3b12785e94msh63bac2ba5980fecp1e400fjsnead2afbf36dd' }
//});
//instance.get()
//  .then(resp => {
//    console.log(resp);
// })
//.catch(err => {
//  console.log('ERROR !!!');
//});

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log);

//clima.getClima(40.750000, -74.000000)
//  .then(console.log)
//  .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(argv.direccion)

        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `no se pudo determinar el clima de ${ direccion}`;
    }


    //el clima de xxx es de xx
    //no se pudo determinar el clima de xxxx
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);