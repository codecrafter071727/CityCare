// backend/db.js
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vishurizz01:RzfgxKDYAOSSooKq@cluster0.7ozbuch.mongodb.net/Hospital_DB"
);
// hospital model
const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // registrationNumber: {
  //   type: String,
  // },
  // website: {
  //   type: String,
  // },
  hospitalType: {
    type: String,
    enum: ["Public", "Private", "Clinic"],
    default: "Public",
  },
  numberOfBeds: {
    type: Number,
  },
  emergencyServices: {
    type: Boolean,
    default: false,
  },
  beds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Availability",
    },
  ],
  doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],
  facilities: [String],
});
// doctors and availability schema

const doctorSchema = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  // cabinNumber: {
  //   type: String,
  // },
  bedStatus: {
    type: String,
    enum: ["available", "occupied", "reserved"],
    default: "available",
  },
  doctorName: {
    type: String,
  },
  doctorSpecialization: {
    type: String,
  },
  doctorStatus: {
    type: String,
    enum: ["available", "on-duty", "off-duty"],
    default: "available",
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

// Create a Schema for Users
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

// const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model("User", userSchema);
const Hospital = mongoose.model("Hospital", hospitalSchema);
const Doctor = mongoose.model("Availability", doctorSchema);

module.exports = {
  User,
  Hospital,
  Doctor,
};
