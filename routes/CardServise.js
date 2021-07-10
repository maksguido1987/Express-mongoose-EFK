const Card =  require('../model/Card.js');
const fileServise =  require('./FileServise.js');

class CardServise {
  async createWithFiles(card, image) {
    const fileName = fileServise.saveFile(image);
    const createdCard = await Card.create({...card, image: fileName});
    return createdCard;
  }

  async create(card) {
    const createdCard = await Card.create(card);
    return createdCard;
  }

  async getAll() {
    const cards = await Card.find();
    return cards;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не указан');
    }
    const card = await Card.findById(id);
    return card;
  }

  async update(card) {
    if (!card._id) {
      throw new Error('id не указан');
    }
    const updatePost = await Card.findByIdAndUpdate(card._id, card, {
      new: true,
    });
    return updatePost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('id не указан');
    }
    const card = await Card.findByIdAndDelete(id);
    return card;
  }
}

module.exports = new CardServise();
