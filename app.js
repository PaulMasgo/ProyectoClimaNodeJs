const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccionde la ciudad para obtener el clima',
            demand: true
        }
    }).argv;


let GetInfor = async(direccion) => {

    try {

        let coors = await lugar.ObtenerLugar(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return (`El clima de ${coors.direccion} es de ${temp}`);

    } catch (error) {
        return ('No de pudo obtener el clima')
    }

}

GetInfor(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err))