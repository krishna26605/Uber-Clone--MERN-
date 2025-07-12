import React  from 'react'
import { userService } from '../services/userService'
import { useNavigate } from 'react-router-dom'


const UserLogout = () => {

    const navigate = useNavigate();

    React.useEffect(() => {
        const logout = async () => {
            try {
                await userService.logout();
            } catch (error) {
                console.log('Logout error:', error);
            } finally {
                localStorage.removeItem('token');
                navigate('/login');
            }
        };
        
        logout();
    }, [navigate]);

    return (
        <div>Logging out...</div>
    )
}

export default UserLogout