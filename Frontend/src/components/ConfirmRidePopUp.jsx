import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler= (e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute  top-0 ' onClick={()=>{
            props.setRidePopupPanel(false)
    
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-4 '>Confirm this Ride to Start</h3>

          <div className='flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg  mt-4 '>
            <div className='flex items-center gap-3 '>
                <img className='h-12 rounded-full object-cover w-10' src="https://www.kalimbatabs.net/wp-content/uploads/2024/11/meow.jpg" alt="" />
                <h2 className='text-lg font-medium '>Meow meow</h2>
            </div>

            <h5 className='text-lg font-semibold'>2.2 KM</h5>
          </div>

        <div className='flex justify-between gap-2 flex-col items-center'>

            
                <div className='w-full mt-5'>


                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Dwarka Circle , Nashik</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Dwarka Circle , Nashik</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Payment</p>
                        </div>
                    </div>

                </div>



                <div className='mt-6 w-full'>
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>
                        <input value={otp} onChange={(e)=>{
                            setOtp(e.target.value)
                        }} className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter OTP' />


                        <Link to='/captain-riding' className='w-full flex justify-center mt-5 text-lg  bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>

                        <button onClick={()=>{
                        props.setConfirmRidePopupPanel(false)
                        props.setRidePopupPanel(false)
                        }} className='w-full mt-2 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp