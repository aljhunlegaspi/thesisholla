import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalItem from '../components/GoalItem'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {


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
        <p>Holla Dashboard</p>
      </section>
    <GoalForm/>
    {user && user.role !== 1
        ?
        <section className='content'>
            <span> ADMIN VIEW </span>
        {goals.length > 0 ? (
          
          <div className='goals'>
            {goals.map((goal) => (
              
              <GoalItem key={goal._id} goal={goal}> 
            
              </GoalItem>
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>

        :

        <section className='content'>
        <span> GUEST VIEW </span>
        {goals.length > 0 ? (
          
          <div className='goals'>
            {goals.map((goal) => (
              
              <GoalItem key={goal._id} goal={goal}> 
            
              </GoalItem>
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
          
        )}
  </section>}



    </>
  )
}

export default Dashboard
