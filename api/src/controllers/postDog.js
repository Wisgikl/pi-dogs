const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();

router.post("/dogs", async (req, res) => {
  const {
    name,
    height,
    weight,
    life_span,
    image,
    temperament
    
  } = req.body;
  try {
      
      const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
        
      });
      let createdDb = await Temperament.findAll({
        where: { 
          name: temperament
         }
      });
    
      console.log(createdDb)
      newDog.addTemperament(createdDb);
      res.json(newDog)
    
    } catch (error) {
    return res.status(404).send("Dog Not Created");    
  }
});

module.exports = router;