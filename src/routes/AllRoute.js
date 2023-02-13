import { Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const userRoutes = [
    { path: "/auth/login", component: Login },
    { path: "/register", component: Register },
    { path: "/", exact: true, component: () => <Navigate to="/auth/login" /> }
]

export default userRoutes