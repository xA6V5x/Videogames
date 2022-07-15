const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Genre } = require('../db')
const { API_KEY } = process.env
const key = '04429409f80343afa0c07f8723ef54eb';

// --------------OBTENER LOS GENRES Y GUARDARLOS EN LA DB--------------

router.get('/', async (req, res) => {
    const getApi = await axios.get(`https://api.rawg.io/api/genres?key=${key}`)
    const genres = getApi.data.results.map(async (data) => {
        const findGenre =
            await Genre.findOrCreate({
                where: {
                    id: data.id,
                    name: data.name
                }
            });
        return findGenre;
    });
    const result = await Promise.all(genres)
    res.json(result.flat())
})


// router.get('/', async (req, res) => {
//     const response = await axios.get(
//         `https://api.rawg.io/api/genres?key=${key}`
//       );
//       let genresApi = response.data.results.map((g) => {
//         let genres = {
//           Name: g.name,
//         };
//         return genres;
//       });

//       for (let i = 0; i < genresApi.length; i++) {
//         await Genre.findOrCreate({where: { name: genresApi[i].Name }});
//       }
//       const genre = await Genre.findAll();
//       res.json(genre);
// })



module.exports = router;