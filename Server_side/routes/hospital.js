const express = require("express");
const zod = require("zod");
const zwt = require("jsonwebtoken");
const { Hospital } = require("../db");
const { JWT_SECRET } = require("../configuration");
const router = express.Router();

const signupBody = zod.object({
  hospitalName: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(3),
  contactNumber: zod.string(),
  address: zod.string(),
  numberOfBeds: zod.number(),
});

router.post("/signup", async (req, res) => {
  const {
    hospitalName,
    email,
    password,
    contactNumber,
    address,
    numberOfBeds,
  } = req.body;
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

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
