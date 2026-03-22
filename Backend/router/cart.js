import { Router } from "express";

const router = Router();

// get all courses
router.get("/", (req, res) => {
  res.send("All the courses here");
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
