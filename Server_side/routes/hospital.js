const express = require('express')

const router = express.Router;

router.post('/hospitalsignup', (req, res)=>{
    const {hospitalName, email, password, contactNumber, address, numberOfBeds} = req.body;
    
}
)