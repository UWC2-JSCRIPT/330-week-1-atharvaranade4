const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  // TODO: complete this route
  let result = itemDao.getById(req.params.id)
  if (result){
    res.status(200).send(result)
  }
  res.sendStatus(404)
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  // TODO: complete this route
  const itemId = req.params.id;
  const newObj = req.body;

  if (itemDao.updateById(itemId, newObj))
    res.sendStatus(200);
  else
    res.sendStatus(404);
});

router.delete("/:id", (req, res, next) => {
  // TODO: complete this route
  itemDao.deleteById(req.params.id)
  res.sendStatus(200)
});

module.exports = router;
