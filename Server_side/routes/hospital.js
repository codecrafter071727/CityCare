const express = require("express");
const zod = require("zod");
const zwt = require("jsonwebtoken");
const { Hospital, Doctor, Availability } = require("../db");
const { JWT_SECRET } = require("../configuration");
const { default: mongoose } = require("mongoose");
const router = express.Router();

// const signupBody = zod.object({
//   hospitalName: zod.string(),
//   email: zod.string().email(),
//   password: zod.string().min(3),
//   contactNumber: zod.string(),
//   address: zod.string(),
//   numberOfBeds: zod.number(),
// });
// sign up route!
router.post("/signup", async (req, res) => {
  const {
    hospitalName,
    email,
    password,
    contactNumber,
    address,
    numberOfBeds,
  } = req.body;
  // const { success } = signupBody.safeParse(req.body);
  // if (!success) {
  //   return res.status(411).json({
  //     message: "Email already taken / Incorrect inputs",
  //   });
  // }

  const existingUser = await Hospital.findOne({
    hospitalName: hospitalName,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }
  const hospital = await Hospital.create({
    hospitalName,
    email,
    password,
    contactNumber,
    address,
    numberOfBeds,
  });
  const token = zwt.sign({ hospitalId: hospital._id }, JWT_SECRET);

  res.status(200).json({
    message: "Hospital registered successfully",
    token,
  });
});

module.exports = router;

const signinSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});
// signin route!
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const { success } = signinSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const hospital = await Hospital.findOne({ email: email, password: password });
  if (!hospital) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const token = zwt.sign({ hospitalId: hospital._id }, JWT_SECRET);
  res.status(200).json({
    id: hospital._id,
    message: "Hospital logged in successfully",
    token,
  });
});
// get all hospitals
router.get("/gethospitals", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json({
      hospitals: hospitals.map((hospital) => ({
        id: hospital._id,
        hospitalName: hospital.hospitalName,
        email: hospital.email,
        contactNumber: hospital.contactNumber,
        address: hospital.address,
        numberOfBeds: hospital.numberOfBeds,
      })),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hospitals" });
  }
});
// get one hospital
router.get("/get-hospital/:hospitalId", async (req, res) => {
  try {
    const { hospitalId } = req.params;

    // Use findById to fetch the hospital with the given ID
    const hospital = await Hospital.findById(hospitalId);

    if (!hospital) {
      return res.status(404).json({
        message: "Hospital not found",
      });
    }

    // Respond with the hospital data
    res.status(200).json({
      hospital,
    });
  } catch (error) {
    console.error("Error fetching hospital:", error);
    res.status(500).json({
      message: "Error fetching hospital",
      error: error.message,
    });
  }
});
router.post("/add-doctor/:hospitalId", async (req, res) => {
  try {
    const { hospitalId } = req.params;
    const { doctorName, doctorSpecialization, doctorStatus } = req.body;

    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    const newDoctor = new Doctor({
      hospital: hospitalId,
      doctorName: doctorName,
      doctorSpecialization: doctorSpecialization,
      doctorStatus: doctorStatus,
    });

    const savedDoctor = await newDoctor.save();

    hospital.doctors.push(savedDoctor._id);
    await hospital.save();

    res.status(201).json({
      message: "Doctor added successfully",
      doctor: savedDoctor,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add-availability/:hospitalId/:doctorId", async (req, res) => {
  try {
    const { hospitalId, doctorId } = req.params;
    const { isAvailable, arrivalTime, DepartureTime } = req.body;
    const hospital = await Hospital.findById(hospitalId);
    const doctor = await Doctor.findById(doctorId);

    console.log("Hospital:", hospital);
    console.log("Doctor:", doctor);

    if (!hospital || !doctor) {
      return res.status(404).json({
        message: "Hospital or doctor not exists",
      });
    }
    const newAvailability = new Availability({
      hospital: hospitalId,
      doctor: doctorId,
      isAvailable,
      arrivalTime,
      DepartureTime,
    });
    const savedAvailability = await newAvailability.save();
    doctor.availability.push(savedAvailability._id);
    await doctor.save();
    res.status(201).json({
      message: "availability added successfully",
      availability: savedAvailability,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while loading availability",
      error: error.message,
    });
  }
});

router.get("/get-doctors/:hospitalId", async (req, res) => {
  try {
    const { hospitalId } = req.params;
    const hospital = await Hospital.findById(hospitalId).populate("doctors");

    if (!hospital) {
      return res.status(404).json({
        message: "Hospital not found",
      });
    }

    res.status(200).json({
      doctors: hospital.doctors,
    });
  } catch (error) {
    console.error("Error while loading doctors:", error);
    res.status(500).json({
      message: "Error while loading doctors",
      error: error.message,
    });
  }
});
