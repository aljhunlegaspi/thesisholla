const asyncHandler = require('express-async-handler')

const Food = require('../models/foodsModel')
const User = require('../models/userModel')

// @desc    Get rooms
// @route   GET /api/rooms
// @access  Private

// const getRooms = asyncHandler(async (req, res) => {
//     const goals = await Goal.find({ user: req.user.id })
//     res.status(200).json(goals)
// })

const getFoods = asyncHandler(async (req, res) => {
  let query = {};

  const foods = await Food.find(query);
  res.status(200).json(foods);
});

// @desc    Set room
// @route   POST /api/rooms
// @access  Private
const setFood = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const food = await Food.create({
    foodName: req.body.text,
    foodType: req.body.text,
    foodPrice: req.body.text,
    foodStatus: req.body.text,
  })

  res.status(200).json(food)
})

// @desc    Update room
// @route   PUT /api/rooms/:id
// @access  Private
const updateFood = asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id)

  if (!food) {
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

  const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedFood)
})

// @desc    Delete room
// @route   DELETE /api/rooms/:id
// @access  Private
const deleteFood = asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id)

  if (!food) {
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

  await food.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getFoods,
  setFood,
  updateFood,
  deleteFood,
}
