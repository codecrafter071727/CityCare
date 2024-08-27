// // backend/routes/user.js
const express = require("express");

const router = express.Router();
const zod = require("zod");
const { Patient } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../configuration");
// const { authMiddleware } = require("../middleware");

// const signupBody = zod.object({
//   email: zod.string().email(),
//   name: zod.string(),
//   phoneNumber: zod.number(),
//   password: zod.string(),
//   age: zod.number(),
//   medicalHistory: zod.string(),
// });

router.post("/signup", async (req, res) => {
  const { email, name, phoneNumber, password, age, medicalHistory } = req.body;
  // const { success } = signupBody.safeParse(req.body);
  // if (!success) {
  //   return res.status(411).json({
  //     message: " Incorrect kind of inputs",
  //   });
  // }

  const existingPatient = await Patient.findOne({
    email: req.body.email,
  });

  if (existingPatient) {
    return res.status(411).json({
      message: "Email already exists",
    });
  }

  const patient = await Patient.create({
    email,
    name,
    phoneNumber,
    password,
    age,
    medicalHistory,
  });
  const patientId = patient._id;

  const token = jwt.sign(
    {
      patientId,
    },
    JWT_SECRET
  );

  res.json({
    message: "Patient created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: " Incorrect inputs",
      });
    }

    const patient = await Patient.findOne({
      email,
      password,
    });

    if (patient) {
      const token = jwt.sign(
        {
          patient: patient._id,
        },
        JWT_SECRET
      );

      res.json({
        message: "patient singed in successfully",
        token: token,
      });
      return;
    }
  } catch (error) {
    res.status(400).json({
      message: "Error while logging in! retry",
      error: error.message,
    });
  }
});

// const updateBody = zod.object({
//   password: zod.string().optional(),
//   firstName: zod.string().optional(),
//   lastName: zod.string().optional(),
// });

// router.put("/", authMiddleware, async (req, res) => {
//   const { success } = updateBody.safeParse(req.body);
//   if (!success) {
//     res.status(411).json({
//       message: "Error while updating information",
//     });
//   }

//   await User.updateOne(req.body, {
//     id: req.userId,
//   });

//   res.json({
//     message: "Updated successfully",
//   });
// });

// router.get("/bulk", async (req, res) => {
//   const filter = req.query.filter || "";

//   const users = await User.find({
//     $or: [
//       {
//         firstName: {
//           $regex: filter,
//         },
//       },
//       {
//         lastName: {
//           $regex: filter,
//         },
//       },
//     ],
//   });

//   res.json({
//     user: users.map((user) => ({
//       username: user.username,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       _id: user._id,
//     })),
//   });
// });

module.exports = router;
