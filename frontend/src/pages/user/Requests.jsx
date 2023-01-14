import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ReqForm from '../../components/ReqForm'
import GoalItem from '../../components/GoalItem'
import Spinner from '../../components/Spinner'
import { getGoals, reset } from '../../features/goals/goalSlice'
// import GoalForm from '../../components/GoalForm'       

function Requests() {
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
    <>
      <section className='heading'>
        <p>Guest Req Page</p>
      </section>

      <ReqForm />

      <section className='heading'>
        <p>Previous Requests</p>
      </section>
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have yet to create a request.</h3>
        )}
      </section>
    </>
  )
}

export default Requests



