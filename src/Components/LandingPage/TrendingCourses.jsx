import React from 'react';
// import { motion } from "framer-motion"
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { FaCirclePlay } from "react-icons/fa6";
import courses from "../../Data/coursedata";
import CourseCard from '../CourseCard';
import { useNavigate } from 'react-router-dom';


const trendingCourses = courses.slice(0, 3)

function TrendingCourses() {

    const navigate = useNavigate();

    return (
        <div className='bg-light p-4 p-md-5 '>
            <Container className="my-2 py-2 ">
                <Row className="align-items-center mb-0 mb-md-4 text-center text-md-start  ">
                    <Col>
                        <h2 className='text-primary' >Ready to Level Up Your Skills?</h2>
                        <p className="fw-semibold text text-uppercase" style={{ color: "#ed5605" }}>Get started with our most popular courses!</p>
                    </Col>

                </Row>

                <Row className="g-4 pt-3 text-center text-md-start">
                    {trendingCourses.map((course) => (
                        <Col key={course.id} xs={12} md={3} >
                            <CourseCard course={course} />       {/*coursecard used here  */}
                        </Col>
                    ))}
                    <Col xs={12} md={3} className="d-flex justify-content-center align-items-md-center text-center text-md-end mt-4 mt-md-0">
                        <Button onClick={() => {navigate("/allcourses") }} variant="light" className="btn-lift d-flex align-items-center mb-3 p-2 p-md-1 pe-3 gap-2 bg-white rounded-pill shadow">
                            <FaCirclePlay className="text-primary fs-1" />
                            <span className='pe-2' >View All Courses</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TrendingCourses;
