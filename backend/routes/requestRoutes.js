const express = require('express')
const router = express.Router()
const {
  getRequests,
  setRequest,
  updateRequest,
  deleteRequest,
} = require('../controllers/requestController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRequests).post(protect, setRequest)
router.route('/:id').delete(protect, deleteRequest).put(protect, updateRequest)

const All = require ("../models/requestModel")

router.get("/allrequests",async(req,res)=>{
  try {
      const all = await All.find({})
      res.send(all)
  } catch (error) {
      return res.status(400).json({message: error});
  }
});

module.exports = router
