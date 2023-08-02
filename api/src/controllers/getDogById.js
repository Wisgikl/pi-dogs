const { Router } = require("express");
const {apiDogs} = require("../handlers/apiDogs")
const {dbDogs} = require("../handlers/dbDogs")
const router = Router();



router.get("/:id", async(req,res)=>{
    const id = req.params.id//Parseo la informacion a num entero
    try {
        //Obtencion de todas las razas de perro(Api y Bd)

        const apiDogsAns = await apiDogs();
        // Busqueda de la raza especifica por su ID
        const filteredById = await apiDogsAns.find(d => d.id === Number(id))
        console.log(filteredById)
        res.json(filteredById)

    } catch (error) {

        res.status(404).json({error:"Raza no encontrada"})
    }
})


module.exports = router;