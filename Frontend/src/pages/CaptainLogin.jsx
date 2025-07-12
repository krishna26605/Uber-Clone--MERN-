import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { captainService } from '../services/captainService'
import { CaptainDataContext } from '../context/CaptainContext.jsx'

const CaptainLogin = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const {captain , setCaptain} = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
    
    
        const submitHandler = async (e)=> {
            e.preventDefault()
            setLoading(true);
            setError('');

            try {
                const captainData = {
                    email: email,
                    password: password
                };

                const data = await captainService.login(captainData);
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
                
                setEmail('');
                setPassword('');
            } catch (error) {
                setError(error.response?.data?.message || 'Login failed');
            } finally {
                setLoading(false);
            }
        }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />



        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
            required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com' 
            />


            <h3  className='text-lg font-medium mb-2'>Enter Password</h3>


            <input
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                required 
                value={password}
                onChange={(e)=>{
                setPassword(e.target.value)
                }}
                type="password" 
                placeholder='password'    
             />
            


            <button
            disabled={loading}
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base disabled:opacity-50'>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            
            {error && (
                <p className='text-red-500 text-sm mb-3'>{error}</p>
            )}
            
           
        </form>
        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>

        </div>
        <div>
            <Link
            to='/login'
            className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
            Sign in as User
            </Link>
        </div>
    </div>
  )
}

export default CaptainLogin