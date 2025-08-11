import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function NewsLetter() {
    return (
        <>
            {/* Email Subscribe Section */}
            <section className="p-4 p-md-5" style={{ backgroundColor: '#0d3c84ff' }} >
                <Container >
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h4 className="fw-bold fs-3 mb-2 text-white" >
                                Newsletter
                            </h4>
                            <p className="mb-0 text-white" style={{ color: "#ed5605" }}>
                                Stay tuned and get the latest updates from us right in your inbox.
                            </p>
                        </Col>
                        <Col md={6} className='pt-2 pt-md-0'>
                            <Form className="d-flex">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    className="me-2 rounded-2 border-1"
                                    style={{ flex: 1 }}
                                />
                                <Button
                                    type="submit"
                                    className="rounded-2 px-4 fw-semibold border-0"
                                    style={{
                                        backgroundColor: "#ed5605"
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default NewsLetter