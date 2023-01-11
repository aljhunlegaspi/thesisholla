const express = require('express')
const router = express.Router()
const {
  getFoods,
  setFood,
  updateFood,
  deleteFood,
} = require('../controllers/foodController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getFoods).post(protect, setFood)
router.route('/:id').delete(protect, deleteFood).put(protect, updateFood)

const All = require ("../models/foodsModel")

router.get("/allfoods",async(req,res)=>{
  try {
      const all = await All.find({})
      res.send(all)
  } catch (error) {
      return res.status(400).json({message: error});
  }
});

module.exports = router
