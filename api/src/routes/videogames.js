const { Router } = require('express');
const router = Router();
const { getAllGames } = require('../controllers/videogames');
const { newGame } = require('../controllers/newGame');

// ----------------------------OBTENER TODOS LOS JUEGOS----------------------------

router.get('/', async (req, res) => {
     const { name } = req.query;
     try {
          const allGames = await getAllGames();
          if (name) {
               const nameGame = await allGames.filter((game) =>
                    game.name.toLowerCase().includes(name.toLowerCase())
               );
               nameGame.length ? res.send(nameGame) : res.json(`The Game "${name}" does not exist`);
          } else {
               res.json(allGames);
          }
     } catch (error) {
          res.json(error);
     }
});

// ----------------------------POST NEW GAME----------------------------

router.post('/', async (req, res) => {
     const { name, description, released, img, rating, platforms, genres } = req.body;

     if (name && description && platforms) {
          try {
               newGame(name, description, released, img, rating, platforms, genres);
               res.send(`The Game "${name}" has been Created Successfully`);
          } catch (error) {
               res.send('Something Failed');
          }
     } else {
          res.status(404).send('Data needed to proceed is missing');
     }
});

module.exports = router;
