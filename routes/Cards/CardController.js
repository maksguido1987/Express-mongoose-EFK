const CardServise = require('./CardServise.js');

class CardController {
  async createWithFiles(req, res) {
    try {
      const card = await CardServise.createWithFiles(req.body, req.files.image);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createWords(req, res) {
    try {
      const card = await CardServise.create(req.body);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const cards = await CardServise.getAll();
      return res.json(cards);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const card = await CardServise.getOne(req.params.id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updateCard = await CardServise.update(req.body);
      return res.json(updateCard);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const card = await CardServise.delete(id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new CardController();
