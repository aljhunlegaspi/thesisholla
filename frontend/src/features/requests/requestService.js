import axios from 'axios'

const API_URL = '/api/requests/'

// Create new goal
const createRequest = async (requestData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, requestData, config)

  return response.data
}

// Get user goals
const getRequests = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteRequest = async (requestId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + requestId, config)

  return response.data
}

const requestService = {
  createRequest,
  getRequests,
  deleteRequest,
}

export default requestService
