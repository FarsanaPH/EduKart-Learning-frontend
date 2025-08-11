import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import courses from "../Data/coursedata";
import { div } from "framer-motion/client";
import CartModal from "../Components/CartModal";
import CheckoutModal from "../Components/CheckoutModal";

function CourseDetail() {
  const { id } = useParams(); // get id from URL
  const course = courses.find((c) => c.id == id); // match by id


  return (
    <Container className="my-1 my-md-5 py-4 py-md-5 mb-3">
      {!course ? (
        <p className="text-center">Course not found. Oops! Try Again.</p>
      ) : (
        <Row className="align-items-center">
          {/* LEFT SIDE IMAGE */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img
              src={course.image}
              alt={course.title}
              className="img-fluid rounded shadow"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </Col>

          {/* RIGHT SIDE DETAILS */}
          <Col md={7}>
            <h2 className="fw-bold">{course.title}</h2>
            <p className="text-muted">{course.description}</p>

            <ul className="list-unstyled mb-4">
              <li><strong>Instructor:</strong> {course.instructor}</li>
              <li><strong>Duration:</strong> {course.duration}</li>
              <li><strong>Level:</strong> {course.level}</li>
              <li><strong>Language:</strong> {course.language}</li>
              <li><strong>Category:</strong> {course.category}</li>
              <li><strong>Students Enrolled:</strong> {course.studentsEnrolled.toLocaleString()}</li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold fs-4">
                ₹{course.discountedPrice}
              </span>
              <span className="text-decoration-line-through fw-semibold text-danger">
                ₹{course.originalPrice}
              </span>
            </div>

            <div className="text-start mb-3 d-flex align-items-center gap-2">
              <Badge bg="success d-flex align-items-center gap-1">
                {course.rating} <FaStar />
              </Badge>
              <small className="text-muted">({course.reviews} reviews)</small>
            </div>

            {/* Add to Cart and Buy Now Button */}
            <div className="d-flex gap-2">
              <CartModal course={course} />       {/* Add to cart button */}
              <CheckoutModal course={course} />  {/* Buy Now button */}
            </div>
          </Col>
        </Row>)
      }

    </Container >
  );
}

export default CourseDetail;
