import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
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
style={{backgroundColor: '#000000'}}>
    <div className="container-fluid">
    <Link to='/'><img src={Holla250} alt="Holla Logo" style={{height: '50px'}}/></Link>
        <div className="d-flex align-items-center">
            {user ?
                (
                    <>
             <span className="text-white me-5"> Hello, {user && user.fname}! </span>
                        <button type="button" className="btn btn-danger ml-auto" onClick={onLogout}
                        style={{backgroundColor: '#000000', color: '#FFFF00'}}>
                            <LogoutIcon/> Logout
                        </button>
                    </>
                )
                :
                (
                    <div className="d-flex gap-3">
                        <Link to='/' className="text-decoration-none"> <IconButton className="text-white">
                            <LoginIcon/> Login
                        </IconButton>
                        </Link>
                        <Link to='/guestregister' className="text-decoration-none"> 
                        <IconButton className="text-white">
                            <HowToRegIcon/> Register
                        </IconButton>
                        </Link>
                    </div>
                )
            }
        </div>
    </div>
</nav>
);
}
