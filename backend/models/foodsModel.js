const mongoose = require('mongoose')

const foodSchema = mongoose.Schema(
  {
    foodName: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    foodType: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    foodPrice: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    foodStatus: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Food', foodSchema)

