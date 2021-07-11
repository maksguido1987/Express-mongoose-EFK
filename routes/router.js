const Router = require('express');
const CardController = require('./CardController.js');

const router = new Router();

router.post('/cards', CardController.createWithFiles);
router.get('/cards', CardController.getAll);
router.get('/cards/:id', CardController.getOne);
router.put('/cards/:id', CardController.update);
router.delete('/cards/:id', CardController.delete);

module.exports = router;
