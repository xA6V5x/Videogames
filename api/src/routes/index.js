const { Router } = require('express');
const axios = require('axios')
const { API_KEY } = process.env
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
console.log(API_KEY)


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req, res) => {
    const api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    res.json(api.data);
})


module.exports = router;
