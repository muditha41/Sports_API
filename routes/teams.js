const express = require("express");
const teamsController = require("../controllers/team.controller");
const checkAuthMiddleware = require('../middleware/check-auth');
const router= express.Router();

// Team routes
router.get('/', teamsController.getTeams);
router.get('/:id',teamsController.getTeamById);
router.post('/',teamsController.addNewTeam);
router.patch('/:id', teamsController.updateTeam);
router.delete('/:id', teamsController.deleteTeam);

module.exports = router;