import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./service/dataBase.js";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

dotenv.config();
const app = express();

connectToDatabase();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errrorStatus = err.status || 500;
  const errrorMessage = err.message || "Somthing went worng!";
  return res.status(errrorStatus).json({
    success: false,
    status: errrorStatus,
    message: errrorMessage,
    stack: err.stack,
  });
});
const PORT = process.env.PORT || 7070
app.listen(PORT, () => {
  console.log(`Connected to backend! Listening on port ${PORT}`);
});
