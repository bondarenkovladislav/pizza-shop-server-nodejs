const {Router} = require('express')
const Pizza = require('../src/models/Pizza')
const Ingredient = require('../src/models/Ingredients')
const router = Router()

router.get('/', async (req, res) => {
    const result = await Pizza.find()
    res.status(200).send({data: result})
})

router.get('/ing', async (req, res) => {
    const result = await Ingredient.find()
    res.status(200).send({data: result})
})

module.exports = router
