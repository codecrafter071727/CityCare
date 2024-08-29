import React from 'react'
import Navbar from '../components/Navbar'
import DoctorCard from '../components/DoctorCard'

function DoctorList() {
  return (
    <div>
       <Navbar />
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-gray-1000 lg-8">
          Specialised Doctors
        </h1>
        <div class="box-border h-130 w-130 p-15 border-8 ..."></div>
        <div className="flex flex-wrap justify-center gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  )
}

const doctors = [
    {
      name: "Dr. Anoop Misra",
      position: "EXECUTIVE CHAIRMAN FORTIS C DOC",
      hospital: "Fortis C-Doc",
      specialty: "Diabetology/Endocrinology",
      experience: 40,
      fee: 2500,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/2205.jpg?itok=qHcBGUZA",
    },
    {
      name: "Dr. Gourdas Choudhuri",
      position: "XECUTIVE DIRECTOR CARDIOLOGY ",
      hospital: "Fortis Gurgaon",
      specialty: " Cardiac Sciences | Electrophysiology",
      experience: 42,
      fee: 2000,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/1185.jpg?itok=WlMW_THf",
    },
    {
      name: "Dr. Ajay Kaul",
      position: "EXECUTIVE CHAIRMAN FORTIS C DOC ",
      hospital: "Fortis Noida",
      specialty: "Diabetology/Endocrinology",
      experience: 40,
      fee: 1600,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/2242.png?itok=xe4B8nn8", // Replace with actual image path
    },
    {
      name: "Dr. Ashok Seth",
      position: "SENIOR DIRECTOR UROLOGY",
      hospital: "Fortis Okhla",
      specialty: "SENIOR DIRECTOR UROLOGY",
      experience: 40,
      fee: 1600,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/551.jpg?itok=HNUVjMnL", // Replace with actual image path
    },
    {
      name: "Dr. Jaideep Bansal",
      position: "SENIOR DIRECTOR & HOD NEUROLOGY",
      hospital: "Fortis Shalimar Bagh",
      specialty: "Diabetology/Endocrinology",
      experience: 40,
      fee: 3000,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/11613.png?itok=3279lSDQ", // Replace with actual image path
    },
    {
      name: "Dr. Neena Bahl",
      position: "SENIOR DIRECTOR & UNIT HEAD ORTHOPAEDICS ",
      hospital: "Fortis Gurgaon",
      specialty: "Orthopaedics | Orthopaedics",
      experience: 37,
      fee: 3000,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/11615.png?itok=_X3qcfTJ", // Replace with actual image path
    },
    {
      name: "Dr. Mohan Keshavamurthy",
      position: "EXECUTIVE CHAIRMAN FORTIS C DOC",
      hospital: "Fortis C-Doc",
      specialty: "Diabetology/Endocrinology",
      experience: 40,
      fee: 2500,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/901.jpg?itok=RIhIy2pP", // Replace with actual image path
    },
    {
      name: "Dr. Meenakshi Ahuja",
      position: "SENIOR DIRECTOR OBSTETRICS & GYNAECOLOGY",
      hospital: "Fortis La Femme GK",
      specialty: "Obstetrics and Gynaecology | Obstetrics and Gynaecology",
      experience: 40,
      fee: 2500,
      image:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/489.jpg?itok=Ks7AG7bs", // Replace with actual image path
    },
  ];
  

export default DoctorList
