const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;
const key = '04429409f80343afa0c07f8723ef54eb';

// --------------OBTENER LOS GENRES Y GUARDARLOS EN LA DB--------------

router.get('/', async (req, res) => {
     const getApi = await axios.get(`https://api.rawg.io/api/genres?key=${key}`);
     const genres = getApi.data.results.map(async (data) => {
          const findGenre = await Genre.findOrCreate({
               where: {
                    id: data.id,
                    name: data.name,
               },
          });
          return findGenre;
     });
     const response = await Promise.all(genres);
     const result = response.flat().filter(Boolean);
     res.json(result);
});

module.exports = router;
