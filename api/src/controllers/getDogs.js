
const { Router } = require("express");
const {apiDogs} = require("../handlers/apiDogs")
const {dbDogs} = require("../handlers/dbDogs")
const router = Router();
const {Dog, Temperament} = require("../db")


router.get("/dogs", async(req,res)=>{
    try {
        
        const apiDogsAns = await apiDogs();
        const dbDogsAns = await dbDogs();

        const allDogs = [...apiDogsAns, ...dbDogsAns]

        res.json(allDogs)// Y devolverlo 
    } catch (error) {
        console.error("Error al obtener la raza de perros",error)
        res.status(500).json({error:"Ocurrio un error al obtener las razas de perros"})
    }
})
module.exports = router;