import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header2 from './components/Header2'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import AdminRegister from './pages/admin/AdminRegister'
import UserRegister from './pages/user/UserRegister'
import AdminOnlyRoute from './features/auth/privateroutes'
import UserDash from '../src/pages/user/UserDash'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from './pages/user/CreateTask'

import Rooms from './pages/admin/Rooms'
import Tasks from './pages/admin/Tasks'

import OrderFood from './pages/user/OrderFood'

function App() {
  
  return (

    <>
      <Router>
        <Header2 className="mt-5"/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route exact path='/adminregister' element={<AdminRegister />} />
          <Route path='/login' element={<Login />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/tasks' element={<Tasks />} />


        {/* User Routes */}
          <Route exact path='/guestregister' element={<UserRegister />} />
          <Route path='/requests' element={<CreateTask />} />
          <Route path='/food' element={<OrderFood />} />
          
        </Routes>
      </Router>
      <ToastContainer />
    </>

  )
}

export default App
