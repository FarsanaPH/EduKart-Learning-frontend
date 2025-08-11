import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-4 align-items-center">
  <Col xs={12} sm={4} className="text-center text-sm-start mb-3 mb-sm-0">
    <h2 className="fw-bold"  style={{ color: '#0d3c84ff' }}>CONTACT US</h2>
  </Col>
  <Col xs={12} sm={8} className="text-center text-sm-start">
    <p className="text-muted" style={{ fontSize: "0.9rem", maxWidth: "600px", margin: "0 auto" }}>
      If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
    </p>
  </Col>
</Row>

      <Row className="g-4">
        {/* Get In Touch Form */}
        <Col md={6}>
          <div className="p-5 bg-light rounded shadow-sm">
            <h5 className="mb-4 fw-semibold" >GET IN TOUCH</h5>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Enter your name*" required />
                </Col>
                <Col>
                  <Form.Control type="tel" placeholder="Enter your phone number*" required />
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email*" required />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>
              <Button variant="" type="submit" style={{ backgroundColor: "#ed5605" }} className="px-4 text-white">
                SEND MESSAGE
              </Button>
            </Form>
          </div>
        </Col>

        {/* Contact Info & Business Hours */}
        <Col md={6}>
          <Row className="mb-4">
            <Col className="bg-light rounded shadow-sm p-4">
              <h5 className="fw-semibold mb-3">CONTACT INFORMATION</h5>
              <p><FaPhone className="me-2" style={{ color: "#ed5605" }} /> +91 98765 12345</p>
              <p><FaMapMarkerAlt className="me-2 " style={{ color: "#ed5605" }}/> 123 EduKart Lane, Knowledge City, 456789, India</p>
              <p><FaEnvelope className="me-2" style={{ color: "#ed5605" }}/> support@edukart.com</p>
            </Col>
          </Row>
          <Row>
  <Col className="bg-light rounded shadow-sm p-4">
    <h5 className="fw-semibold mb-3">STUDENT SUPPORT</h5>
    <p className="mb-1"><strong >Monday - Friday:</strong> 10:00 am - 6:00 pm</p>
    <p className="mb-1"><strong>Saturday:</strong> 10:00 am - 4:00 pm</p>
    <p><strong>Sunday:</strong> Support via email only</p>
  </Col>
</Row>
        </Col>
      </Row>

      {/* Google Map */}
      <Row className="mt-5">
        <Col>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.263959989466!2d76.6826161147744!3d10.87501899228161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba841945b755555%3A0xc63ec0a8e9c22fc3!2sVallapuzha%2C%20Kerala%20678516%2C%20India!5e0!3m2!1sen!2sin!4v1686654321000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
