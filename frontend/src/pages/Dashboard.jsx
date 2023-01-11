import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoalItem from '../components/GoalItem'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import AdminDash from './admin/AdminDash'
import UserDash from './user/UserDash'

export default function Dashboard() {

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

  }, [ user, navigate, isError, message ])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <AdminDash/>
  );
}