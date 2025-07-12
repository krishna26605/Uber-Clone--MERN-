import React, {useContext , useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext.jsx'
import { useNavigate } from 'react-router-dom'
import { captainService } from '../services/captainService'

const CaptainProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain , setCaptain} = useContext(CaptainDataContext);
    const [ isLoading, setIsLoading] = useState(true);




    useEffect(()=>{
        if(!token){
        navigate('/captain-login');
        return;
        }


        
        const fetchProfile = async () => {
            try {
                const captainData = await captainService.getProfile();
                setCaptain(captainData.captain);
                setIsLoading(false);
            } catch (err) {
                console.log(err)
                localStorage.removeItem('token');
                navigate('/captain-login');
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

export default CaptainProtectWrapper