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
<nav className="navbar navbar-fluid navbar-expand navbar-light bg-primary m-0 ">
    <div className="container-fluid">
        <a className='navbar-brand text-white' href='/'> Holla </a>
        <div className="d-flex align-items-center">
            {user ?
                (
                    <>
             <Card className="me-3 bg-info text-center" sx={{ maxWidth: 150, width: 150, maxHeight: 40, height: 40 }}>
            <CardContent>
            <span > Hello!, {user && user.fname} </span>
            </CardContent>
            </Card>
                    
                        <button type="button" className="btn btn-light ml-auto" onClick={onLogout}>
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
