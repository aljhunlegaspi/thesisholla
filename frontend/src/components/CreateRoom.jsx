import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createRoom } from '../features/rooms/roomSlice'
import { Card, CardActionArea, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox'
function AddRoom() {
  const [roomno, setRoomno] = useState('')
  const [roomtype, setRoomtype] = useState('')
  const [rate, setRate] = useState('')
  const [roomstatus, setRoomstatus] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createRoom({ roomno, roomtype, rate, roomstatus }))
    setRoomno('')
    setRoomtype('')
    setRate('')
    setRoomstatus('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group d-block my-3'>
          <label htmlFor='roomNo'> Room Number </label>
          <input
            className="form-group-item form-control"
            type='text'
            name='roomno'
            id='roomno'
            value={roomno}
            onChange={(e) => setRoomno(e.target.value)}
          />

          <label htmlFor='text'> Room Type </label>
          <input
            className="form-group-item form-control"
            type='text'
            name='roomtype'
            id='roomtype'
            value={roomtype}
            onChange={(e) => setRoomtype(e.target.value)}
          />

          <label htmlFor='text'> Rate </label>
          <input
            className="form-group-item form-control"
            type='text'
            name='rate'
            id='rate'
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />

          <label htmlFor='text' hidden> Status </label>
          <input
          hidden
            className="form-group-item form-control"
            type='text'
            name='roomstatus'
            id='roomstatus'
            value={roomstatus}
            onChange={(e) => setRoomstatus(e.target.value)}
          />

        </div>
        <div className='form-group d-flex justify-content-center'>

        <Card type="submit" className="bg-info col-12" sx={{ maxHeight: 80, height: 80 }}>
          <CardActionArea sx={{ maxHeight: 80, height: 80 }}>
            <Typography gutterBottom variant="h6" component="div" className="text-center">
            <AddBoxIcon fontSize='large'/>
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-center">
              Add Room
            </Typography>

          </CardActionArea>
        </Card>
        </div>
      </form>
    </section>
  )
}

export default AddRoom
