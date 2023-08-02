
const {Dog, Temperament} = require("../db")

const dbDogs = async () =>{
    const dogsDb = await Dog.findAll({
        include:[
            {
                model:Temperament,
                attributes: ["name"],
                through:{
                    attributes:[],
                }
            }
        ]
    });

    const dogs = dogsDb.map(dog =>{

        const temperaments = dog.temperaments.map(temp => temp.name).join(",");

        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            image: dog.image.url,
            temperament: temperaments
        }
    })
    console.log(dogs)
    return dogs
}

module.exports = {dbDogs}