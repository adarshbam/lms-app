import User from "../model/User.js";
import { Router } from "express";
import argon2 from "argon2";

const router = Router();

// get all courses
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(403).json({ msg: "User Already Exists" });
      return;
    }
    console.log(name, email, password);

    const hashedPassword = await argon2.hash(password);
    console.log(hashedPassword);

    const user = {
      name,
      email,
      password: hashedPassword,
    };

    await User.insertOne(user);
    res.status(200).json({ msg: "User Registered Succesfully!" });
  } catch (e) {
    console.log(e.message);
    res.status(403).json({ msg: e.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(403).json({ msg: "User doesn't exist with this email" });
      return;
    }

    console.log(email, password);

    const correctPassowrd = await argon2.verify(user.password, password);
    console.log(correctPassowrd);

    if (!correctPassowrd) {
      res.status(403).json({ msg: "Invalid credentials" });
      return;
    }

    res.cookie("userId");

    res.status(200).json({ msg: "User Login Succesfully!" });
  } catch (e) {
    console.log(e.message);
    res.status(403).json({ msg: e.message });
  }

  res.json({ msg: "Login route working" });
});

export default router;
