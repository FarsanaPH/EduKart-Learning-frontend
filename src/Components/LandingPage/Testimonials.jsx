import React from 'react'
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Riya Sharma",
        role: "Frontend Developer",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "This course platform transformed the way I learn. The content is clear, the support is amazing, and I landed my dream job thanks to it!",
    },
    {
        id: 2,
        name: "Arjun Patel",
        role: "Software Engineer",
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        text: "Highly recommend! The courses are well structured and the instructors really know their stuff. It’s helped me level up my skills.",
    },
    {
        id: 3,
        name: "Sneha Kaur",
        role: "UX Designer",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "The hands-on projects and community support made this an awesome learning experience. I feel confident applying what I learned .",
    },
];

function Testimonials() {
    return (
        <section className="bg-light py-2 py-md-5 ">
            <Container className='mb-5 mb-md-2'>
                <p className="text-center fw-semibold mt-3 mt-md-0 mb-2" style={{ color: "#ed5605" }}>TESTIMONIAL</p>
                <h2 className="text-center mb-2 text-primary " >What Our Learners Say</h2>
                <p className="text-center fw-semibold px-5 mx-0 mx-md-5 mb-3 mb-md-5  " >Your experiences inspire us to keep improving and help others unlock their true potential.  </p>
                <Row className="justify-content-center">
                    {testimonials.map(({ id, name, role, photo, text }) => (
                        <Col key={id} md={4} sm={6} xs={12} className="mb-md-4 mb-2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Card className="h-100 shadow rounded-3 p-3 p-md-4 mx-3 mx-md-0 border-0" style={{ borderColor: "#ed5605" }} >
                                    <div className="d-flex align-items-center mb-2 mb-md-3">
                                        <Image
                                            src={photo}
                                            roundedCircle
                                            width={60}
                                            height={60}
                                            className="me-3"
                                            alt={`${name}'s photo`}
                                            style={{ objectFit: "cover", border: "3px solid #ed5605" }}
                                        />
                                        <div>
                                            <h5 className="mb-0 fw-semibold" style={{ color: "#ed5605" }} >{name}</h5>
                                            <small className="text-muted">{role}</small>
                                        </div>
                                    </div>
                                    <Card.Text className="fst-italic">"{text}"</Card.Text>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Testimonials;
