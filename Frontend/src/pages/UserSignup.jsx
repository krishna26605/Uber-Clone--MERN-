import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext.jsx';

const UserSignup = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const {user , setUser} = React.useContext(UserDataContext);


    const submitHandler = async (e)=> {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser); 

        if(response.status === 201){
            const data = response.data;

            setUser(data.user)
            localStorage.setItem('token', data.token);

            navigate('/home'); 
        }

        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
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
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-base placeholder:text-sm'>
                    Create Account
                </button>
                
            
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