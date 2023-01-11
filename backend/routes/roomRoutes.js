const express = require('express')
const router = express.Router()
const {
  getRooms,
  setRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/roomController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getRooms).post(setRoom)
router.route('/:id').delete(deleteRoom).put(updateRoom)

const All = require ("../models/roomsModel")

router.get("/allrooms",async(req,res)=>{
  try {
      const all = await All.find({})
      res.send(all)
  } catch (error) {
      return res.status(400).json({message: error});
  }
});

module.exports = router
