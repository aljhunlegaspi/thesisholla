const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

const All = require ("../models/goalModel")

router.get("/allgoals",async(req,res)=>{
  try {
      const all = await All.find({})
      res.send(all)
  } catch (error) {
      return res.status(400).json({message: error});
  }
});

module.exports = router
