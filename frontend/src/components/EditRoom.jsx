import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateRoom } from '../features/rooms/roomSlice'
import { Card, CardActionArea, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox'

function EditRoom({ room }) {
  const [roomno, setRoomno] = useState(room ? room.roomno : '');
  const [roomtype, setRoomtype] = useState(room ? room.roomtype : '');
  const [rate, setRate] = useState(room ? room.rate : '');
  const [roomstatus, setRoomstatus] = useState(room ? room.roomstatus : '');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (room) {
      // Update Room
      dispatch(updateRoom({ roomno, roomtype, rate, roomstatus, id: room._id }));
    }
    setRoomno('');
    setRoomtype('');
    setRate('');
    setRoomstatus('');
  };

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

          <label htmlFor='text'> Status </label>
          <input
            className="form-group-item form-control"
            type='text'
            name='roomstatus'
            id='roomstatus'
            value={roomstatus}
            onChange={(e) => setRoomstatus(e.target.value)}
          />

        </div>
        <div className='form-group d-flex justify-content-center'>

        <Card type="submit" className="bg-warning col-12" sx={{ maxHeight: 80, height: 80 }}>
          <CardActionArea sx={{ maxHeight: 80, height: 80 }}>
            <Typography gutterBottom variant="h6" component="div" className="text-center">
            <AddBoxIcon fontSize='large'/>
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-center">
              Update Room Details
            </Typography>

          </CardActionArea>
        </Card>
        </div>
      </form>
    </section>
  )
}

export default EditRoom
