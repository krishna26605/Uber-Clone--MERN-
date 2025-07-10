import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute  top-0 ' onClick={()=>{
            props.setRidePopupPanel(false)
    
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-4 '>New Ride Available..!</h3>

          <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg  mt-4 '>
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


            <div className='flex mt-5 w-full items-center justify-between'>

                <button onClick={()=>{
                props.setRidePopupPanel(false)
            }} className=' mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>


                <button onClick={()=>{
                props.setConfirmRidePopupPanel(true)
            }} className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>

            
            </div>
        </div>
    </div>
  )
}

export default RidePopUp