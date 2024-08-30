import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated on component mount
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const response = await axios.get('/api/v1/auth/status'); // Endpoint to check auth status
            setIsAuthenticated(response.data.isAuthenticated);
        } catch (error) {
            setIsAuthenticated(false);
            navigate('/auth/login'); // Redirect to login if not authenticated
        }
    };

    const login = async (credentials) => {
        try {
            const response = await axios.post('/api/v1/auth/login', credentials);
            setIsAuthenticated(true);
            navigate('/dashboard'); // Redirect to dashboard on successful login
        } catch (error) {
            setIsAuthenticated(false);
            // Handle login error
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        navigate('/auth/login'); // Redirect to login on logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
