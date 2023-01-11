import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import requestService from './requestService'

const initialState = {
  requests: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new request
export const createRequest = createAsyncThunk(
  'requests/create',
  async (requestData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await requestService.createRequest(requestData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user request
export const getRequests = createAsyncThunk(
  'requests/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await requestService.getRequests(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user request
export const deleteRequest = createAsyncThunk(
  'requests/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await requestService.deleteRequest(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRequest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.requests.push(action.payload)
      })
      .addCase(createRequest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getRequests.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRequests.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.requests = action.payload
      })
      .addCase(getRequests.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteRequest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.requests = state.requests.filter(
          (request) => request._id !== action.payload.id
        )
      })
      .addCase(deleteRequest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = requestSlice.actions
export default requestSlice.reducer
