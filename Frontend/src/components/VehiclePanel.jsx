import React from 'react'


const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute  top-0 ' onClick={()=>{
            props.setVehiclePanel(false)
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>


          

          <div onClick={()=>{
            props.setConfirmedRidePanel(true)
          }} className='flex w-full border-2 active:border-black mb-2 rounded-xl p-3  items-center justify-between'>
            <img className='h-14' src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg" alt="" />
            <div className=' ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='font-normal text-xs text-gray-600'>2 mins away</h5>
              <p>Affordable, compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>$192.56</h2>
          </div>


          <div onClick={()=>{
            props.setConfirmedRidePanel(true)
          }}  className='flex w-full border-2 active:border-black mb-2 rounded-xl p-3  items-center justify-between'>
            <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className=' ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
              <h5 className='font-normal text-xs text-gray-600'>3 mins away</h5>
              <p>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-xl font-semibold'>$65.89</h2>
          </div>


          <div onClick={()=>{
            props.setConfirmedRidePanel(true)
          }}  className='flex w-full border-2 active:border-black mb-2 rounded-xl p-3  items-center justify-between'>
            <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=' ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
              <h5 className='font-normal text-xs text-gray-600'>6 mins away</h5>
              <p>Affordable, auto rides</p>
            </div>
            <h2 className='text-xl font-semibold'>$126.62</h2>
          </div>
    </div>
  )
}

export default VehiclePanel