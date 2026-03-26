import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/courses");
        const data = await res.json();
        setCoursesData(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  return coursesData.length === 0 ? (
    <p className="text-white text-center">"loading..."</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coursesData.map(({ name, price, image }, idx) => (
        <CourseCard
          name={name}
          price={price}
          thumbnail={image}
          key={idx + name}
        />
      ))}
    </div>
  );
};

export default Courses;
