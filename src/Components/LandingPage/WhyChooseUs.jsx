import React from 'react'
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiBookAura, GiBookPile } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import ChooseUs from "../../assets/chooseus.png";

function WhyChooseUs() {
    const features = [
        {
            icon: <GiBookAura size={30} />,
            title: 'Online Courses',
            description: 'Access a wide range of flexible and self-paced courses from anywhere at any time.',
        },
        {
            icon: <PiCertificate size={30} />,
            title: 'Earn a Certificate',
            description: 'Receive industry-recognized certificates upon course completion to boost your career.',
        },
        
        {
            icon: <GiBookPile size={30} />,
            title: 'Hands-on Training',
            description: 'Engage in real-time practical sessions to strengthen your technical and coding skills.',
        },
        {
            icon: <FaChalkboardTeacher size={30} />,
            title: 'Learn with Experts',
            description: 'Gain insights from certified instructors and experienced professionals in the field.',
        },
        
    ];
    return (
        <>
            <Container className="py-5">
                <div className="text-center mb-3">
                    <p className="fw-semibold pb-3" style={{ color: "#ed5605" }}>WHY CHOOSE US</p>
                </div>

                <Row className="align-items-center">
                    <Col md={6} className="order-2 order-md-1 mb-4 mb-md-0">
                        <img
                            src={ChooseUs}
                            alt="Student with laptop"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6} className="order-1 order-md-2">
                        <h2 className="mb-5 fw-semibold text-primary text-center text-md-start" >Benefits of Our Online Learning Expertise</h2>
                        {features.map((feature,id) => (
                            <motion.div key={id}
                              initial={{ opacity: 0, x: 100 }}
                              whileInView={{opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: 0.6 }}
                            
                            >
                                <Card className="mb-3 mx-3 mx-md-0 shadow-sm border-0">
                                    <Card.Body className="d-flex align-items-start">
                                        <div className="me-3" style={{ color: "#ed5605" }}>{feature.icon}</div>
                                        <div>
                                            <h5 className="fw-bold">{feature.title}</h5>
                                            <p className="mb-0 text-muted">{feature.description}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WhyChooseUs