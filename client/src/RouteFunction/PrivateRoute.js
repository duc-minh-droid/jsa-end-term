import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export { PrivateRoute };

function PrivateRoute() {
    const auth = useContext(AuthContext);

    return auth ? <Outlet /> : <Navigate to="/login" />;
}