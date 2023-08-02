
const {apiDogs} = require("./apiDogs")
const {dbDogs} = require("./dbDogs")




 const getAllDogs = async () => {
     const apiDogsResult = await apiDogs();
     const dbDogsResult = await dbDogs();

     return [...apiDogsResult, ...dbDogsResult]
 }

 module.exports = {getAllDogs}