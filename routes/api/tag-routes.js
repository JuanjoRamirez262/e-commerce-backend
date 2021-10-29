const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    Tag.findAll({
      include: [Product]
    }).then(tags => {
        res.status(200).json(tags)
      })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    Tag.findByPk(req.params.id, {
      include: [Product]
    }).then(tags => {
      if (tags) {
        res.status(200).json(tags)
      } else {
        res.status(404).json({ message: 'Tag not found.' })
      }
    })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    Tag.create({
      tag_name: req.body.tag_name
    }).then(newtag => {
      res.status(200).json({ newtag })
    })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update({
      tag_name: req.body.tag_name
    },
      {
        where: {
          id: req.params.id
        }
      }).then(tagUpdated => {
        if (!tagUpdated) {
          res.status(404).json({ message: 'tag not found.' })
        } else {
          res.status(200).json({ tagUpdated })
        }
      })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    Tag.destroy({
      where: {
        id: req.params.id
      }
    }).then(tagDeleted => {
      if (!tagDeleted) {
        return res.status(404).json({ message: 'Tag not found' })
      } else {
        res.status(200).json({message: "Tag deleted"})
      }
    })
  } catch (err) {
    res.status(500).json({ message: 'An error ocurred', err })
  }
});

module.exports = router;
