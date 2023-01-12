import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Holla250 from '../assets/holla250.png'
export default function Header2() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }

return (
<nav className="navbar navbar-expand navbar-light m-0 d-flex justify-content-around"
style={{backgroundColor: '#000000', color: '#FFFF00'}}>
    <div className="container-fluid">
        <img src={Holla250} alt="Holla Logo" style={{height: '50px'}}/>
        <div className="d-flex align-items-center">
            {user ?
                (
                    <>
            <span className="text-white me-5"> Hello, {user && user.fname}! </span>
                        <button type="button" className="btn btn-light ml-auto" onClick={onLogout}
                        style={{backgroundColor: '#000000', color: '#FFFF00'}}>
                            <LogoutIcon/> Logout
                        </button>
                    </>
                )
                :
                (
                    <>
                        <Link to='/'> <IconButton>
                            <LoginIcon/> Login
                        </IconButton>
                        </Link>
                        <Link to='/guestregister'> 
                        <IconButton>
                            <HowToRegIcon/> Register
                        </IconButton>
                        </Link>
                    </>
                )
            }
        </div>
    </div>
</nav>
);
}
