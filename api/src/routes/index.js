const { Router } = require('express');
const getdogid = require("../controllers/getDogById")
const getdogname = require("../controllers/getDogByName")
const getdogs = require("../controllers/getDogs")
const postdog = require("../controllers/postDog")
const gettemp = require("../controllers/getTemperament")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/:id",getdogid)
router.use("/",getdogs)
router.use("/",getdogname)
router.use("/",postdog)
router.use("/",gettemp)
module.exports = router;
