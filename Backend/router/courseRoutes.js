import { Router } from "express";
import Course from "../model/Course.js";

const router = Router();

// get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (e) {
    req.status(500).json({ msg: err.message });
  }
});

// get course
router.get("/:id", (req, res) => {
  res.send("Getting Course 1");
});

// update course
router.post("/:id", (req, res) => {
  res.send("Updated Course");
});

export default router;
