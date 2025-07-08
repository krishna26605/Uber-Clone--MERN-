import React from 'react'




const LocationSearchPanel = (props) => {

    

// sample array of locations
   const locations = [
    "24B, Near Kapoors's Cafe, Coding School, Maharashtra",
    "12A, Opposite Coding School, Mumbai, Maharashtra",
    "34C, Next to Coding School, Pune, Maharashtra",
    "56D, Behind Coding School, Bangalore, Karnataka",
    "78E, In front of Coding School, Chennai, Tamil Nadu",
    "90F, Near Coding School, Hyderabad, Telangana",
]

  return (
    <div>
        {/* this is just a sample data */}

        {
            locations.map(function(elem, idx){
            return  <div key={idx} onClick={()=>{
                props.setVehiclePanel(true) 
                props.setPanelOpen(false)
            }} className='flex active:border-2 p-3 border-gray-50 active:border-black rounded-xl gap-4 items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] flex items-center justify-center h-8 w-12 rounded-full'><i className="ri-map-pin-line "></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
         })
        }
        


    </div>
  )
}

export default LocationSearchPanel