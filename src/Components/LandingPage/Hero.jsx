import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from "framer-motion"
import HeroImg from "../../assets/HeroImgs.png";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <>
            <div
                className="bg-white">
                <Container>
                    <Row className="align-items-center">
                        {/* Left Text */}
                        <Col md={6} className="text-center text-md-start mb-4 mb-md-0 py-5">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="text-primary fw-bold mb-2">
                                100% SATISFACTION GUARANTEE
                            </motion.p>
                            <motion.h1 initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="display-2 fw-bold">
                                Start Learning
                                <br />with<span style={{ color: "#ed5605" }}> EduKart</span>
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0 }}
                            >
                                <p className="text-secondary my-3 fs-5">
                                    Top rated online courses to boost
                                    <br />
                                    your skills, career, and confidence.
                                </p>
                                <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
                                    <Button onClick={() => navigate("/allcourses")} variant="primary" className="btn-lift text-white rounded-pill px-4 py-2">
                                        Get started
                                    </Button>
                                    <a  variant="light" onClick={() => navigate("/allcourses")} className="btn-lift d-flex align-items-center gap-2 text-decoration-none bg-white px-3 py-2 rounded-pill shadow">                                         
                                        <FaCirclePlay className="text-primary " />
                                        <span className="text-dark">See how it works</span>
                                    </a>
                                    {/* <Button onClick={() => navigate("/courses")} variant="light" className="btn-lift d-flex align-items-center mb-3  p-1 pe-3 gap-2 bg-white rounded-pill shadow">
                                        <FaCirclePlay className="text-primary fs-1" />
                                        <span>View All Courses</span>
                                    </Button> */}
                                </div>
                            </motion.div>
                        </Col>
                        {/* Right Image */}
                        <Col md={6} sm={12} className="text-center px-3 ">
                            <motion.img
                                initial={{ opacity: 0, x: 200 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: "100", delay: 0.2 }}
                                src={HeroImg} alt="Hero"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Hero