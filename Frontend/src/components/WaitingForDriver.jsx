import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute  top-0 ' onClick={()=>{
            props.setWaitingForDriver(false)
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            
            {/* Driver Info Section */}
            <div className= 'flex items-center justify-between'>
                <img className='h-12' src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Krishna</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 15 YZ 9111</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>

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
            </div>

    </div>
  )
}

export default WaitingForDriver