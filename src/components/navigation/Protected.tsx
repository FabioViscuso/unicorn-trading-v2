import { Navigate, Outlet } from 'react-router-dom';

// ricevo le props
export const Protected = ({ user, children }) => {

    if (user.logged === false) {
        return <Navigate to='/' replace />;
    }

    return children ? children : <Outlet />;
};
