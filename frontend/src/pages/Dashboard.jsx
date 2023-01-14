import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

import Spinner from '../components/Spinner'
import AdminDash from './admin/AdminDash'
import UserDash from './user/UserDash'
// import GoalItem from '../components/GoalItem'
// import GoalForm from '../components/GoalForm'
// import Requests from './user/Requests'

export default function Dashboard() {

  const navigate = useNavigate()

  const { user, isLoading, isError, message } = useSelector((state) => state.auth)
  const userRole = useMemo(() => user && user.role, [user]);

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
  
  userRole === 0 ? <AdminDash /> : 
  // userRole === 2 ? <EmployeeDash /> : uncomment this line when employee dash is complete
  <UserDash />
  );
}