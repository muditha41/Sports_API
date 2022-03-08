const express = require("express");
const playersController = require("../controllers/player.controller");
const checkAuthMiddleware = require('../middleware/check-auth');
const router= express.Router();

// Team routes
router.get('/', playersController.getPlayers);
router.get('/:id',playersController.getPlayerById);
router.post('/',playersController.addNewPlayer);
router.patch('/:id', playersController.updatePlayer);
router.delete('/:id', playersController.deletePlayer);

module.exports = router;