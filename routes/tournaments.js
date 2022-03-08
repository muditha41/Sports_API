const express = require("express");
const tournamentsController = require("../controllers/tournament.controller");
const checkAuthMiddleware = require('../middleware/check-auth');
const router= express.Router();

// Team routes
router.get('/', tournamentsController.getTournaments);
router.get('/:id',tournamentsController.getTournamentById);
router.post('/',tournamentsController.addNewTournament);
router.patch('/:id', tournamentsController.updateTournament);
router.delete('/:id', tournamentsController.deleteTournament);

module.exports = router;