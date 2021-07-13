const Router = require('express');
const AuthController = require('./AuthUser/AuthController.js');
const CardController = require('./Cards/CardController.js');
const { check } = require('express-validator');

const router = new Router();

router.post('/cards', CardController.createWithFiles);
router.get('/cards', CardController.getAll);
router.get('/cards/:id', CardController.getOne);
router.put('/cards/:id', CardController.update);
router.delete('/cards/:id', CardController.delete);
router.post(
  '/registration',
  [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть не менее 6 символов').isLength({
      min: 6,
    }),
  ],
  AuthController.registration
);
router.post('/login', AuthController.login);
router.get('/users', AuthController.getUsers);

module.exports = router;
