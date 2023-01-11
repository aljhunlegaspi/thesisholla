import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

export default function ReqForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (

    
    <section className='form d-flex justify-content-center align-items-center flex-column'>
      <form onSubmit={onSubmit}>
        <div className='form-group d-flex flex-column align-items-center justify-content-center mt-5'>
          <label htmlFor='text'>Make Request</label>
          <input
            className='form-control'
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group d-flex justify-content-center mt-3'>
          <button className='btn btn-primary' type='submit'>
            Submit Request
          </button>
        </div>
      </form>
    </section>
  )
}
