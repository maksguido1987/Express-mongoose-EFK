const Router = require('express');
const { model } = require('mongoose');
const PostController = require('./CardController.js');

const router = new Router();

router.post('/cards', PostController.create);
router.get('/cards', PostController.getAll);
router.get('/cards/:id', PostController.getOne);
router.put('/cards/:id', PostController.update);
router.delete('/cards/:id', PostController.delete);

module.exports = router;
