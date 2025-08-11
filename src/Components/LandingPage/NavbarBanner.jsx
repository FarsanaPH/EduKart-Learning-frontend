import React, { useState } from "react";
import { Alert, Container, Row, Col, CloseButton } from "react-bootstrap";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function NavbarBanner() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    return (
        <>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }} // Animate over 0.5s, but start after a 0.5s delay
                >
                    <Alert variant="warning" className="d-none d-lg-block text-center mb-0 py-2 position-relative ">
                        <Container>
                            <Row className="align-items-center">
                                <Col>
                                    Are you a student or working professional looking to learn online?
                                    <a onClick={() => navigate("/contact")}  className="ms-2 text-decoration-none">
                                        Talk to us
                                    </a>
                                </Col>
                                <CloseButton
                                    onClick={() => setIsOpen(false)}
                                    className="position-absolute top-0 end-0 mt-2 me-2"
                                />
                            </Row>
                        </Container>
                    </Alert>
                </motion.div>
            )}
        </>
    );
};

export default NavbarBanner;