
const { Router } = require("express");
const {apiDogs} = require("../handlers/apiDogs")
const {dbDogs} = require("../handlers/dbDogs")
const router = Router();

router.get("/name",async(req,res)=>{
    //Obtengo el valor por query desde la URL
    const {name} = req.query;

    try {
        //Obtencion de todas las razas de perro(Api y Bd)

        const apiDogsAns = await apiDogs();
        const dbDogsAns = await dbDogs();
        const allDogs = [...apiDogsAns, ...dbDogsAns]
        
        //Filtro las razas que coinciden con el nombre recibido por query
        
        const matchingDogs = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
        
        console.log(matchingDogs)
        res.json(matchingDogs)

    } catch (error) {

        res.status(404).json({error:"No se encontraron razas de perro con ese nombre"})
    }
})
module.exports = router;