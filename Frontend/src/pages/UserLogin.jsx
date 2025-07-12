import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/userService';

const UserLogin = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [userData, setUserData] = useState({})


    const {user , setUser} = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e)=> {
        e.preventDefault()
        setLoading(true);
        setError('');
        
        try {
            const userData = {
                email: email,
                password: password
            }

            const data = await userService.login(userData);
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');

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
             <img className='w-16 mb-10 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />



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
        <p className='text-center'>New here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>

        </div>
        <div>
            <Link
            to='/captain-login'
            className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
            Sign in as Captain
            </Link>
        </div>
    </div>
  )
}

export default UserLogin