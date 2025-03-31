import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

function AuthNavigate() {
    const auth = getAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const allowedRoutes = ['/login'];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const currentPath = location.pathname;

            if (user) {
                // User is signed in
                if (allowedRoutes.includes(currentPath)) {
                    // User is on an allowed route (e.g., login) while logged in
                    // Redirect them to the dashboard
                    navigate('/dashboard');
                }
            } else {
                // User is signed out
                if (!allowedRoutes.includes(currentPath)) {
                    // User is on a protected route while logged out
                    // Redirect them to login page
                    navigate('/login');
                }
            }
        });

        return () => unsubscribe();
    }, [navigate, auth, location]);
    return null;
}

export default AuthNavigate;