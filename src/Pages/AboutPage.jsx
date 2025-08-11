import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import about3 from "../assets/about3.jpg"

const teamMembers = [
    {
        id: 1,
        name: "Alice Johnson",
        role: "Founder & CEO",
        // img: "https://randomuser.me/api/portraits/women/44.jpg",
        img : about1,
        bio: "Passionate about empowering learners through quality education and innovative technology.",
    },
    {
        id: 2,
        name: "Michael Smith",
        role: "CTO",
        // img: "https://randomuser.me/api/portraits/men/46.jpg",
        img : about2,
        bio: "Tech geek dedicated to building scalable and user-friendly learning platforms.",
    },
    {
        id: 3,
        name: "Sara Lee",
        role: "Content Manager",
        img : about3,
        // img: "https://randomuser.me/api/portraits/women/65.jpg",
        bio: "Ensures every course delivers maximum value and up-to-date knowledge.",
    },
];

function AboutPage() {
    return (
        <Container className="py-5">
            {/* Header */}
            <header className="mb-5 text-center">
                <h1 className="fw-bold display-4" style={{ color: "#ed5605" }}>About EduKart</h1>
                <p className="lead text-secondary mx-auto" style={{ maxWidth: "600px" }}>
                    Our mission is to provide accessible, high-quality education for everyone.
                </p>
            </header>

            {/* Mission Statement */}
            <section className="mb-5">
                <h3 className="mb-4"  style={{ color: '#0d3c84ff' }}>Our Mission</h3>
                <p className="lead  fs-5" >
                    EduKart is dedicated to transforming the way people learn online by
                    offering a wide range of courses tailored for learners of all levels.
                    We believe in empowering individuals through education to help them
                    achieve their goals and build better futures.
                </p>
            </section>

            {/* Team Section */}
            <section className="mb-5 pb-md-3">
                <h3 className="mb-4 text-center"  style={{ color: '#0d3c84ff' }}>Meet Our Team</h3>
                <Row className="g-3 justify-content-center">
                    {teamMembers.map(({ id, name, role, img, bio }) => (
                        <Col xs={12} md={4} lg={3} key={id} className="d-flex justify-content-center">
                            <Card className="h-auto shadow-lg rounded-3" style={{ maxWidth: "280px" }}>
                                <Card.Img
                                    variant="top"
                                    src={img}
                                    alt={`${name} photo`}
                                    className="rounded-top"
                                />
                                <Card.Body className="p-3">
                                    <Card.Title className="mb-1 fw-semibold fs-5">{name}</Card.Title>
                                    <Card.Subtitle className="mb-2 fs-7"  style={{ color: '#0d3c84ff' }}>{role}</Card.Subtitle>
                                    <Card.Text className="text-secondary  fs-7">{bio}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Core Values */}
            <section className="mb-5">
                <h3 className="mb-4 text-center"  style={{ color: '#0d3c84ff' }}>Our Core Values</h3>
                <Row className="text-center" >
                    <Col md={4} className="mb-4" >
                        <div className="p-4 text-white shadow h-100" style={{ backgroundColor: '#e8a74cff' }}>
                            <h5 className="mb-3">Accessibility</h5>
                            <p className=" mb-0">
                                Making quality education available to everyone, everywhere.
                            </p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4">
                        <div className="p-4 text-white shadow h-100" style={{ backgroundColor: '#e8a74cff' }}>
                            <h5 className="mb-3">Innovation</h5>
                            <p className=" mb-0">
                                Leveraging the latest technology to enhance learning experiences.
                            </p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4">
                        <div className="p-4 text-white shadow h-100" style={{ backgroundColor: '#e8a74cff' }}>
                            <h5 className="mb-3">Community</h5>
                            <p className=" mb-0">
                                Fostering a supportive and collaborative learning environment.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>

        </Container>
    );
}

export default AboutPage;
