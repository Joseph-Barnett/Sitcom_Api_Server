const sitcom = require('../models/sitcom')

const index = (req, res) => {
  const sitcoms = sitcom.getAll()
  res.status(200).send({ data: sitcoms })
}

const show = (req, res) => {
  try {
    const sitcomId = parseInt(req.params.id)
    const sitcoms = sitcom.findById(sitcomId)
    res.status(200).send({ data: sitcoms })
  } catch (err) {
    res.status(404).send({ error: err.message })
  }
}

const create = (req, res) => {
  try {
    const data = req.body
    const newSitcom = sitcom.create(data)

    res.status(201).send({ data: newSitcom })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

// models/DB -> controllers -> routers -> app -> localhost:3000/villains
const update = (req, res) => {
  try {
    const { id } = req.params
    const sitcomToUpdate = sitcom.findById(parseInt(id))

    const updatedSitcom = sitcomToUpdate.update(req.body)
    res.status(200).send({ data: updatedSitcom })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

const destroy = (req,res) => {
  try {
      const { id } = req.params
      const sitcomToDelete = sitcom.findById(parseInt(id))

      sitcomToDelete.destroy()
      res.status(204).end()
  } catch (error) {
      res.status(404).send({error: error.message})
  }
}

module.exports = {
  index, show, create, update, destroy
}
