const mongoose = require('mongoose')

const roomSchema = mongoose.Schema(
  {
    roomno: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    roomtype: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    rate: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    roomstatus: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Room', roomSchema)

