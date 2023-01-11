const asyncHandler = require('express-async-handler')

const Room = require('../models/roomsModel')
const User = require('../models/userModel')

// @desc    Get rooms
// @route   GET /api/rooms
// @access  Private

// const getRooms = asyncHandler(async (req, res) => {
//     const goals = await Goal.find({ user: req.user.id })
//     res.status(200).json(goals)
// })

const getRooms = asyncHandler(async (req, res) => {
  let query = { user: req.user.id };

  if (req.user.role === 0) {
    query = {

    };
  }

  const rooms = await Room.find(query);
  res.status(200).json(rooms);
});

// @desc    Set room
// @route   POST /api/rooms
// @access  Private
const setRoom = asyncHandler(async (req, res) => {
  const { roomno, roomtype, rate, roomstatus } = req.body;
  if (!roomno || !roomtype || !rate ) {
    res.status(400).json({error : 'Please add all required fields'})
    return;
  }

  const room = await Room.create({
    roomno,
    roomtype,
    rate,
    roomstatus
  });

  res.status(200).json(room);
});

// @desc    Update room
// @route   PUT /api/rooms/:id
// @access  Private
const updateRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id)

  if (!room) {
    res.status(400)
    throw new Error('No rooms found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user is administrator
  if (req.user.role !== 1) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedRoom)
})

// @desc    Delete room
// @route   DELETE /api/rooms/:id
// @access  Private
const deleteRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id)

  if (!room) {
    res.status(400)
    throw new Error('Room not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user is admin
  if (req.user.role !== 1) {
    res.status(401)
    throw new Error('User not authorized. Not admin')
  }

  await room.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRooms,
  setRoom,
  updateRoom,
  deleteRoom,
}
