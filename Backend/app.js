import cookieParser from "cookie-parser";
import express from "express";
import "./utils/db.js";
import courses from "./router/courses.js";
import cart from "./router/cart.js";

const PORT = 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/courses", courses);
app.use("/cart", cart);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server running of port ${PORT}`);
});
