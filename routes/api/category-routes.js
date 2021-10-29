const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    Category.findAll({
      include: [Product]
    }).then(categories => {
      res.status(200).json(categories)
    })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    Category.findByPk(req.params.id, {
      include: [Product]
    }).then(category => {
      if (category) {
        res.status(200).json(category)
      } else {
        res.status(404).json({ message: 'Category not found.' })
      }
    })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    Category.create({
      category_name: req.body.category_name
    }).then(newCategory => {
      res.status(200).json({ newCategory })
    })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    Category.update({
      category_name: req.body.category_name
    },
      {
        where: {
          id: req.params.id
        }
      }).then(categoryUpdated => {
        if (!categoryUpdated) {
          res.status(404).json({ message: 'category not found.' })
        } else {
          res.status(200).json({ categoryUpdated })
        }
      })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(categoryDeleted => {
      if (!categoryDeleted) {
        return res.status(404).json({ message: 'Category not found' })
      } else {
        res.status(200).json({message: "Category deleted"})
      }
    })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

module.exports = router;
