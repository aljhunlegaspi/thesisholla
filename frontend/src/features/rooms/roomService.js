import axios from 'axios'

const API_URL = '/api/rooms/'

// Create new goal
const createRoom = async (roomData) => {

  const response = await axios.post(API_URL, roomData)

  return response.data
}

// Get user goals
// const getRooms = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.get(API_URL, config)

//   return response.data
// }

//Get rooms with no check

const getRooms = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Delete user goal
const deleteRoom = async (roomId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + roomId, config)

  return response.data
}

// Update Room
const updateRoom = async (roomId, roomData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.patch(API_URL + roomId, roomData, config)

  return response.data
}

const roomService = {
  createRoom,
  updateRoom,
  getRooms,
  deleteRoom,
}
export { getRooms }
export default roomService

