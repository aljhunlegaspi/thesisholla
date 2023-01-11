import Modal from 'react-modal';
import useModal from '../features/UseModal';
import { useSelector, useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
// import { useEffect, useState } from 'react';


function GoalItem({ goal }) {
  
  const { isOpen, openModal, closeModal } = useModal();
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  return (
    <>
      <button onClick={openModal} className='goal' >
        <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
        <h2>{goal.text}</h2>
      </button>

      <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'> Delete Task </button>
  
            <table className="table"> 
              <thead>
                <tr>
                  <th scope="col"> Details </th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> Created at: {new Date(goal.createdAt).toLocaleString('en-US')}</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"> Created by: <b>{user && user.fname + ' ' + user.lname}</b></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">Category:</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">Details:</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>

                </tr>
              </tbody>
            </table>
          
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}

export default GoalItem
