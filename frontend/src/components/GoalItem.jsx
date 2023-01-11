import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Modal from 'react-modal';
import useModal from '../features/UseModal';
import { useSelector, useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'


export default function GoalItem({ goal }) {
 
  const { isOpen, openModal, closeModal } = useModal();
const { user } = useSelector((state) => state.auth)

const dispatch = useDispatch()


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'details', headerName: 'Details', width: 130 },
  { field: 'createdAt:', headerName: 'Created at:', width: 130 }, 
  { field: 'createdBy', headerName: 'Created by:', width: 130 },
  {
    field: 'Category',
    headerName: 'Category',
    width: 90,
  },
  {
    field: 'Details',
    headerName: 'Details',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
  },
];

const rows = [
  { id: 1, details: 'Test', createdAt: new Date(goal.createdAt).toLocaleString('en-US'), createdBy: user && user.fname + ' ' + user.lname,},
];



  return (
    <>
    <button onClick={openModal} className='goal' >
    <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
    <h2>{goal.text}</h2>
  </button>


    <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false} style={{ height: 400, width: '100%' }}>
    <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'> Delete Task </button>
      <DataGrid
        rows={rows}
        columns={columns}
        //pageSize={5}
        //rowsPerPageOptions={[5]}
        checkboxSelection
        experimentalFeatures={{ newEditingApi: true }}
        >
      <button onClick={closeModal}>Close</button>
       </DataGrid>
    </Modal>
    </>
  );
}