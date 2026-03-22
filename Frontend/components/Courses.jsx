import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    console.log("Hello World!");
    setCoursesData([
      {
        _id: "69bfb6bbb2c279430f729cf2",
        name: "Node.js Fundamentals Course",
        price: 4999,
        image: "https://i.ytimg.com/vi/RdkoOdZYNGw/hqdefault.jpg",
        __v: 0,
        createdAt: "2026-03-22T09:30:35.041Z",
        updatedAt: "2026-03-22T09:30:35.041Z",
      },
      {
        _id: "69bfb6bbb2c279430f729cf3",
        name: "The Complete JavaScript Course",
        price: 2999,
        image: "https://i.ytimg.com/vi/9P9h5h9kBmU/hqdefault.jpg",
        __v: 0,
        createdAt: "2026-03-22T09:30:35.043Z",
        updatedAt: "2026-03-22T09:30:35.043Z",
      },
      {
        _id: "69bfb6bbb2c279430f729cf4",
        name: "The Complete React Course",
        price: 3999,
        image: "https://i.ytimg.com/vi/_rTCzxg6VmM/hqdefault.jpg",
        __v: 0,
        createdAt: "2026-03-22T09:30:35.043Z",
        updatedAt: "2026-03-22T09:30:35.043Z",
      },
      {
        _id: "69bfb6bbb2c279430f729cf5",
        name: "The Complete Next.js Course",
        price: 1999,
        image: "https://i.ytimg.com/vi/yQhPWGzQZYQ/hqdefault.jpg",
        __v: 0,
        createdAt: "2026-03-22T09:30:35.043Z",
        updatedAt: "2026-03-22T09:30:35.043Z",
      },
      {
        _id: "69bfb6bbb2c279430f729cf6",
        name: "RegEx Pro Course",
        price: 999,
        image:
          "https://tagmango.com/publicassets/-regex-pro-course-cf34102b6bf8c3c268c030cb6db37e80.webp",
        __v: 0,
        createdAt: "2026-03-22T09:30:35.043Z",
        updatedAt: "2026-03-22T09:30:35.043Z",
      },
      {
        _id: "69bfb6bbb2c279430f729cf7",
        name: "Git and GitHub Fundamentals",
        price: 1499,
        image: "https://i.ytimg.com/vi/LdeNFQMI42o/hqdefault.jpg",
        __v: 0,
        createdAt: "2026-03-22T09:30:35.043Z",
        updatedAt: "2026-03-22T09:30:35.043Z",
      },
    ]);
  }, []);

  return coursesData.length === 0 ? (
    "loading..."
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coursesData.map(({ name, price, image }, idx) => (
        <CourseCard
          name={name}
          price={price}
          thumbnail={image}
          key={idx + name }
        />
      ))}
    </div>
  );
};

export default Courses;
