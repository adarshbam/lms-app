import "./utils/db.js";
import Course from "./model/Course.js";

try {
  const result = await Course.insertMany([
    {
      name: "Node.js Fundamentals Course",
      price: 4999,
      image: "https://i.ytimg.com/vi/RdkoOdZYNGw/hqdefault.jpg",
    },
    {
      name: "The Complete JavaScript Course",
      price: 2999,
      image: "https://i.ytimg.com/vi/9P9h5h9kBmU/hqdefault.jpg",
    },
    {
      name: "The Complete React Course",
      price: 3999,
      image: "https://i.ytimg.com/vi/_rTCzxg6VmM/hqdefault.jpg",
    },
    {
      name: "The Complete Next.js Course",
      price: 1999,
      image: "https://i.ytimg.com/vi/yQhPWGzQZYQ/hqdefault.jpg",
    },
    {
      name: "RegEx Pro Course",
      price: 999,
      image:
        "https://tagmango.com/publicassets/-regex-pro-course-cf34102b6bf8c3c268c030cb6db37e80.webp",
    },
    {
      name: "Git and GitHub Fundamentals",
      price: 1499,
      image: "https://i.ytimg.com/vi/LdeNFQMI42o/hqdefault.jpg",
    },
  ]);

  console.log("Database updated✅");
} catch (e) {
  console.log(e);
}
