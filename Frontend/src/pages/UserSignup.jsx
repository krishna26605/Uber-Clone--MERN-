import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { userService } from '../services/userService';
import { UserDataContext } from '../context/UserContext.jsx';

const UserSignup = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const {user , setUser} = React.useContext(UserDataContext);


    const submitHandler = async (e)=> {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const newUser = {
                fullname: {
                    firstname: firstName,
                    lastname: lastName
                },
                email: email,
                password: password
            }

            const data = await userService.register(newUser);
            setUser(data.user)
            localStorage.setItem('token', data.token);
            navigate('/home'); 

            setEmail('');
            setFirstName('');
            setLastName('');
            setPassword('');
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    }


  return (
    <div>
        <div className='p-7 h-screen flex flex-col justify-between'>
            
            <div>
            <img className='w-16 mb-10 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />



            <form onSubmit={(e)=>{
                submitHandler(e);
            }}>

                <h3 className='text-base font-medium mb-2'>What's your Name</h3>
                <div className='flex gap-4 mb-6'>
                    <input 
                    required 
                    value={firstName}
                    onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}
                    className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base'
                    type="text" 
                    placeholder='First Name' 
                    />

                    <input 
                    required
                    value={lastName}
                    onChange={(e)=>{
                        setLastName(e.target.value);
                    }} 
                    className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
                    type="text" 
                    placeholder='Last Name' 
                    />
                    
                
                </div>

                <h3 className='text-base font-medium mb-2'>What's your email</h3>
                <input 
                required 
                value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="email" 
                placeholder='email@example.com' 
                />


                <h3  className='text-base font-medium mb-2'>Enter Password</h3>


                <input
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                    required 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    type="password" 
                    placeholder='password'    
                />
                


                <button
                disabled={loading}
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-base placeholder:text-sm disabled:opacity-50'>
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
                
                {error && (
                    <p className='text-red-500 text-sm mb-3'>{error}</p>
                )}
                
            
            </form>
            <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>

            </div>
            <div>
                <p className='text-xs leading-tight'> This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>. </p>
            </div>
        </div>
    </div>
  )
}

export default UserSignup