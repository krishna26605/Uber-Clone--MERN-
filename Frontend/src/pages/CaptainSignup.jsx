import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext.jsx'
import { useNavigate } from 'react-router-dom'
import { captainService } from '../services/captainService'

const CaptainSignup = () => {

        const navigate = useNavigate();

        const [email , setEmail] = useState('');
        const [password , setPassword] = useState('');
        const [firstName , setFirstName] = useState('');
        const [lastName , setLastName] = useState('');
       

        const [vehicleColor, setVehicleColor] = useState('');
        const [vehiclePlate, setVehiclePlate] = useState('');
        const [vehicleCapacity, setVehicleCapacity] = useState('');
        const [vehicleType, setVehicleType] = useState('');
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');


        const {captain , setCaptain} = React.useContext(CaptainDataContext);
    
    
        const submitHandler = async (e)=> {
            e.preventDefault();
            setLoading(true);
            setError('');

            try {
                const captainData ={
                    fullname: {
                        firstname: firstName,
                        lastname: lastName
                    },
                    email: email,
                    password: password,
                    vehicle: {
                        color: vehicleColor,
                        plate: vehiclePlate,
                        capacity: vehicleCapacity,
                        vehicleType: vehicleType
                    }
                }

                const data = await captainService.register(captainData);
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');

                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');
                setVehicleColor('');
                setVehiclePlate('');
                setVehicleCapacity('');
                setVehicleType('');
            } catch (error) {
                setError(error.response?.data?.message || 'Registration failed');
            } finally {
                setLoading(false);
            }
        }
    




  return (
     <div className='py-5 px-5 h-screen flex flex-col justify-between'>
            
            <div>
            <img className='w-16 mb-3 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />



            <form onSubmit={(e)=>{
                submitHandler(e);
            }}>

                <h3 className='text-base font-medium mb-2 '>What's our Captain's Name</h3>
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

                <h3 className='text-base font-medium mb-2'>What's our Captain's email</h3>
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
                <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
                <div className='flex gap-4 mb-6'>
                    <input
                        required
                        value={vehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
                        type='text'
                        placeholder="Vehicle Color"
                    />
                    <input
                        required
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
                        type='text'
                        placeholder="Vehicle Plate"
                    />
                </div>
                <div className='flex gap-4 mb-6'>
                    <input
                        required
                        value={vehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
                        type='number'
                        min={1}
                        placeholder="Vehicle Capacity"
                    />
                    <select
                        required
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base'
                    >
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="motorcycle">Motorcycle</option>
                    </select>
                </div>
                


                <button
                disabled={loading}
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-base placeholder:text-sm disabled:opacity-50'>
                    {loading ? 'Creating Account...' : 'Create Captain\'s Account'}
                </button>
                
                {error && (
                    <p className='text-red-500 text-sm mb-3'>{error}</p>
                )}
                
            
            </form>
            <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>

            </div>
            <div>
                <p className='text-[10px] mt-6 leading-tight'> This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>. </p>
            </div>
        </div>
  )
}

export default CaptainSignup