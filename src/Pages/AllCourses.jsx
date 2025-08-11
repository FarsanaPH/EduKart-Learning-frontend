import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
// import Hero from "../Components/LandingPage/Hero";// your hero component
import courses from "../Data/coursedata";  // your courses data array
import CourseCard from "../Components/CourseCard";
import BackgroundImg from "../assets/allcourses.jpg"
import { FaCirclePlay } from "react-icons/fa6";


function AllCourses() {
  return (
    <>
      <div className="mb-5">
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            width: "100%",
            minHeight: "400px",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "80px 0",
          }}
        >
          {/* dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 0,
            }}
          ></div>

          <Container style={{ position: "relative", zIndex: 1 }}>
            <Row>
              <Col md={6} className="text-center text-md-start">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="fw-bold mb-2"
                  style={{ color: "#ffd700" }}
                >
                  EMPOWER YOUR FUTURE
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="display-2 fw-bold"
                >
                  Discover the

                  <span style={{ color: "#ed5605" }}> EduKart </span>Knowledge
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0 }}
                >
                  <p className="my-3 fs-5">
                    Step into your future with our trusted education.
                    <br />
                    Learn from industry experts anytime, anywhere.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Courses Listing */}
        <Container className="my-3 py-3">
          <h4 className="mb-5 text-center fw-semibold" style={{ color: "#ed5605" }}>EXPLORE OUR COURSES</h4>
          <Row className="g-4">
            {courses.map((course) => (
              <Col key={course.id} xs={12} md={4} lg={3}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AllCourses;
