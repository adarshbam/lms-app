import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "./utils/db.js";
import UserRoutes from "./router/userRoutes.js";
import CourseRoutes from "./router/courseRoutes.js";
import CartRoutes from "./router/cartRoutes.js";

const PORT = 5000;
const app = express();

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/user", UserRoutes);
app.use("/courses", CourseRoutes);
app.use("/cart", CartRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server running of port ${PORT}`);
});
