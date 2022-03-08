const express = require("express");
const matchesController = require("../controllers/match.controller");
const checkAuthMiddleware = require('../middleware/check-auth');
const router= express.Router();

// Team routes
router.get('/', matchesController.getMatches);
router.get('/:id',matchesController.getMatchById);
router.post('/',matchesController.addNewMatch);
router.patch('/:id', matchesController.updateMatch);
router.delete('/:id', matchesController.deleteMatch);

module.exports = router;