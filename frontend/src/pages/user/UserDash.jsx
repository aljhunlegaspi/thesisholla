import { useEffect } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner';
import { reset } from '../../features/goals/goalSlice'
function UserDash() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { /* goals, */ isLoading, isError, message } = useSelector(
        (state) => state.goals
      )



    useEffect(() => {
        if (isError) {
          console.log(message)
        }
    
        if (!user) {
          navigate('/login')
        }
    
        // dispatch(getGoals())
    
        return () => {
          dispatch(reset())
        }
      }, [user, navigate, isError, message, dispatch])
    
      if (isLoading) {
        return <Spinner />
      }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="justify-content-center">
          <h1 className="text-center">Welcome, {user && user.fname +' ' + user.lname} </h1>
          <div className="d-flex flex-wrap justify-content-center my-3">

          <Link to='/requests' className="text-decoration-none w-100"> 
          <Button variant="success" className="mx-2 my-2 col-12 text-wrap"> 
              Requests
            </Button>
            </Link>

            <Link  to='' className="text-decoration-none w-100">
                <Button variant="success" className="mx-2 col-12 my-2 text-wrap">
              Billing Account Information
            </Button>
            </Link>

            <Link  to='' className="text-decoration-none w-100">
            <Button variant="success" className="mx-2 my-2 col-12 text-wrap">
              Order Food
            </Button>
            </Link>

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDash;