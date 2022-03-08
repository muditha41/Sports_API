const express = require("express");
const teamCardsController = require("../controllers/teamCard.controller");
const checkAuthMiddleware = require('../middleware/check-auth');
const router= express.Router();

// Team routes
router.get('/', teamCardsController.getTeamCards);
router.get('/:id',teamCardsController.getTeamCardById);
router.post('/',teamCardsController.addNewTeamCard);
router.patch('/:id', teamCardsController.updateTeamCard);
router.delete('/:id', teamCardsController.deleteTeamCard);

module.exports = router;