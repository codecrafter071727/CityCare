import React from 'react'

function DoctorCard({doctor}) {
  return (
    <>
       <div className="bg-white rounded-lg shadow-lg ; p-3 border-style: solid; w-full sm:w-80 hover:shadow-lg transition-shadow duration-300 box-shadow: 9px 10px;">
              
              <div className="flex items-center space-x-4">
        <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full bg-80" />
        <div>
          <h2 className="text-lg font-bold text-black-800">{doctor.name}</h2>
          <p className="text-mg text-black-500">{doctor.position}</p>
          <p className="text-mg text-black-500">{doctor.hospital}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>{doctor.specialty}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-600">Experience: {doctor.experience} Years</p>
        <p className="text-lg font-semibold text-pink-600">₹ {doctor.fee}</p>
      </div>
      <div className="flex mt-4 space-x-2">
        <button className="px-4 py-2 text-white transition-colors duration-300 bg-pink-800 rounded hover:bg-pink-600">
          View Full Profile
        </button>
        <button className="px-4 py-2 text-gray-700 transition-colors duration-300 bg-gray-300 rounded hover:bg-gray-300">
          Book An Appointment
        </button>
      </div>
    </div>

    </>
  )
}

export default DoctorCard
