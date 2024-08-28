import React, { useEffect } from 'react'

function Hospital() {
  useEffect(async()=>{
  const hospitals = await axios.get("http://localhost:3000/api/v1/hospital/gethospitals")
    console.log(hospitals)
})
  return (
    <center className=''>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </center>
  )
}

export default Hospital
