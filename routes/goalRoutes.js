const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
} = require('../controller/goalController')

router.get('/', getGoals).post('/', setGoals)
router.put('/:id', updateGoal).delete('/:id', deleteGoal)

module.exports = router
