const axios = require("axios")
const {API_KEY} = process.env

const apiDogs = async () =>{
    // Uso axios para traer la informacion de la api para luego usarla en el front
    const dataApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    // Mapeo todos los dogs y devuelvo el array que contiene propiedades especificas
    const dogsApi = await dataApi.data.map( (dog) => {
            return {
                id: dog.id,
                name: dog.name,
                height: parseInt(dog.height),
                weight: parseInt(dog.weight),
                life_span: dog.life_span,
                image: dog.image.url,
                temperament: dog.temperament
            }
    })
    return dogsApi
}

module.exports = {apiDogs}