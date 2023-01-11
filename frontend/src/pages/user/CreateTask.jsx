import GoalForm from '../../components/GoalForm'       
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import RequestItem from '../../components/RequestItem'
import Spinner from '../../components/Spinner'
import { getRequests, reset } from '../../features/requests/requestSlice'


export default function OrderFood() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { requests, isLoading, isError, message } = useSelector(
    (state) => state.requests
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getRequests())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="container-md d-flex flex-row bg-danger mx-auto" style={{height: "100vh"}}>

        <div className="container-sm card d-flex flex-column bg-warning align-self-center m-auto" style={{height: "80vh", width: "40%"}}>
        <div class="card-body">
    <h5 className="card-title">Create a Request</h5>
    <h6 className="card-subtitle mb-2 text-muted">Fill out the following form</h6>
    <GoalForm />

  </div>

      </div>

      <div className="container bg-primary align-self-center" style={{height: "80vh", width: "60%"}}>
      <section className='heading'>
        <p>Create a Request</p>
      </section>
      <section className='heading'>
        <p>Previous Requests</p>
      </section>
      <section className='content'>
      {requests.length > 0 ? (
          <div className='requests'>
            {requests.map((request) => (
              <RequestItem key={request._id} request={request} />
            ))}
          </div>
        ) : (
          <h3>No requests yet.</h3>
        )}
      </section>
      </div>
    </div>
  )
}



