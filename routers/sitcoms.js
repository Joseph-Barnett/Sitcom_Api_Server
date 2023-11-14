const express = require('express')
const router = express.Router()

const SitcomController = require('../controllers/sitcoms')

router.get('/', SitcomController.index)
router.get('/:id', SitcomController.show)
router.post('/', SitcomController.create)
router.patch('/:id', SitcomController.update)
router.delete(':id', SitcomController.destroy)

module.exports = router
