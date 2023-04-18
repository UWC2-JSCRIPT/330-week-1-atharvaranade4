const uuid = require('uuid');

const itemsModel = require('../models/items');

module.exports = {};


module.exports.getAll = () => {
  return itemsModel.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete
  let itembyId = itemsModel.items.find(item => item.id === itemId)
  return itembyId
}

module.exports.deleteById = async (itemId) => {
    // TODO: complete
    let resultItems = itemsModel.items.filter(item => item.id !== itemId)
    itemsModel.items = [...resultItems]
}

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete
    let itemToUpdate = itemsModel.items.find(item => item.id === itemId);
    if (itemToUpdate) {
      for (let propName in newObj) {
        if (propName === "id")
          continue;
        itemToUpdate[propName] = newObj[propName];
      }
    }
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}