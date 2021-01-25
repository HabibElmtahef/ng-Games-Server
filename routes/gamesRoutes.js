const router = require('express').Router();

const gamesController = require('../controllers/gamesController');


router.get('/games', gamesController.listGames);
router.get('/games/:id', gamesController.getOne);
router.post('/addGame', gamesController.addGame);
router.put('/updateGame/:id', gamesController.updateGame);
router.delete('/deleteGame/:id', gamesController.deleteGame);

module.exports = router;