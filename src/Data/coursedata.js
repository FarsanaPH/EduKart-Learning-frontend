import img1 from '../assets/courseImg/img1.jpg';
import img2 from '../assets/courseImg/img2.jpg';
import img3 from '../assets/courseImg/img3.jpg';
import img4 from '../assets/courseImg/img4.jpg';
import img5 from '../assets/courseImg/img5.jpg';
import img6 from '../assets/courseImg/img6.jpg';
import img7 from '../assets/courseImg/img7.jpg';
import img8 from '../assets/courseImg/img8.jpg';
import img9 from '../assets/courseImg/img9.jpg';
import img10 from '../assets/courseImg/img10.jpg';
import img11 from '../assets/courseImg/img11.jpg';
import img12 from '../assets/courseImg/img12.jpg';

const courses = [
  {
    id: 1,
    title: "Master React: Build Next-Gen Web Experiences",
    description: "Master advanced React concepts like Context API, Redux state management, performance optimization, and learn integrating APIs to build production-ready apps.",
    originalPrice: 999,
    discountedPrice: 599,
    rating: 4.7,
    reviews: 4120,
    image: img1,
    instructor: "Emily Carter",
    duration: "6 Weeks (36 Hours)",
    level: "Intermediate",
    language: "English",
    category: "Web Development",
    studentsEnrolled: 8200
  },
  {
    id: 2,
    title: "Cybersecurity and Ethical Hacking Essentials",
    description: "Learn the key concepts of cybersecurity including ethical hacking, penetration testing, network security, and tools like Wireshark and Metasploit to safeguard digital assets.",
    originalPrice: 849,
    discountedPrice: 689,
    rating: 4.5,
    reviews: 3874,
    image: img2,
    instructor: "Daniel Johnson",
    duration: "7 Weeks (42 Hours)",
    level: "Intermediate",
    language: "English",
    category: "Cybersecurity",
    studentsEnrolled: 7600
  },
  {
    id: 3,
    title: "Advanced Cloud Computing with AWS",
    description: "Gain deep expertise in deploying, managing, and scaling cloud infrastructure using Amazon Web Services. Learn about EC2, S3, Lambda, and best practices in DevOps.",
    originalPrice: 799,
    discountedPrice: 499,
    rating: 4.8,
    reviews: 7321,
    image: img3,
    instructor: "Rachel Kim",
    duration: "8 Weeks (40 Hours)",
    level: "Intermediate to Advanced",
    language: "English",
    category: "Cloud Computing",
    studentsEnrolled: 9100
  },
  {
    id: 4,
    title: "Data Analytics with Excel and Power BI",
    description: "Master the art of data analysis using Excel and Power BI. Learn how to clean, visualize, and interpret data for business intelligence and decision-making.",
    originalPrice: 499,
    discountedPrice: 249,
    rating: 4.7,
    reviews: 2745,
    image: img4,
    instructor: "Sophia Lee",
    duration: "5 Weeks (30 Hours)",
    level: "Beginner",
    language: "English",
    category: "Data Analytics",
    studentsEnrolled: 6800
  },
  {
    id: 5,
    title: "Blockchain Development Fundamentals",
    description: "Understand how blockchain works and start building smart contracts using Solidity and Ethereum. Ideal for developers exploring decentralized apps (dApps).",
    originalPrice: 599,
    discountedPrice: 349,
    rating: 4.4,
    reviews: 2186,
    image: img5,
    instructor: "Alex Turner",
    duration: "6 Weeks (36 Hours)",
    level: "Intermediate",
    language: "English",
    category: "Blockchain",
    studentsEnrolled: 5400
  },
  {
    id: 6,
    title: "Intro to Game Development with Unity",
    description: "Jump into the world of game development using Unity and C#. Learn to build 2D and 3D games with physics, animations, and interactive gameplay mechanics.",
    originalPrice: 699,
    discountedPrice: 399,
    rating: 4.6,
    reviews: 3421,
    image: img6,
    instructor: "Michael Adams",
    duration: "8 Weeks (48 Hours)",
    level: "Beginner to Intermediate",
    language: "English",
    category: "Game Development",
    studentsEnrolled: 7200
  },
  {
    id: 7,
    title: "Digital Marketing Mastery",
    description: "Become a digital marketing expert by learning SEO, SEM, email marketing, content strategies, and ad campaigns on Google and social media platforms.",
    originalPrice: 459,
    discountedPrice: 259,
    rating: 4.5,
    reviews: 4123,
    image: img7,
    instructor: "Olivia Brown",
    duration: "4 Weeks (24 Hours)",
    level: "Beginner",
    language: "English",
    category: "Marketing",
    studentsEnrolled: 6400
  },
  {
    id: 8,
    title: "Automation with Python: Scripting & Bots",
    description: "Automate boring tasks using Python. Build scripts and bots to handle repetitive workflows such as file handling, web scraping, and data manipulation.",
    originalPrice: 349,
    discountedPrice: 199,
    rating: 4.7,
    reviews: 2890,
    image: img8,
    instructor: "Benjamin Clark",
    duration: "5 Weeks (28 Hours)",
    level: "Beginner to Intermediate",
    language: "English",
    category: "Programming",
    studentsEnrolled: 5300
  },
  {
    id: 9,
    title: "Artificial Intelligence for Business Leaders",
    description: "Learn how to apply AI and machine learning to business strategy, operations, and decision-making. No coding experience required.",
    originalPrice: 599,
    discountedPrice: 399,
    rating: 4.3,
    reviews: 1740,
    image: img9,
    instructor: "Victoria Hughes",
    duration: "3 Weeks (18 Hours)",
    level: "Beginner",
    language: "English",
    category: "Artificial Intelligence",
    studentsEnrolled: 3900
  },
  {
    id: 10,
    title: "Modern JavaScript: ES6+ and Beyond",
    description: "Master modern JavaScript including ES6 features, async/await, modules, closures, and more. Perfect for frontend developers looking to level up.",
    originalPrice: 399,
    discountedPrice: 199,
    rating: 4.8,
    reviews: 5210,
    image: img10,
    instructor: "Ethan Wilson",
    duration: "5 Weeks (32 Hours)",
    level: "Intermediate",
    language: "English",
    category: "Web Development",
    studentsEnrolled: 8100
  },
  {
    id: 11,
    title: "Responsive Web Design with HTML & CSS",
    description: "Build modern and responsive websites using semantic HTML5 and advanced CSS3 including Flexbox, Grid, media queries, and accessibility practices.",
    originalPrice: 299,
    discountedPrice: 149,
    rating: 4.6,
    reviews: 3612,
    image: img11,
    instructor: "Hannah Green",
    duration: "4 Weeks (20 Hours)",
    level: "Beginner",
    language: "English",
    category: "Web Design",
    studentsEnrolled: 6900
  },
  {
    id: 12,
    title: "Mastering SQL for Data Analysis",
    description: "Learn SQL from scratch and become confident in writing queries, joining tables, aggregating data, and optimizing performance for real-world data sets.",
    originalPrice: 349,
    discountedPrice: 199,
    rating: 4.7,
    reviews: 3954,
    image: img12,
    instructor: "Liam Scott",
    duration: "4 Weeks (24 Hours)",
    level: "Beginner to Intermediate",
    language: "English",
    category: "Database",
    studentsEnrolled: 5800
  }
];

export default courses;
