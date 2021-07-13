const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config');

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Ошибка регистрации', errors });
      }
      const { username, password } = req.body;
      const condidate = await User.findOne({ username });
      if (condidate) {
        return res
          .status(400)
          .json({ message: 'Пользователь с таким именем уже существует' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ username, password: hashPassword });
      await user.save();
      return res.json({ message: 'Пользователь успешно создан' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${username} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Введён неверный пароль' });
      }
      const token = generateAccessToken(user._id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthController();
