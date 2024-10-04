import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({isAuthenticated, children}) =>{
    if(!isAuthenticated){
        // Redirect to login page if user is not authenticated
        // The replace prop is used to prevent the user from going back to the protected route
        return <Navigate to="/" replace/>    }
    return children;
}

export default ProtectedRoute;