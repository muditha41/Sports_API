const express = require("express");
const postsController = require("../controllers/post.controller");
const checkAuthMiddleware = require('../middleware/check-auth');
const router= express.Router();

// post routes
router.get('/',checkAuthMiddleware.checkAuth, postsController.getPosts);
router.get('/:id',postsController.getPostById);
router.post('/',postsController.addNewPost);
router.patch('/:id',checkAuthMiddleware.checkAuth, postsController.updatePost);
router.delete('/:id',checkAuthMiddleware.checkAuth, postsController.deletePost);

module.exports = router;