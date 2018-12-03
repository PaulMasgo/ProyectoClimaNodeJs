const axios = require('axios')


const getCoors = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)


    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`Nohay registros para el lugar ${direccion}`);
    } else {
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        return {
            direccion: location.formatted_address,
            lat: coors.lat,
            lng: coors.lng
        }
    }

}

module.exports = {
    ObtenerLugar: getCoors
}