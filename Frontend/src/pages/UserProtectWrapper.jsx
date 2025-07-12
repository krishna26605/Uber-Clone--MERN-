import React, {useContext , useEffect} from 'react'
import { UserDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import { userService } from '../services/userService'

const UserProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);
    const {user, setUser} = useContext(UserDataContext);

    useEffect(()=>{
        if(!token){
        navigate('/login');
        return;
        }
        
        const fetchProfile = async () => {
            try {
                const userData = await userService.getProfile();
                setUser(userData);
                setIsLoading(false);
            } catch (err) {
                console.log(err)
                localStorage.removeItem('token');
                navigate('/login');
            }
        };
        
        fetchProfile();
    }, [token])


    if(isLoading){
      return (
        <div>Loading...</div>
      )
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper