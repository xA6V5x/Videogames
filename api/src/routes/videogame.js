const { Router } = require('express');
const router = Router();
const { getById } = require('../controllers/gameID');

router.get('/:idGame', async (req, res) => {
     const { idGame } = req.params;
     try {
          const gameDetails = await getById(idGame);
          res.json(gameDetails);
     } catch (error) {
          res.send('The idGame does not exist');
     }
});

module.exports = router;
