import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {motion} from "framer-motion"
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.jpg";

const bannerData = [
    {
        image: Banner2,
        tag: "LEARN AT YOUR OWN PACE",
        title: "Flexible Online Courses Designed for Busy Learners",
        subtitle:
            "Access high-quality video lessons, downloadable resources, and expert support—anytime, anywhere. Whether you're upskilling or starting fresh, we’ve got a course for you.",
    },
    {
        image: Banner1,
        tag: "CERTIFIED & CAREER-FOCUSED",
        title: "Get Certified & Boost Your Career Opportunities",
        subtitle:
            "Earn certificates recognized by leading companies. Our career-oriented curriculum is designed to give you the skills and confidence to succeed in today’s job market.",
    },
];


function Banner() {
    return (
        <>
            <div className="px-3 px-md-0" >
                {bannerData.map((item, index) => (
                    <Container key={index} className="mb-5">
                        <Row className={`align-items-center ${index % 2 !== 0 ? "flex-row-reverse" :"" }`}>   {/*reversing content - 0 % 2 = 0 is false so, no "flex-row-reverse" - 1 % 2 = 1 is true so add "flex-row-reverse" */}
                            <Col md={6} className="mb-4 mb-md-0">
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    style={{ color: "#ed5605" }}
                                    className="text-warning fw-semibold text-uppercase small mb-2"
                                >
                                    {item.tag}
                                </motion.p>
                                <motion.h3
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    className="fw-semibold mb-3">
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                    className="text-muted mb-4">
                                    {item.subtitle}
                                </motion.p>
                                <motion.button
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.1 }}
                                    style={{ backgroundColor: "#ed5605" }}
                                    className="btn rounded-pill text-white" >
                                    Get Started
                                </motion.button>
                            </Col>
                            <Col md={6} className="text-center ">
                                <motion.img 
                                initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffiness: 100 }}

                                src={item.image} alt="Banner" className="img-fluid" />
                            </Col>
                        </Row>
                    </Container>
                ))}
            </div >
        </>
    )
}

export default Banner