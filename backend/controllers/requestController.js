const asyncHandler = require('express-async-handler')

const Request = require('../models/requestModel')
const User = require('../models/userModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
// const getGoals = asyncHandler(async (req, res) => {
//     const goals = await Goal.find({ user: req.user.id })
//     res.status(200).json(goals)
// })

const getRequests = asyncHandler(async (req, res) => {
  let query = { user: req.user.id };

  if (req.user.role === 0) {
    query = {};
  }

  const requests = await Request.find(query);
  res.status(200).json(requests);
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setRequest = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const request = await Request.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(request)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id)

  if (!request) {
    res.status(400)
    throw new Error('Request not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (request.user.toString() !== req.user.id && req.user.role !== 0 || 1) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedRequest)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id)

  if (!request) {
    res.status(400)
    throw new Error('Request not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (request.user.toString() !== req.user.id && req.user.role !== 0) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await request.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRequests,
  setRequest,
  updateRequest,
  deleteRequest,
}
