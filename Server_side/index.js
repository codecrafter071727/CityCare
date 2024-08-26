// backend/index.js
const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow cookies
  })
);
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
