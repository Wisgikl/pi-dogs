const axios = require("axios")
const {API_KEY} = process.env
const {Temperament} = require("../db")
const { Router } = require("express");
const router = Router();


router.get("/temperaments",async(req,res)=>{
    try {
        const dataApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        
        const tempApi =  dataApi.data.map((d) => d.temperament )
            .filter(temperament => temperament)

        const temperaments = tempApi


        temperaments.forEach(element => {
            Temperament.findOrCreate({
                where: {
                    name : element
                }
            })
        });

        const temperamentDb = await Temperament.findAll();
        res.json(temperamentDb)
    } catch (error) {
        res.status(400).json({error:"No se pudo obtener los temperamentos"})
    }
})

module.exports = router