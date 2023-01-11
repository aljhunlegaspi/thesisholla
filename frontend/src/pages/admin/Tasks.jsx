import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getGoals, reset } from '../../features/goals/goalSlice'
import Spinner from '../../components/Spinner';
import AddRoom from '../../components/CreateRoom';
import Modal from 'react-modal';
import useModal from '../../features/UseModal';
import Sidebar from '../../components/SideBar';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function Tasks() {
  const { isOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }



  return (
    <div className="d-flex flex-row">

    <Sidebar/>

    <Container className="col-8 mt-3 d-flex flex-row flex-wrap">
      <Box className="d-flex flex-row gap-3 col-9">
    <Box>
      <Card className="me-3 bg-info" sx={{ maxWidth: 400, width: 400, maxHeight: 100, height: 100 }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" 
              className="d-flex justify-content-between mt-3"
              >
                <span>Tasks Management</span> <AssignmentIcon fontSize='large'/>
              </Typography>
            </CardContent>
        </Card>
        </Box>
        <Box className="d-flex flex-row col-6 gap-3 justify-content-end">
        <Card sx={{ maxWidth: 200, width: 150, maxHeight: 100, height: 100 }}>
          <CardActionArea sx={{ maxWidth: 200, maxHeight: 100, height: 100 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="text-center">
                12
              </Typography>
              <Typography variant="body2" color="text.secondary" className="text-center">
                Active Tasks
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Backlog */}
        <Card sx={{ maxWidth: 200, width: 150, maxHeight: 100, height: 100 }}>
          <CardActionArea sx={{ maxWidth: 200, maxHeight: 100, height: 100 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="text-center">
                3
              </Typography>
              <Typography variant="body2" color="text.secondary" className="text-center">
                Backlogged Tasks
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Box>
      </Box>


      <Box className="d-block mt-3 border rounded" sx={{ height: 400}}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">RoomNo</th>
              <th scope="col">Room Type</th>
              <th scope="col">Rate</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal, index) => (
              <tr key={goal.id}>
                <th scope="row">{index + 1}</th>
                <td>{goal.text}</td>
                <td>{goal.createdAt}</td>
                <td>{goal.updatedAt}</td>
                <td>{goal.user}</td>
                <td className="d-flex justify-content-around gap-2">
                  <button className="btn btn-warning" onClick={openModal} > Edit </button>
                  <button className="btn btn-danger"> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      <Box className="d-block mt-3 border rounded justify-content-center text-center ms-4 p-2">
        <AddRoom />
      </Box>

      <Modal isOpen={isOpen} onRequestClose={closeModal} 
         style={{
          content: { 
            width: '50%', 
            height: '50%', 
            margin: 'auto', 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}}>

      </Modal>

    </Container>
    </div>
  );
}